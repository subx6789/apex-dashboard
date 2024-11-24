import { ResponsivePie } from "@nivo/pie";

const MyResponsivePie = ({ formattedData, theme, isDashboard }) => (
  <ResponsivePie
    data={formattedData}
    margin={
      isDashboard
        ? { top: 40, right: 80, bottom: 100, left: 50 }
        : { top: 40, right: 80, bottom: 80, left: 80 }
    }
    sortByValue={true}
    innerRadius={0.45}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    enableArcLinkLabels={!isDashboard}
    arcLinkLabelsTextColor={theme.palette.secondary[200]}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    colors={{ datum: "data.color" }}
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
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: isDashboard ? 20 : 0,
        translateY: isDashboard ? 50 : 56,
        itemsSpacing: 0,
        itemWidth: 85,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: theme.palette.primary[500],
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsivePie;
