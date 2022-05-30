import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="name..."
          />
          <input
            type="password"
            className="form-control"
            placeholder="password..."
          />
          <a href="/telegram" className="btn btn-primary w-100 mt-3">
            Yuborish
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
