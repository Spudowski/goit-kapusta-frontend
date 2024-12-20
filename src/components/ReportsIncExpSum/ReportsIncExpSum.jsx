/** @format */
import "../../App.css";
import { selectIncomesStat, selectExpenseStat } from "../../redux/storeSlice";
import css from "./ReportsIncExpSum.module.css";
import { useSelector } from "react-redux";

export default function ReportsIncExpSum() {
  const totalIncomeMonth = useSelector(selectIncomesStat);
  const januaryIncome = totalIncomeMonth?.January || 0; // Pobierz wartość January lub 0, jeśli undefined
  const totalExpenseMonth = useSelector(selectExpenseStat);
  const januaryExpense = totalExpenseMonth?.January || 0; // Pobierz wartość January lub 0, jeśli undefined
  return (
    <div className={css.backgroundRoboczeDoUsuniecia}>
      <div className={css.bar}>
        <p>Expenses:</p>
        <p className={css.textExpense}>{`${januaryExpense}`}</p>
        <p>Income:</p>
        <p className={css.textIncome}>{`${januaryIncome}`}</p>
      </div>
    </div>
  );
}
