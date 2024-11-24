import { ResponsiveLine } from "@nivo/line";

const MyResponsiveLine = ({
  view,
  totalSalesLine,
  totalUnitsLine,
  isDashboard,
  theme,
  formattedData,
}) => (
  <ResponsiveLine
    data={
      !formattedData
        ? view === "sales"
          ? totalSalesLine
          : totalUnitsLine
        : formattedData
    }
    margin={{
      top: formattedData ? 50 : 20,
      right: 50,
      bottom: formattedData ? 70 : 50,
      left: formattedData ? 60 : 70,
    }}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: theme.palette.secondary[200],
          },
        },
        legend: {
          text: {
            fill: theme.palette.secondary[200],
          },
        },
        ticks: {
          line: {
            stroke: theme.palette.secondary[200],
            strokeWidth: 1,
          },
          text: {
            fill: theme.palette.secondary[200],
          },
        },
      },
      legends: {
        text: {
          fill: theme.palette.secondary[200],
        },
      },
      tooltip: {
        container: {
          color: theme.palette.primary.main,
        },
      },
    }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="catmullRom"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      format: (v) => {
        if (isDashboard) return v.slice(0, 3);
        return v;
      },
      tickSize: 5,
      tickPadding: 5,
      tickRotation: formattedData ? 90 : 0,
      legend: formattedData ? "Month" : isDashboard ? "" : "Month",
      legendOffset: formattedData ? 60 : 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: formattedData
        ? "Total"
        : isDashboard
        ? ""
        : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
      legendOffset: formattedData ? -50 : -60,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    enableGridX={false}
    enableGridY={false}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    legends={
      formattedData
        ? [
            {
              anchor: "top-right",
              direction: "column",
              justify: false,
              translateX: 50,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]
        : !isDashboard
        ? [
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 30,
              translateY: -40,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]
        : undefined
    }
  />
);

export default MyResponsiveLine;
