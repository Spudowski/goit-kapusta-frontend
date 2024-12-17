/** @format */

import { NavLink } from "react-router";

export function BalanceBar({ isReports, isSummary }) {
  return (
    <div>
      {isReports ? (
        <NavLink to="/summary/expenses">
          <button>Back to summary</button>
        </NavLink>
      ) : (
        ""
      )}
      BalanceBar
      {isReports ? " Switch with calendar" : ""}
      {isSummary ? (
        <NavLink to="/reports/expenses">
          <button>Reports</button>
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );
}
