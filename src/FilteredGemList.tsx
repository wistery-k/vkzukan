import React, { useState } from "react";
import { RANDOM_COLOR, RANDOM_NONCOLOR, SYMBOLS, Unit, UNITS } from "./Units";

type Props = {
  title: string;
  upgradedUnits: Unit[];
  onUnitClick: (unit: Unit) => void;
};

export const FilteredGemList = (props: Props) => {
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
    <div>
      <div>{props.title}</div>
      <div>
        {SYMBOLS.map((symbol) => {
          const opacity = selectedSymbols.includes(symbol) ? 1 : 0.2;
          return (
            <img
              style={{ opacity }}
              src={`/vkzukan/img/symbol_icon_${symbol}.png`}
              onClick={() => addOrRemoveSymbol(symbol)}
            />
          );
        })}
      </div>
      <div>
        {UNITS.map((unit) => {
          const show = unit.symbols.some((symbol) =>
            selectedSymbols.includes(symbol)
          );
          const opacity = props.upgradedUnits.includes(unit) ? 0.2 : 1;
          return (
            <img
              style={{ display: show ? "inline-block" : "none", opacity }}
              src={`/vkzukan/img/icon_unit_H_${unit.name}.png`}
              onClick={() => props.onUnitClick(unit)}
            />
          );
        })}
      </div>
    </div>
  );
};
