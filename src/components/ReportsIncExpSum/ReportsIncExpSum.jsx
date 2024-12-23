import { useState, useEffect } from "react";
import "../../App.css";
import {
  selectIncomesStat,
  selectExpenseStat,
  selectToken,
} from "../../redux/storeSlice";
import css from "./ReportsIncExpSum.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userTransactionPeriodDate } from "../../redux/transaction/operation";

export default function ReportsIncExpSum() {
  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);
  const [year, setYear] = useState(currentYear);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const totalExpenseMonth = useSelector(selectExpenseStat);
  const totalIncomeMonth = useSelector(selectIncomesStat);

  const monthIncome = totalIncomeMonth ? totalIncomeMonth[monthIndex] || 0 : 0;
  const monthExpense = totalExpenseMonth
    ? totalExpenseMonth[monthIndex] || 0
    : 0;

  const handleMonthChange = (newMonthIndex) => {
    setMonthIndex(newMonthIndex);
  };

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  useEffect(() => {
    dispatch(
      userTransactionPeriodDate({
        monthIndex,
        year,
        token,
      })
    );
  });

  return (
    <div className={css.backgroundRoboczeDoUsuniecia}>
      <div className={css.bar}>
        <p>Month:</p>
        <select
          value={monthIndex}
          onChange={(e) => handleMonthChange(Number(e.target.value))}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <option key={index} value={index}>
              {new Date(0, index).toLocaleString("en", { month: "long" })}
            </option>
          ))}
        </select>

        <p>Year:</p>
        <input
          type="number"
          value={year}
          onChange={(e) => handleYearChange(Number(e.target.value))}
        />

        <p>Expenses:</p>
        <p className={css.textExpense}>{`${monthExpense}`}</p>
        <p>Income:</p>
        <p className={css.textIncome}>{`${monthIncome}`}</p>
      </div>
    </div>
  );
}
