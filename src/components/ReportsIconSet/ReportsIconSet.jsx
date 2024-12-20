/** @format */
import "../../App.css";
import { selectIncomesStat } from "../../redux/storeSlice";
import { Switch } from "../IncExpSwitch/IncExpSwitch";
import css from "./ReportsIconSet.module.css";
import { useSelector } from "react-redux";

export default function ReportsIconSet() {
  const incomesStat = useSelector(selectIncomesStat);

  return (
    <div className={css.backgroundRoboczeDoUsuniecia}>
      <div className={css.box}>
        <Switch />
        <div>ReportsIconSet</div>
        <div>{`${incomesStat}`}</div>
      </div>
    </div>
  );
}
