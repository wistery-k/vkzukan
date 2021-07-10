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
  symbolWidth: number;
  unitImageWidth: number;
  highlightedSymbol: string | null;
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
          const boxShadow = selectedSymbols.includes(symbol)
            ? "0px 0 2px 2px white"
            : "0px 0 2px 2px rgba(0,0,0,0)";
          const style = {
            boxShadow,
            borderRadius: "50%",
            verticalAlign: "middle",
          };
          return (
            <img
              key={symbol}
              style={style}
              src={`/vkzukan/img/symbol_icon_${symbol}.png`}
              alt={symbol}
              width={props.symbolWidth}
              onClick={() => addOrRemoveSymbol(symbol)}
            />
          );
        })}
        <button
          style={{ verticalAlign: "middle" }}
          onClick={() => setSelectedSymbols([])}
        >
          リセット
        </button>
      </div>
      <div>
        {UNITS.map((unit) => {
          const show = unit.symbols.some((symbol) =>
            selectedSymbols.includes(symbol)
          );
          const opacity = props.upgradedUnits.includes(unit) ? 0.2 : 1;
          const backgroundColor =
            props.highlightedSymbol != null &&
            unit.symbols.includes(props.highlightedSymbol)
              ? "white"
              : "";
          return (
            <img
              key={unit.name}
              style={{
                display: show ? "inline-block" : "none",
                opacity,
                backgroundColor,
              }}
              src={`/vkzukan/img/icon_unit_H_${unit.name}.png`}
              alt={unit.name}
              width={props.unitImageWidth}
              onClick={() => props.onUnitClick(unit)}
            />
          );
        })}
      </div>
    </div>
  );
};
