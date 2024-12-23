/** @format */

import { NavLink } from "react-router";

export function Switch() {
  return (
    <nav>
      <NavLink to="expenses">
        <button>Expenses</button>
      </NavLink>
      <NavLink to="income">
        <button>Income</button>
      </NavLink>
    </nav>
  );
}
