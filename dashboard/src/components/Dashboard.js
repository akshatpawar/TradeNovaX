import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import ProtectedRoute from "./ProtectedRoute";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <ProtectedRoute>
        <WatchList />
      </ProtectedRoute>
      <div className="content">
        <Routes>
          <Route exact path="/" element={
            <ProtectedRoute>
              <Summary />
            </ProtectedRoute>
          } />
          <Route path="/orders" element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          } />
          <Route path="/holdings" element={
            <ProtectedRoute>
              <Holdings />
            </ProtectedRoute>
          } />
          <Route path="/positions" element={
            <ProtectedRoute>
              <Positions />
            </ProtectedRoute>
          } />
          <Route path="/funds" element={
            <ProtectedRoute>
              <Funds />
            </ProtectedRoute>
          } />
          <Route path="/apps" element={
            <ProtectedRoute>
              <Apps />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
