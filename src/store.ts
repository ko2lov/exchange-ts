import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const exchangeRate = 1.07;

interface CurrencyState {
  usd: string;
  eur: string;
}

const initialState: CurrencyState = {
  usd: "",
  eur: "",
};

const currencySlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setUSD: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.usd = value;
      state.eur = value ? (parseFloat(value) / exchangeRate).toFixed(2) : "";
    },
    setEUR: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.eur = value;
      state.usd = value ? (parseFloat(value) * exchangeRate).toFixed(2) : "";
    },
  },
});

export const { setUSD, setEUR } = currencySlice.actions;

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
  },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
