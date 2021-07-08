import React from "react";
import { SYMBOLS, Unit } from "./Units";

type Props = {
  upgradedUnits: Unit[];
  symbolWidth: number;
  onMouseOver: (symbol: string) => void;
  onMouseOut: (symbol: string) => void;
};

export const ActiveSymbolList = (props: Props) => {
  return (
    <span>
      {SYMBOLS.map((symbol) => {
        return (
          <span key={symbol} style={{ display: "inline-block" }}>
            <div>
              <img
                alt={symbol}
                src={`/vkzukan/img/symbol_icon_${symbol}.png`}
                width={props.symbolWidth}
                onMouseOver={() => props.onMouseOver(symbol)}
                onMouseOut={() => props.onMouseOut(symbol)}
              />
            </div>
            <div>
              {
                props.upgradedUnits.filter((u) => u.symbols.includes(symbol))
                  .length
              }
            </div>
          </span>
        );
      })}
    </span>
  );
};
