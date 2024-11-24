import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useGetSalesQuery } from "state/api";
import MyResponsivePie from "./MyResponsivePie";

const BreakdownChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();

  if (!data || isLoading) return <>Loading...</>;

  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ];

  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales,
      color: colors[i],
    })
  );

  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "32px" : undefined}
      position={"relative"}
    >
      <MyResponsivePie
        isDashboard={isDashboard}
        theme={theme}
        formattedData={formattedData}
      />
      <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        color={theme.palette.secondary[400]}
        textAlign={"center"}
        pointerEvents="none"
        sx={{
          transform: isDashboard
            ? "translate(-75%,-170%)"
            : "translate(-50%,-100%)",
        }}
      >
        <Typography variant="h6">
          {!isDashboard && "Total:"} ${data.yearlySalesTotal}
        </Typography>
      </Box>
    </Box>
  );
};

export default BreakdownChart;
