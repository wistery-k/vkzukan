import React, { useState } from "react";
import "./App.css";
import { RANDOM_COLOR, RANDOM_NONCOLOR, RED, SYMBOLS, UNITS } from "./Units";

function App() {
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([
    RANDOM_COLOR,
    RANDOM_NONCOLOR,
  ]);
  const addOrRemoveSymbol = (symbol: string) => {
    if (selectedSymbols.includes(symbol)) {
      setSelectedSymbols(selectedSymbols.filter((s) => s !== symbol));
    } else {
      setSelectedSymbols([...selectedSymbols, symbol]);
    }
  };
  return (
    <div className="App">
      <h1>流浪フィルター</h1>
      <div>
        {SYMBOLS.map((symbol) => {
          const opacity = selectedSymbols.includes(symbol) ? 1 : 0.2;
          return (
            <img
              style={{ opacity }}
              src={`/img/symbol_icon_${symbol}.png`}
              onClick={() => addOrRemoveSymbol(symbol)}
            />
          );
        })}
      </div>
      <div>
        {UNITS.map(
          (unit) =>
            unit.symbols.some((symbol) => selectedSymbols.includes(symbol)) && (
              <img src={`/img/icon_unit_H_${unit.name}.png`} />
            )
        )}
      </div>
      <div>© 2021 Asobism Co., Ltd. All Rights Reserved.</div>
    </div>
  );
}

export default App;
