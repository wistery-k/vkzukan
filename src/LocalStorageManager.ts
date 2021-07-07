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

export function saveSymbolWidth(width: number) {
    window.localStorage.setItem('symbolWidth', `${width}`);
}

export function loadSymbolWidth(defaultWidth: number): number {
    const widthStr = window.localStorage.getItem('symbolWidth');
    return widthStr == null ? defaultWidth : parseInt(widthStr);
}

export function saveUnitWidth(width: number) {
    window.localStorage.setItem('unitWidth', `${width}`);
}

export function loadUnitWidth(defaultWidth: number) {
    const widthStr = window.localStorage.getItem('unitWidth');
    return widthStr == null ? defaultWidth : parseInt(widthStr);
}