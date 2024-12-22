/** @format */

import { useSelector } from "react-redux";
import { Chart } from "../Chart/Chart";
import ReportsIconSet from "../ReportsIconSet/ReportsIconSet";
import ReportsIncExpSum from "../ReportsIncExpSum/ReportsIncExpSum";
import { selectIncomes } from "../../redux/storeSlice";


export default function ReportIncome() {

  const allIncomes = useSelector(selectIncomes);

  console.log(allIncomes)

  return (
    <div>
      <ReportsIncExpSum />
      <ReportsIconSet />
      <Chart arrOfTransaction={allIncomes} />
    </div>
  );
}
