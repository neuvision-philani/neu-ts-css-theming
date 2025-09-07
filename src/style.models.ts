// IMPORT: DATA-TYPES
import * as CSS from './style.data-types';

/** MODEL: AppThemeModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/AppTheme.model.md)
 * ************************************************** */
export class AppThemeModel {
  // ATTRIBUTE: INIT > themeName
  themeName?: CSS.AppThemeNames;
  // ATTRIBUTE: INIT > colors
  colors?: AppThemeColorsModel;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<AppThemeModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;

    // ATTRIBUTE: CONFIG > themeName
    if (config?.themeName !== undefined || populateDefaults === true) {
      this.themeName = (
        (
          config !== undefined && config !== undefined
          && (
            config?.themeName === undefined || config?.themeName === undefined
          )
        )
          ? 'custom'
          : config?.themeName || 'light'
      );
    }

    // ATTRIBUTE: CONFIG > colors
    if (config?.colors !== undefined || populateDefaults === true) {
      this.colors = new AppThemeColorsModel(config?.colors);
    }
  }

  // FUNCTION: ANGULAR > configAppTheme
  public static configAppTheme(config?: CSS.AppThemeNames | AppThemeModel): AppThemeModel {
    // ATTRIBUTE: CONFIG > VARIABLES
    const themeConfig = !config || typeof config === 'string' ? undefined : (config || undefined);
    const themeName = (
      themeConfig !== undefined
        ? themeConfig?.themeName || 'custom'
        : config || 'light'
    ) as CSS.AppThemeNames;
    let returnValue = new AppThemeModel(themeConfig);

    // ATTRIBUTE: CONFIG > themeName
    returnValue.themeName = themeName;

    // ATTRIBUTE: CONFIG > theme
    if (themeName !== 'custom') {
      returnValue = new AppThemeModel({
        themeName: themeName,
        colors: new AppThemeColorsModel({
          backgroundColor: `rgba(var(--app-theme-${themeName}-background-rgb), 1)`,
          textColor: `rgba(var(--app-theme-${themeName}-text-rgb), 1)`,
          iconColor: `rgba(var(--app-theme-${themeName}-text-rgb), 1)`,
          borderColor: `rgba(var(--app-theme-${themeName}-border-rgb), 0.25)`,
          rippleColor: `rgba(var(--app-theme-${themeName}-ripple-rgb), 0.2)`,
          boxShadowColor: `rgba(var(--app-theme-${themeName}-shadow-rgb), 0.2`,
        }),
      });
    }

    // FUNCTION: CONFIG > return
    return returnValue;
  }
}

/** MODEL: AppThemeColorsModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/AppThemeColors.model.md)
 * ************************************************** */
export class AppThemeColorsModel {
  // ATTRIBUTE: INIT > GENERAL
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
  borderColor?: string;
  rippleColor?: string;
  // ATTRIBUTE: INIT > box-shadow
  boxShadowColor?: string;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<AppThemeColorsModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;

    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.backgroundColor !== undefined || populateDefaults === true) {
      this.backgroundColor = config?.backgroundColor || 'rgba(var(--app-theme-light-background-rgb), 1)';
    }
    if (config?.textColor !== undefined || populateDefaults === true) {
      this.textColor = config?.textColor || 'rgba(var(--app-theme-light-text-rgb), 1)';
    }
    if (config?.iconColor !== undefined || populateDefaults === true) {
      this.iconColor = config?.iconColor || this.textColor;
    }
    if (config?.borderColor !== undefined || populateDefaults === true) {
      this.borderColor = config?.borderColor || 'rgba(var(--app-theme-light-border-rgb), 1)';
    }
    if (config?.rippleColor !== undefined || populateDefaults === true) {
      this.rippleColor = config?.rippleColor || 'rgba(var(--app-theme-light-ripple-rgb), 1)';
    }
    // ATTRIBUTE: CONFIG > box-shadow
    if (config?.boxShadowColor !== undefined || populateDefaults === true) {
      this.boxShadowColor = 'rgba(var(--app-theme-light-shadow-rgb), 1)';
    }
  }
}

/** MODEL: AppStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/AppStyle.model.md).
 * ************************************************** */
export class AppStyleModel {
  // ATTRIBUTE: INIT > theme
  public theme?: CSS.AppThemeNames | AppThemeModel;
  // ATTRIBUTE: INIT > GENERAL
  public reveal?: boolean;
  public order?: string;
  public cursor?: CSS.CursorDataType;
  public visibility?: CSS.VisibilityDataType;
  public transition?: string;
  public transform?: string;
  // ATTRIBUTE: INIT > APPEARANCE
  public display?: CSS.DisplayDataType;
  public overflow?: CSS.OverflowDataType;
  public overflowX?: CSS.OverflowDataType;
  public overflowY?: CSS.OverflowDataType;
  public opacity?: string;
  // ATTRIBUTE: INIT > POSITION
  public zIndex?: string;
  public position?: CSS.PositionDataType;
  public top?: string;
  public right?: string;
  public bottom?: string;
  public left?: string;
  // ATTRIBUTE: INIT > SPACING
  public gap?: string;
  public margin?: MarginStyleModel;
  public padding?: PaddingStyleModel;
  // ATTRIBUTE: INIT > COLOR
  public backgroundColor?: string;
  public rippleColor?: string;
  // ATTRIBUTE: INIT > ALIGNMENT
  public alignContent?: CSS.AlignContentDataType;
  // ATTRIBUTE: INIT > ALIGNMENT > FLEX
  public flex?: FlexStyleModel;
  // ATTRIBUTE: INIT > ALIGNMENT > GRID
  public grid?: GridStyleModel;
  // ATTRIBUTE: INIT > border
  public border?: BorderStyleModel;
  // ATTRIBUTE: INIT > boxShadow
  public boxShadow?: BoxShadowsStyleModel;
  // ATTRIBUTE: INIT > text
  public text?: TextStyleModel;
  // ATTRIBUTE: INIT > SIZE
  public size?: SizeStyleModel;
  // ATTRIBUTE: INIT > outline
  public outline?: OutlineStyleModel;

  // Angular constructor
  constructor(config?: Partial<AppStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;
    const theme = AppThemeModel.configAppTheme(config?.theme);

    // ATTRIBUTE: CONFIG > theme
    if (config?.theme !== undefined || populateDefaults === true) { this.theme = theme; }
    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.reveal !== undefined || populateDefaults === true) { this.reveal = config?.reveal ?? true; }
    if (config?.order !== undefined || populateDefaults === true) { this.order = config?.order || '0'; }
    if (config?.cursor !== undefined || populateDefaults === true) { this.cursor = config?.cursor || 'auto'; }
    if (config?.visibility !== undefined || populateDefaults === true) { this.visibility = config?.visibility || 'visible'; }
    if (config?.transition !== undefined || populateDefaults === true) { this.transition = config?.transition || 'none'; }
    if (config?.transform !== undefined || populateDefaults === true) { this.transform = config?.transform || 'none'; }
    // ATTRIBUTE: CONFIG > APPEARANCE
    if (config?.display !== undefined || populateDefaults === true) { this.display = config?.display || 'block'; }
    if (config?.overflow !== undefined || populateDefaults === true) { this.overflow = config?.overflow || 'visible'; }
    if (config?.overflowX !== undefined || populateDefaults === true) { this.overflowX = config?.overflowX || 'visible'; }
    if (config?.overflowY !== undefined || populateDefaults === true) { this.overflowY = config?.overflowY || 'visible'; }
    if (config?.opacity !== undefined || populateDefaults === true) { this.opacity = config?.opacity || '1'; }
    // ATTRIBUTE: CONFIG > POSITION
    if (config?.zIndex !== undefined || populateDefaults === true) { this.zIndex = config?.zIndex || 'var(--app-z-index)'; }
    if (config?.position !== undefined || populateDefaults === true) { this.position = config?.position || 'static'; }
    if (config?.top !== undefined || populateDefaults === true) { this.top = config?.top || '0px'; }
    if (config?.right !== undefined || populateDefaults === true) { this.right = config?.right || '0px'; }
    if (config?.bottom !== undefined || populateDefaults === true) { this.bottom = config?.bottom || '0px'; }
    if (config?.left !== undefined || populateDefaults === true) { this.left = config?.left || '0px'; }
    // ATTRIBUTE: CONFIG > SPACING
    if (config?.gap !== undefined || populateDefaults === true) { this.gap = config?.gap || '0px'; }
    if (config?.margin !== undefined || populateDefaults === true) { this.margin = new MarginStyleModel(config?.margin); }
    if (config?.padding !== undefined || populateDefaults === true) { this.padding = new PaddingStyleModel(config?.padding); }
    // ATTRIBUTE: CONFIG > COLOR
    if (config?.backgroundColor !== undefined || populateDefaults === true) { this.backgroundColor = config?.backgroundColor || theme?.colors?.backgroundColor; }
    if (config?.rippleColor !== undefined || populateDefaults === true) { this.rippleColor = config?.rippleColor || theme?.colors?.rippleColor; }
    // ATTRIBUTE: CONFIG > ALIGNMENT
    if (config?.alignContent !== undefined || populateDefaults === true) { this.alignContent = config?.alignContent || 'normal'; }
    // ATTRIBUTE: CONFIG > ALIGNMENT > FLEX
    if (config?.flex !== undefined || populateDefaults === true) { this.flex = new FlexStyleModel(config?.flex); }
    // ATTRIBUTE: CONFIG > ALIGNMENT > GRID
    if (config?.grid !== undefined || populateDefaults === true) { this.grid = new GridStyleModel(config?.grid); }
    // ATTRIBUTE: CONFIG > border
    if (config?.border !== undefined || populateDefaults === true) { this.border = new BorderStyleModel({ ...config?.border, theme: theme }); }
    // ATTRIBUTE: CONFIG > boxShadow
    if (config?.boxShadow !== undefined || populateDefaults === true) {
      this.boxShadow = {
        general: config?.boxShadow?.general || new BoxShadowStyleModel({ ...config?.boxShadow?.general, theme: theme }),
        hover: config?.boxShadow?.hover || new BoxShadowStyleModel({ ...config?.boxShadow?.hover, theme: theme }),
        active: config?.boxShadow?.active || new BoxShadowStyleModel({ ...config?.boxShadow?.active, theme: theme }),
      };
    }
    // ATTRIBUTE: CONFIG > text
    if (config?.text !== undefined || populateDefaults === true) { this.text = new TextStyleModel({ ...config?.text, theme: theme }); }
    // ATTRIBUTE: CONFIG > SIZE
    if (config?.size !== undefined || populateDefaults === true) { this.size = new SizeStyleModel(config?.size); }
    // ATTRIBUTE: CONFIG > outline
    if (config?.outline !== undefined || populateDefaults === true) { this.outline = new OutlineStyleModel({ ...config?.outline, theme: theme }); }
  }
}

/** MODEL: MarginStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/MarginStyle.model.md).
 * ************************************************** */
export class MarginStyleModel {
  // ATTRIBUTE: INIT > GENERAL
  public top?: string;
  public right?: string;
  public bottom?: string;
  public left?: string;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<MarginStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;

    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.top !== undefined || populateDefaults === true) { this.top = config?.top || '0px'; }
    if (config?.right !== undefined || populateDefaults === true) { this.right = config?.right || '0px'; }
    if (config?.bottom !== undefined || populateDefaults === true) { this.bottom = config?.bottom || '0px'; }
    if (config?.left !== undefined || populateDefaults === true) { this.left = config?.left || '0px'; }
  }
}

/** MODEL: PaddingStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/PaddingStyle.model.md).
 * ************************************************** */
export class PaddingStyleModel {
  // ATTRIBUTE: INIT > GENERAL
  public top?: string;
  public right?: string;
  public bottom?: string;
  public left?: string;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<PaddingStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;

    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.top !== undefined || populateDefaults === true) { this.top = config?.top || '0px'; }
    if (config?.right !== undefined || populateDefaults === true) { this.right = config?.right || '0px'; }
    if (config?.bottom !== undefined || populateDefaults === true) { this.bottom = config?.bottom || '0px'; }
    if (config?.left !== undefined || populateDefaults === true) { this.left = config?.left || '0px'; }
  }
}

/** MODEL: FlexStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/FlexStyle.model.md).
 * ************************************************** */
export class FlexStyleModel {
  // ATTRIBUTE: INIT > GENERAL
  public flexDirection?: CSS.FlexDirectionDataType;
  public flexWrap?: CSS.FlexWrapDataType;
  public justifyContent?: CSS.JustifyContentDataType;
  public alignItems?: CSS.FlexAlignItemsDataType;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<FlexStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;

    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.flexDirection !== undefined || populateDefaults === true) { this.flexDirection = config?.flexDirection || undefined; }
    if (config?.flexWrap !== undefined || populateDefaults === true) { this.flexWrap = config?.flexWrap || undefined; }
    if (config?.justifyContent !== undefined || populateDefaults === true) { this.justifyContent = config?.justifyContent || undefined; }
    if (config?.alignItems !== undefined || populateDefaults === true) { this.alignItems = config?.alignItems || undefined; }
  }
}

/** MODEL: GridStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/GridStyle.model.md).
 * ************************************************** */
export class GridStyleModel {
  // ATTRIBUTE: INIT > GENERAL
  public gridTemplateColumns?: string;
  public gridTemplateRows?: string;
  public gridArea?: string;
  public gridColumn?: string;
  public gridRow?: string;
  public justifyItems?: CSS.JustifyItemsDataType;
  public alignItems?: CSS.GridAlignItemsDataType;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<GridStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;

    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.gridTemplateColumns !== undefined || populateDefaults === true) { this.gridTemplateColumns = config?.gridTemplateColumns || undefined; }
    if (config?.gridTemplateRows !== undefined || populateDefaults === true) { this.gridTemplateRows = config?.gridTemplateRows || undefined; }
    if (config?.gridArea !== undefined || populateDefaults === true) { this.gridArea = config?.gridArea || undefined; }
    if (config?.gridColumn !== undefined || populateDefaults === true) { this.gridColumn = config?.gridColumn || undefined; }
    if (config?.gridRow !== undefined || populateDefaults === true) { this.gridRow = config?.gridRow || undefined; }
    if (config?.justifyItems !== undefined || populateDefaults === true) { this.justifyItems = config?.justifyItems || undefined; }
    if (config?.alignItems !== undefined || populateDefaults === true) { this.alignItems = config?.alignItems || undefined; }
  }
}

/** MODEL: BorderStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/BorderStyle.model.md).
 * ************************************************** */
export class BorderStyleModel {
  // ATTRIBUTE: INIT > theme
  theme?: CSS.AppThemeNames | AppThemeModel;
  // ATTRIBUTE: INIT > GENERAL
  public color?: string;
  public style?: CSS.BorderStyleDataType;
  public width?: string;
  public radius?: string;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<BorderStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;
    const theme = AppThemeModel.configAppTheme(config?.theme);

    // ATTRIBUTE: CONFIG > theme
    if (config?.theme !== undefined || populateDefaults === true) { this.theme = theme; }
    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.color !== undefined || populateDefaults === true) { this.color = config?.color || theme?.colors?.borderColor; }
    if (config?.style !== undefined || populateDefaults === true) { this.style = config?.style || 'solid'; }
    if (config?.width !== undefined || populateDefaults === true) { this.width = config?.width || '1px'; }
    if (config?.radius !== undefined || populateDefaults === true) { this.radius = config?.radius || '0px'; }
  }
}

/** MODEL: BoxShadowsStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/BoxShadowsStyle.model.md).
 * ************************************************** */
export class BoxShadowsStyleModel {
  // ATTRIBUTE: INIT > theme
  public theme?: CSS.AppThemeNames | AppThemeModel;
  // ATTRIBUTE: INIT > GENERAL
  public general?: BoxShadowStyleModel;
  public hover?: BoxShadowStyleModel;
  public active?: BoxShadowStyleModel;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<BoxShadowsStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;
    const theme = AppThemeModel.configAppTheme(config?.theme);

    // ATTRIBUTE: CONFIG > theme
    if (config?.theme !== undefined || populateDefaults === true) { this.theme = theme; }
    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.general !== undefined || populateDefaults === true) {
      this.general = config?.general || new BoxShadowStyleModel({
        ...config?.general,
        color: config?.general?.color || theme?.colors?.boxShadowColor,
      });
    }
    if (config?.hover !== undefined || populateDefaults === true) {
      this.hover = config?.hover || new BoxShadowStyleModel({
        ...config?.hover,
        color: config?.hover?.color || theme?.colors?.boxShadowColor,
      });
    }
    if (config?.active !== undefined || populateDefaults === true) {
      this.active = config?.active || new BoxShadowStyleModel({
        ...config?.active,
        color: config?.active?.color || theme?.colors?.boxShadowColor,
      });
    }
  }
}

/** MODEL: BoxShadowStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/BoxShadowStyle.model.md).
 * ************************************************** */
export class BoxShadowStyleModel {
  // ATTRIBUTE: INIT > theme
  theme?: CSS.AppThemeNames | AppThemeModel;
  // ATTRIBUTE: INIT > GENERAL
  public hOffset?: string;
  public vOffset?: string;
  public blur?: string;
  public spread?: string;
  public color?: string;


  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<BoxShadowStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;
    const theme = AppThemeModel.configAppTheme(config?.theme);

    // ATTRIBUTE: CONFIG > theme
    if (config?.theme !== undefined || populateDefaults === true) { this.theme = theme; }
    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.hOffset !== undefined || populateDefaults === true) { this.hOffset = config?.hOffset || '0'; }
    if (config?.vOffset !== undefined || populateDefaults === true) { this.vOffset = config?.vOffset || '0'; }
    if (config?.blur !== undefined || populateDefaults === true) { this.blur = config?.blur || '0'; }
    if (config?.spread !== undefined || populateDefaults === true) { this.spread = config?.spread || '0'; }
    if (config?.color !== undefined || populateDefaults === true) { this.color = config?.color || theme?.colors?.boxShadowColor; }
  }
}

/** MODEL: TextStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/TextStyle.model.md)
 * ************************************************** */
export class TextStyleModel {
  // ATTRIBUTE: INIT > theme
  public theme?: CSS.AppThemeNames | AppThemeModel;
  // ATTRIBUTE: INIT > GENERAL
  public reveal?: boolean;
  public caption?: string;
  public align?: CSS.TextAlignDataType;
  public color?: string;
  public whiteSpace?: CSS.TextWhiteSpaceDataType;
  public overflow?: CSS.TextOverflowDataType;
  public lineClamp?: string;
  public boxOrient?: CSS.TextBoxOrientDataType;
  public textDecoration?: CSS.TextDecorationDataType;
  public letterSpacing?: string | number;
  public lineHeight?: string | number;
  // ATTRIBUTE: INIT > font
  public font?: FontStyleModel;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<TextStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;
    const theme = AppThemeModel.configAppTheme(config?.theme);

    // ATTRIBUTE: CONFIG > theme
    if (config?.theme !== undefined || populateDefaults === true) { this.theme = theme; }
    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.reveal !== undefined || populateDefaults === true) { this.reveal = config?.reveal ?? false; }
    if (config?.caption !== undefined || populateDefaults === true) { this.caption = config?.caption || ''; }
    if (config?.align !== undefined || populateDefaults === true) { this.align = config?.align || 'left'; }
    if (config?.color !== undefined || populateDefaults === true) { this.color = config?.color || theme?.colors?.textColor; }
    if (config?.whiteSpace !== undefined || populateDefaults === true) { this.whiteSpace = config?.whiteSpace || 'normal'; }
    if (config?.overflow !== undefined || populateDefaults === true) { this.overflow = config?.overflow || 'visible'; }
    if (config?.lineClamp !== undefined || populateDefaults === true) { this.lineClamp = config?.lineClamp || 'none'; }
    if (config?.boxOrient !== undefined || populateDefaults === true) { this.boxOrient = config?.boxOrient || 'horizontal'; }
    if (config?.textDecoration !== undefined || populateDefaults === true) { this.textDecoration = config?.textDecoration || 'none'; }
    if (config?.letterSpacing !== undefined || populateDefaults === true) { this.letterSpacing = config?.letterSpacing || undefined; }
    if (config?.lineHeight !== undefined || populateDefaults === true) { this.lineHeight = config?.lineHeight || undefined; }
    // ATTRIBUTE: CONFIG > font
    if (config?.font !== undefined || populateDefaults === true) { this.font = new FontStyleModel(config?.font); }
  }
}

/** MODEL: IconStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/IconStyle.model.md)
 * ************************************************** */
export class IconStyleModel extends TextStyleModel {
  // ATTRIBUTE: INIT > GENERAL
  type?: CSS.IconTypeDataType;
  // ATTRIBUTE: INIT > name
  name?: {
    text?: string,
    reveal?: boolean,
  };
  // ATTRIBUTE: INIT > SIZE
  width?: string;
  height?: string;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<IconStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: INIT > PARENT
    super(config);

    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;

    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.type !== undefined || populateDefaults === true) { this.type = config?.type || 'mat'; }
    // ATTRIBUTE: CONFIG > name
    if (config?.name !== undefined || populateDefaults === true) {
      // ATTRIBUTE: CONFIG > mat (default)
      this.name = {
        text: config?.name?.text || 'help',
        reveal: config?.name?.reveal || false
      };

      // ATTRIBUTE: CONFIG > span
      if (this.type === 'span') {
        // VARIABLE: INIT > dynamicSize
        const dynamicSize = configDynamicSize(config?.font?.size);
        // ATTRIBUTE: CONFIG > width
        this.width = config?.width || dynamicSize?.width;
        this.height = config?.height || dynamicSize?.height;
      }
    }
  }
}

/** MODEL: SizeStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/SizeStyle.model.md)
 * ************************************************** */
export class SizeStyleModel {
  // ATTRIBUTE: INIT > width
  public width?: string;
  public height?: string;
  public minWidth?: string;
  // ATTRIBUTE: INIT > height
  public minHeight?: string;
  public maxWidth?: string;
  public maxHeight?: string;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<SizeStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;

    // ATTRIBUTE: CONFIG > width
    if (config?.minWidth !== undefined || populateDefaults === true) { this.minWidth = config?.minWidth || '0px'; }
    if (config?.width !== undefined || populateDefaults === true) { this.width = config?.width || 'auto'; }
    if (config?.maxWidth !== undefined || populateDefaults === true) { this.maxWidth = config?.maxWidth || '100%'; }
    // ATTRIBUTE: CONFIG > height
    if (config?.minHeight !== undefined || populateDefaults === true) { this.minHeight = config?.minHeight || '0px'; }
    if (config?.height !== undefined || populateDefaults === true) { this.height = config?.height || 'auto'; }
    if (config?.maxHeight !== undefined || populateDefaults === true) { this.maxHeight = config?.maxHeight || '100%'; }
  }
}

/** FUNCTION: CONFIG > configDynamicSize
 * **************************************************
 * This function is used to configure the dynamic
 * size of an element based on the provided value.
 * ************************************************** */
export const configDynamicSize = (value?: string) => {
  if (value === undefined || value === undefined) return undefined;

  const [width, height] = value.includes(' ') ? value.split(' ') : [value, value];

  return { width, height };
}

/** MODEL: FontStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/AppStyleTextFont.model.md)
 * ************************************************** */
export class FontStyleModel {
  // ATTRIBUTE: INIT > GENERAL
  family?: string;
  size?: string;
  weight?: CSS.TextWeightDataType;
  lineHeight?: string;

  constructor(config?: Partial<FontStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;

    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.family !== undefined || populateDefaults === true) { this.family = config?.family || 'var(--app-theme-font-family)'; }
    if (config?.size !== undefined || populateDefaults === true) { this.size = config?.size || 'var(--app-theme-font-size)'; }
    if (config?.weight !== undefined || populateDefaults === true) { this.weight = config?.weight || 'normal'; }
    if (config?.lineHeight !== undefined || populateDefaults === true) { this.lineHeight = config?.lineHeight || `calc(${this.size} * 1.5)`; }
  }
}

/** MODEL: OutlineStyleModel
 * **************************************************
 * [Documentation, click here](../../lib/docs/models/app-style/OutlineStyle.model.md).
 * ************************************************** */
export class OutlineStyleModel {
  // ATTRIBUTE: INIT > theme
  theme?: CSS.AppThemeNames | AppThemeModel;
  // ATTRIBUTE: INIT > GENERAL
  public color?: string;
  public style?: CSS.OutlineStyleDataType;
  public width?: string;

  // FUNCTION: ANGULAR > constructor
  constructor(config?: Partial<OutlineStyleModel>, populateDefaultVariablesForAllFields?: boolean) {
    // ATTRIBUTE: CONFIG > VARIABLES
    const populateDefaults = populateDefaultVariablesForAllFields ?? true;
    const theme = AppThemeModel.configAppTheme(config?.theme);

    // ATTRIBUTE: CONFIG > theme
    if (config?.theme !== undefined || populateDefaults === true) { this.theme = theme; }
    // ATTRIBUTE: CONFIG > GENERAL
    if (config?.color !== undefined || populateDefaults === true) { this.color = config?.color || theme?.colors?.borderColor; }
    if (config?.style !== undefined || populateDefaults === true) { this.style = config?.style || 'solid'; }
    if (config?.width !== undefined || populateDefaults === true) { this.width = config?.width || '0px'; }
  }
}
