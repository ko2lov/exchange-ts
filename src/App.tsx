import "./App.css";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setEUR, setUSD } from "./store";

const App: React.FC = () => {
  const { usd, eur } = useSelector((state: RootState) => state.currency);
  const dispatch = useDispatch();

  const handleUSDChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      dispatch(setUSD(value));
    }
  };

  const handleEURChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      dispatch(setEUR(value));
    }
  };

  return (
    <div className="container">
      <div className="input-group">
        <label htmlFor="usd">USD</label>
        <input
          type="text"
          name="usd"
          id="usd"
          value={usd}
          onChange={handleUSDChange}
          placeholder="Please input USD"
        />
      </div>
      <div className="input-group">
        <label htmlFor="eur">EUR</label>
        <input
          type="text"
          name="eur"
          id="eur"
          value={eur}
          onChange={handleEURChange}
          placeholder="Please input EUR"
        />
      </div>
    </div>
  );
};

export default App;
