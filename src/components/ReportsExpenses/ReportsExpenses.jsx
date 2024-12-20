/** @format */

import { Chart } from "../Chart/Chart";
import ReportsIconSet from "../ReportsIconSet/ReportsIconSet";
import ReportsIncExpSum from "../ReportsIncExpSum/ReportsIncExpSum";

export default function ReportExpenses() {
  return (
    <div>
      <ReportsIncExpSum />
      <ReportsIconSet />
      <Chart />
    </div>
  );
}
