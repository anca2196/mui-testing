import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import styles from "./Graph.module.scss";

const Graph = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>H1 Analytics</h1>
      <div className={styles.graphWrapper}>
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          width={800}
          xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
        <div className={styles.textWrapper}>
          <h3>Sales Graph</h3>
          <p>Some commentary on graph</p>
          <p>Paragraph text Paragraph text Paragraph text Paragraph text</p>
          <p>Paragraph text Paragraph text Paragraph text Paragraph text</p>
        </div>
      </div>
    </div>
  );
};

export default Graph;
