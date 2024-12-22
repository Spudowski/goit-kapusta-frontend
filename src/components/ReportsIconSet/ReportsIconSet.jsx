/** @format */
import React from "react";
import "../../App.css";
import { selectIncomesStat } from "../../redux/storeSlice";
import { Switch } from "../IncExpSwitch/IncExpSwitch";
import css from "./ReportsIconSet.module.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { expencesIcons, incomeIcons } from "./icons";

export default function ReportsIconSet() {
  const incomesStat = useSelector(selectIncomesStat);
  const location = useLocation();
  return (
    <div className={css.backgroundRoboczeDoUsuniecia}>
      <div className={css.box}>

      <h1>
          {location.pathname === "/reports/expenses" ? "Expenses" : "Income"}
      </h1>
      
        <div className={css.icons}>
          {location.pathname === "/reports/expenses" 

          ? 

          expencesIcons.map((icon, index) => ( 
            <React.Fragment key={index}>
            <div key={index} className={css.div_svg}>
              <p>kwota</p>
              <svg className={css.svg}>
                <use href={icon}></use>
              </svg>
              <div className={css.div_background_svg}></div>
              <p>kategoria</p>
            </div>
            {(index + 1) % 3 === 0 && <div className={css.line}></div>}
            </React.Fragment> 
          )) 

          : 

          incomeIcons.map((icon, index) => (
            <div key={index} className={css.div_svg}>
              <svg className={css.svg}>
                <use href={icon}></use>
              </svg>
              <div className={css.div_background_svg}></div>
            </div>
          ))}
        </div>
        
        {/* <div>{`${incomesStat}`}</div> */}
      </div>
    </div>
  );
}