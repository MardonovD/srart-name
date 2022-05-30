import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <input type="text" className="form-control mb-3" placeholder="name..." />
          <input
            type="password"
            className="form-control"
            placeholder="password..."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
