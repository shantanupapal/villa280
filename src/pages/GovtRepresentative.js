import React from 'react';
import { Header } from '../components/Header';
import { PredictSideBar } from '../components/PredictSideBar';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';
export const GovtRepresentative = () => {
  const [projectedGdpValue, setProjectedGdpValue] = React.useState(20);
  const [currAccBalValue, setCurrAccBalValue] = React.useState(20);
  const [fdiInValue, setFdiInValue] = React.useState(20);
  const [fertPercValue, setFertPercValue] = React.useState(20);
  const [totalReservePercValue, setTotalReservePercValue] = React.useState(20);
  const [fdiOutValue, setFdiOutValue] = React.useState(20);
  const [agriContValue, setAgriContValue] = React.useState(20);
  const [manufacturingValue, setManufacturingValue] = React.useState(20);
  const [agriGrowthValue, setAgriGrowthValue] = React.useState(20);
  const [totalDebtValue, setTotalDebtValue] = React.useState(20);

  const rangeSelector1 = (event, newValue) => {
    setProjectedGdpValue(newValue);
    console.log('rg1', newValue);
  };
  const rangeSelector2 = (event, newValue) => {
    setCurrAccBalValue(newValue);
    console.log('rg2', newValue);
  };
  const rangeSelector3 = (event, newValue) => {
    setFdiInValue(newValue);
    console.log('rg3', newValue);
  };
  const rangeSelector4 = (event, newValue) => {
    setFertPercValue(newValue);
    console.log('rg4', newValue);
  };
  const rangeSelector5 = (event, newValue) => {
    setTotalReservePercValue(newValue);
    console.log('rg5', newValue);
  };
  const rangeSelector6 = (event, newValue) => {
    setFdiOutValue(newValue);
    console.log('rg6', newValue);
  };
  const rangeSelector7 = (event, newValue) => {
    setAgriContValue(newValue);
    console.log('rg7', newValue);
  };
  const rangeSelector8 = (event, newValue) => {
    setManufacturingValue(newValue);
    console.log('rg8', newValue);
  };
  const rangeSelector9 = (event, newValue) => {
    setAgriGrowthValue(newValue);
    console.log('r9', newValue);
  };
  const rangeSelector10 = (event, newValue) => {
    setTotalDebtValue(newValue);
    console.log('rg10', newValue);
  };

  const callML = () => {
    Swal.fire({
      showCloseButton: true,
      icon: 'Sucess',
      title: 'Machine Learning Model called with following values:',
      html:
        'Projected GDP:' +
        projectedGdpValue +
        '<br/><br/>' +
        'Current Account Balance (% of GDP): ' +
        currAccBalValue +
        '<br/><br/>' +
        'Foreign direct investment, net inflows, (% of GDP): ' +
        fdiInValue +
        '<br/><br/>' +
        'Fertilizers consumption (% of fertilizer production): ' +
        fertPercValue +
        '<br/><br/>' +
        'Total reserves (% of total external debt): ' +
        totalReservePercValue +
        '<br/><br/>' +
        'FDI-NetOutflows(% of GDP): ' +
        fdiOutValue +
        '<br/><br/>' +
        'Agricultural Contribution(% GDP): ' +
        agriContValue +
        '<br/><br/>' +
        'Manufacturing(% GDP): ' +
        manufacturingValue +
        '<br/><br/>' +
        'Agricultue, Forestry, and Fishing value added(annual % growth): ' +
        agriGrowthValue +
        '<br/><br/>' +
        'Total debt service(% of GNI): ' +
        totalDebtValue +
        '<br/><br/>',
    });
  };

  return (
    <>
      <Header />
      <PredictSideBar />
      <div class="w3-main" style={{ marginLeft: '350px', marginTop: '170px' }}>
        <div class="w3-panel">
          <h1 style={{ marginTop: '50px' }}>Model Prediction</h1>{' '}
          <div class="w3-container">
            <div
              class="w3-row w3-container"
              style={{ margin: '50px 0', marginTop: '0px' }}
            ></div>
            <div class="w3-half w3-container">
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>Projected GDP:</h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={projectedGdpValue}
                  size="xlarge"
                  defaultValue={projectedGdpValue}
                  onChange={rangeSelector1}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>Current Account Balance (% of GDP):</h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={currAccBalValue}
                  size="xlarge"
                  defaultValue={currAccBalValue}
                  onChange={rangeSelector2}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>Foreign direct investment, net inflows, (% of GDP):</h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={fdiInValue}
                  size="xlarge"
                  defaultValue={fdiInValue}
                  onChange={rangeSelector3}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>Fertilizers consumption (% of fertilizer production):</h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={fertPercValue}
                  size="xlarge"
                  defaultValue={fertPercValue}
                  onChange={rangeSelector4}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>Total reserves (% of total external debt):</h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={totalReservePercValue}
                  size="xlarge"
                  defaultValue={totalReservePercValue}
                  onChange={rangeSelector5}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
            </div>
            <div class="w3-half w3-container">
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>FDI-NetOutflows(% of GDP):</h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={fdiOutValue}
                  size="xlarge"
                  defaultValue={fdiOutValue}
                  onChange={rangeSelector6}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>Agricultural Contribution(% GDP):</h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={agriContValue}
                  size="xlarge"
                  defaultValue={agriContValue}
                  onChange={rangeSelector7}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>Manufacturing(% GDP):</h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={manufacturingValue}
                  size="xlarge"
                  defaultValue={manufacturingValue}
                  onChange={rangeSelector8}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>
                    Agricultue, Forestry, and Fishing value added(annual %
                    growth):
                  </h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={agriGrowthValue}
                  size="xlarge"
                  defaultValue={agriGrowthValue}
                  onChange={rangeSelector9}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
              <div className="w3-container">
                <Typography id="range-slider" gutterBottom>
                  <h3>Total debt service(% of GNI):</h3>
                </Typography>
                <Slider
                  aria-label="Small"
                  value={totalDebtValue}
                  size="xlarge"
                  defaultValue={totalDebtValue}
                  onChange={rangeSelector10}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                  // step={step}
                  style={{ width: '500px' }}
                />
              </div>
            </div>
          </div>
          <div class="w3-container">
            <button
              class="w3-btn w3-green w3-round-large w3-xlarge"
              style={{
                width: 'auto',
                marginLeft: '30px',
                marginTop: '10px',
              }}
              onClick={callML}
            >
              Call Machine Learning Model
            </button>

            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};
