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

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ReportsIncExpSum() {
  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);
  const [year, setYear] = useState(currentYear);

  const dispatch = useDispatch();

  const totalExpenseMonth = useSelector(selectExpenseStat);
  const totalIncomeMonth = useSelector(selectIncomesStat);
  const token = useSelector(selectToken);

  let monthIncome = 0;
  if (totalIncomeMonth) {
    Object.entries(totalIncomeMonth).forEach(([key, value]) => {
      if (key === monthNames[monthIndex]) {
        monthIncome = value || 0;
      }
    });
  }

  let monthExpense = 0;
  if (totalExpenseMonth) {
    Object.entries(totalExpenseMonth).forEach(([key, value]) => {
      if (key === monthNames[monthIndex]) {
        monthExpense = value || 0;
      }
    });
  }

  const handleMonthChange = (newMonthIndex) => {
    setMonthIndex(newMonthIndex);
  };

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  useEffect(() => {
    if (token) {
      dispatch(
        userTransactionPeriodDate({
          monthIndex,
          year,
          token,
        })
      );
    }
  }, [monthIndex, year, dispatch, token]);

  return (
    <div className={css.backgroundRoboczeDoUsuniecia}>
      <div className={css.bar}>
        <p>Month:</p>
        <select
          value={monthIndex}
          onChange={(e) => handleMonthChange(Number(e.target.value))}
        >
          {monthNames.map((month, index) => (
            <option key={index} value={index}>
              {month}
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
