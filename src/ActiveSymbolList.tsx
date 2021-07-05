import React from "react";
import { SYMBOLS, Unit } from "./Units";

type Props = {
  upgradedUnits: Unit[];
};

export const ActiveSymbolList = (props: Props) => {
  return (
    <div>
      {SYMBOLS.map((symbol) => {
        return (
          <span key={symbol} style={{ display: "inline-block" }}>
            <div>
              <img
                alt={symbol}
                src={`/vkzukan/img/symbol_icon_${symbol}.png`}
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
    </div>
  );
};
