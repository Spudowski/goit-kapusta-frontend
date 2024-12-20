/** @format */

import { Chart } from "../Chart/Chart";
import ReportsIconSet from "../ReportsIconSet/ReportsIconSet";
import ReportsIncExpSum from "../ReportsIncExpSum/ReportsIncExpSum";

export default function ReportIncome() {
  return (
    <div>
      <ReportsIncExpSum />
      <ReportsIconSet />
      <Chart />
    </div>
  );
}
