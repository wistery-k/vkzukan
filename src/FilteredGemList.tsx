import React, { useEffect, useState } from "react";
import {
  loadSelectedSymbols,
  saveSelectedSymbols,
} from "./LocalStorageManager";
import { SYMBOLS, Unit, UNITS } from "./Units";

type Props = {
  title: string;
  upgradedUnits: Unit[];
  onUnitClick: (unit: Unit) => void;
};

export const FilteredGemList = (props: Props) => {
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>(
    loadSelectedSymbols(props.title)
  );
  const addOrRemoveSymbol = (symbol: string) => {
    if (selectedSymbols.includes(symbol)) {
      setSelectedSymbols(selectedSymbols.filter((s) => s !== symbol));
    } else {
      setSelectedSymbols([...selectedSymbols, symbol]);
    }
  };

  useEffect(() => {
    saveSelectedSymbols(props.title, selectedSymbols);
  }, [props.title, selectedSymbols]);

  return (
    <div>
      <div>{props.title}</div>
      <div>
        {SYMBOLS.map((symbol) => {
          const opacity = selectedSymbols.includes(symbol) ? 1 : 0.2;
          return (
            <img
              key={symbol}
              style={{ opacity }}
              src={`/vkzukan/img/symbol_icon_${symbol}.png`}
              alt={symbol}
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
              key={unit.name}
              style={{ display: show ? "inline-block" : "none", opacity }}
              src={`/vkzukan/img/icon_unit_H_${unit.name}.png`}
              alt={unit.name}
              width="64px"
              onClick={() => props.onUnitClick(unit)}
            />
          );
        })}
      </div>
    </div>
  );
};
