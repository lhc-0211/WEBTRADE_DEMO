import React from "react";

const Home: React.FC = () => {
  return (
    <div className={"p-4"}>
      <h1>Welcome to WebTrading</h1>
      <p>This is the Home page.</p>

      {/* Ví dụ các component nhỏ trong Home */}
      <div className="dashboard-cards grid grid-cols-3 gap-4 mt-4">
        <div className="card p-4 bg-white shadow rounded">
          Portfolio Overview
        </div>
        <div className="card p-4 bg-white shadow rounded">Recent Orders</div>
        <div className="card p-4 bg-white shadow rounded">Market Watch</div>
      </div>
    </div>
  );
};

export default Home;
