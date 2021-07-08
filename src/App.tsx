import React, { useEffect, useState } from "react";
import { ActiveSymbolList } from "./ActiveSymbolList";
import "./App.css";
import { FilteredGemList } from "./FilteredGemList";
import {
  loadSymbolWidth,
  loadUnitWidth,
  loadUpgradedUnits,
  saveSymbolWidth,
  saveUnitWidth,
  saveUpgradedUnits,
} from "./LocalStorageManager";
import { Unit } from "./Units";

function App() {
  const [upgradedUnits, setUpgradedUnits] = useState<Unit[]>(
    loadUpgradedUnits()
  );
  const [symbolWidth, setSymbolWidth] = useState<number>(loadSymbolWidth(40));
  const [unitWidth, setUnitWidth] = useState<number>(loadUnitWidth(64));

  const [highlightedSymbol, setHighlightedSymbol] = useState<string | null>(
    null
  );

  const addOrRemoveUnit = (unit: Unit) => {
    if (upgradedUnits.includes(unit)) {
      setUpgradedUnits(upgradedUnits.filter((u) => u !== unit));
    } else {
      setUpgradedUnits([...upgradedUnits, unit]);
      saveUpgradedUnits(upgradedUnits);
    }
  };

  useEffect(() => {
    saveUpgradedUnits(upgradedUnits);
  }, [upgradedUnits]);
  useEffect(() => {
    saveSymbolWidth(symbolWidth);
  }, [symbolWidth]);
  useEffect(() => {
    saveUnitWidth(unitWidth);
  }, [unitWidth]);

  return (
    <div className="App">
      <h2>VK Helper</h2>
      <div>
        <span>
          <span>
            シンボルサイズ
            <input
              type="range"
              style={{ width: "10%" }}
              min={8}
              max={80}
              value={symbolWidth}
              onChange={(e) => setSymbolWidth(parseInt(e.target.value))}
            />
          </span>
          <span>
            <span>ユニットサイズ</span>
            <input
              type="range"
              style={{ width: "10%" }}
              min={8}
              max={80}
              value={unitWidth}
              onChange={(e) => setUnitWidth(parseInt(e.target.value))}
            />
          </span>
        </span>
      </div>

      <hr />
      <ActiveSymbolList
        upgradedUnits={upgradedUnits}
        symbolWidth={symbolWidth}
        onMouseOver={setHighlightedSymbol}
        onMouseOut={() => setHighlightedSymbol(null)}
      />
      <button onClick={() => setUpgradedUnits([])}>リセット</button>
      <hr />
      <FilteredGemList
        title="流浪の宝石屋1"
        upgradedUnits={upgradedUnits}
        onUnitClick={addOrRemoveUnit}
        symbolWidth={symbolWidth}
        unitImageWidth={unitWidth}
        highlightedSymbol={highlightedSymbol}
      />
      <hr />
      <FilteredGemList
        title="流浪の宝石屋2"
        upgradedUnits={upgradedUnits}
        onUnitClick={addOrRemoveUnit}
        symbolWidth={symbolWidth}
        unitImageWidth={unitWidth}
        highlightedSymbol={highlightedSymbol}
      />
      <hr />
      <FilteredGemList
        title="流浪の宝石屋3"
        upgradedUnits={upgradedUnits}
        onUnitClick={addOrRemoveUnit}
        symbolWidth={symbolWidth}
        unitImageWidth={unitWidth}
        highlightedSymbol={highlightedSymbol}
      />
      <hr />
      <FilteredGemList
        title="その他"
        upgradedUnits={upgradedUnits}
        onUnitClick={addOrRemoveUnit}
        symbolWidth={symbolWidth}
        unitImageWidth={unitWidth}
        highlightedSymbol={highlightedSymbol}
      />
      <hr />
      <div>© 2021 Asobism Co., Ltd. All Rights Reserved.</div>
    </div>
  );
}

export default App;
