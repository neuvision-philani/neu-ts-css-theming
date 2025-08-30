// IMPORT: FEATURES > DATA-TYPES
import { ThemeNames } from './style.data-types';

// Lightweight ThemeEngine (optional) to apply CSS variables at runtime
export type CSSVars = Record<string, string>;

export interface ThemeApplierOptions {
  /** Prefix for CSS custom properties, e.g. '--app-theme-' (include trailing dash) */
  cssVarPrefix?: string;
  /** Target element to apply vars on (defaults to document.documentElement) */
  target?: HTMLElement;
}

/**
 * Applies a flat map of CSS variables to the document root (or a provided element).
 * Example:
 * applyCssVars({ '--app-theme-primary': '255,0,0', '--app-theme-light': '255,255,255' });
 */
export function applyCssVars(vars: CSSVars, opts: ThemeApplierOptions = {}): void {
  const target = opts.target ?? (typeof document !== 'undefined' ? document.documentElement : undefined);
  if (!target) return;
  for (const [k, v] of Object.entries(vars)) {
    target.style.setProperty(k, v);
  }
}

/** Sets data-theme on :root to enable CSS theme overrides shipped in styles/ */
export function setTheme(theme: ThemeNames): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('app-theme-name', String(theme));
}

/** Reads the current theme from :root[app-theme-name] */
export function getTheme(): ThemeNames | undefined {
  if (typeof document === 'undefined') return undefined;
  return document.documentElement.getAttribute('app-theme-name') as ThemeNames | undefined;
}

// EXPORT: FEATURES > Public API: re-export your models
export * from "./style.data-types";
export * from "./style.models";