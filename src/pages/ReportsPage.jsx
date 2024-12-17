/** @format */

import { Outlet } from "react-router";
import { Switch } from "../components/IncExpSwitch/IncExpSwitch";
import { BalanceBar } from "../components/Balance/Balance";

export default function ReportPage() {
  return (
    <div>
      <BalanceBar isReports={true} isSummary={false} />
      ReportPage
      <Switch />
      <Outlet />
    </div>
  );
}
