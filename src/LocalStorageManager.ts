import { parseUnit, Unit } from "./Units";

export function saveUpgradedUnits(upgradedUnits: Unit[]) {
    window.localStorage.setItem('upgradedUnits', upgradedUnits.map((u) => u.name).join(','));
}

export function loadUpgradedUnits(): Unit[] {
    return window.localStorage.getItem('upgradedUnits')?.split(',')
    .map((unitStr) => parseUnit(unitStr))
    .filter((u): u is Exclude<typeof u, undefined> => u !== undefined) ?? [];
}

export function saveSelectedSymbols(key: string, symbols: string[]) {
    window.localStorage.setItem('selectedSymbols-' + key, symbols.join(','));
}

export function loadSelectedSymbols(key: string): string[] {
    return window.localStorage.getItem('selectedSymbols-' + key)?.split(',') ?? [];
}