import React from 'react';
import { Link } from 'react-router-dom';
export const PredictSideBar = (props) => {
  return (
    <>
      <nav
        class="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{
          zIndex: '3',
          width: '300px',
          color: '#aaa',
          marginTop: '200px',
        }}
        id="mySidebar"
      >
        <div class="w3-bar-block">
          <br />
          <br />

          <div class="w3-container">
            <button
              class="w3-btn w3-blue w3-round-large"
              style={{ width: '100%' }}
            >
              <Link to="/" style={{ textDecoration: 'None' }}>
                ResearcherView
              </Link>
            </button>
            <br></br>
            <br></br>
            <button
              class="w3-btn w3-blue w3-round-large"
              style={{ width: '100%' }}
            >
              <Link to="/import" style={{ textDecoration: 'None' }}>
                Import Data
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
