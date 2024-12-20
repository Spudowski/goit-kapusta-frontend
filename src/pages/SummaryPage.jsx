/** @format */

import { Outlet } from "react-router";
import { Switch } from "../components/IncExpSwitch/IncExpSwitch";
import { BalanceBar } from "../components/Balance/Balance";

export default function SummaryPage() {
  return (
    <div>
      <BalanceBar isReports={false} isSummary={true} />
      SummaryPage
      <Switch />
      <Outlet />
    </div>
  );
}
