import React, { useEffect, useState } from "react";
import { ActiveSymbolList } from "./ActiveSymbolList";
import "./App.css";
import { FilteredGemList } from "./FilteredGemList";
import { loadUpgradedUnits, saveUpgradedUnits } from "./LocalStorageManager";
import { Unit } from "./Units";

function App() {
  const [upgradedUnits, setUpgradedUnits] = useState<Unit[]>(
    loadUpgradedUnits()
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

  return (
    <div className="App">
      <h1>VK Helper</h1>
      <hr />
      <ActiveSymbolList upgradedUnits={upgradedUnits} />
      <hr />
      <FilteredGemList
        title="流浪の宝石屋1"
        upgradedUnits={upgradedUnits}
        onUnitClick={addOrRemoveUnit}
      />
      <hr />
      <FilteredGemList
        title="流浪の宝石屋2"
        upgradedUnits={upgradedUnits}
        onUnitClick={addOrRemoveUnit}
      />
      <hr />
      <FilteredGemList
        title="流浪の宝石屋3"
        upgradedUnits={upgradedUnits}
        onUnitClick={addOrRemoveUnit}
      />
      <hr />
      <FilteredGemList
        title="その他"
        upgradedUnits={upgradedUnits}
        onUnitClick={addOrRemoveUnit}
      />
      <hr />
      <div>© 2021 Asobism Co., Ltd. All Rights Reserved.</div>
    </div>
  );
}

export default App;
