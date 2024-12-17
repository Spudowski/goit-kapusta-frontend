/** @format */

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const SummaryPage = lazy(() => import("./pages/SummaryPage"));
  const SummaryExpenses = lazy(() =>
    import("./components/SummaryExpenses/SummaryExpenses")
  );
  const SummaryIncome = lazy(() =>
    import("./components/SummaryIncome/SummaryIncome")
  );
  const ReportsPage = lazy(() => import("./pages/ReportsPage"));
  const ReportsExpenses = lazy(() =>
    import("./components/ReportsExpenses/ReportsExpenses")
  );
  const ReportsIncome = lazy(() =>
    import("./components/ReportsIncome/ReportsIncome")
  );
  const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summary" element={<SummaryPage />}>
            <Route path="expenses" element={<SummaryExpenses />} />
            <Route path="income" element={<SummaryIncome />} />
          </Route>
          <Route path="/reports" element={<ReportsPage />}>
            <Route path="expenses" element={<ReportsExpenses />} />
            <Route path="income" element={<ReportsIncome />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
