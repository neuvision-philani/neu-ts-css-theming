// IMPORT: FEATURES > DATA-TYPES
import type { AppThemeNames } from "./style.data-types";

export const DEFAULT_CSS_VAR_PREFIX = "--app-theme-";
export const THEME_ATTR = "data-theme";

export type CSSVars = Record<string, string>;

export interface ThemeApplierOptions {
  /** Prefix for CSS custom properties, e.g. '--app-theme-' (include trailing dash) */
  cssVarPrefix?: string;
  /** Target element to apply vars on (defaults to document.documentElement) */
  target?: HTMLElement;
}

const docEl = typeof document !== "undefined" ? document.documentElement : undefined;

/** Apply CSS variables to <html> (or a provided element). */
export function applyCssVars(vars: CSSVars, opts: ThemeApplierOptions = {}): void {
  const target = opts.target ?? docEl;
  if (!target) return;
  for (const [k, v] of Object.entries(vars)) target.style.setProperty(k, v);
}

export interface SetThemeOptions {
  /** Attribute used to store theme; defaults to "data-theme". */
  attr?: string;
  /** Target element to annotate; defaults to <html>. */
  target?: HTMLElement;
}

/** Sets data-theme on :root to drive CSS theme rules. */
export function setTheme(theme: AppThemeNames, opts: SetThemeOptions = {}): void {
  const target = opts.target ?? docEl;
  if (!target) return;
  const attr = opts.attr ?? THEME_ATTR;
  target.setAttribute(attr, String(theme));
}

/** Reads theme from :root[data-theme] (or a custom attr). */
export function getTheme(opts: { attr?: string; target?: HTMLElement } = {}): AppThemeNames | undefined {
  const target = opts.target ?? docEl;
  if (!target) return undefined;
  const attr = opts.attr ?? THEME_ATTR;
  return target.getAttribute(attr) as AppThemeNames | undefined;
}

// EXPORT: Public API
export * from "./style.data-types";
export * from "./style.models";
