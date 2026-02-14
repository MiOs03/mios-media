import { createContext } from "react";

export const CurrencyContext = createContext({
  currency: "KM",
  setCurrency: (val: string) => {},
  convert: (val: number) => ""
});
