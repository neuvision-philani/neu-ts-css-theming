// DATATYPE: ThemeNames
export type ThemeNames = (
  'app'
  | 'custom'
);

export const ThemeNamesList = [
  'app',
  'custom'
];

// DATATYPE: DisplayDataType
export type DisplayDataType = (
  'block'
  | 'grid'
  | 'flex'
  | '-webkit-box'
  | 'contents'
);

export const DisplayDataTypeList = [
  'block',
  'grid',
  'flex',
  '-webkit-box',
  'contents'
];

// DATATYPE: OverflowDataType
export type OverflowDataType = (
  'visible'
  | 'hidden'
  | 'clip'
  | 'scroll'
  | 'auto'
  | 'initial'
  | 'inherit'
);

export const OverflowDataTypeList = [
  'visible',
  'hidden',
  'clip',
  'scroll',
  'auto',
  'initial',
  'inherit'
];

// DATATYPE: AlignContentDataType
export type AlignContentDataType = (
  'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'baseline'
  | 'normal'
  | 'stretch'
  | 'inherit'
  | 'initial'
  | 'unset'
);

export const AlignContentDataTypeList = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'start',
  'end',
  'baseline',
  'normal',
  'stretch',
  'inherit',
  'initial',
  'unset'
];

// DATATYPE: PositionDataType
export type PositionDataType = (
  'static'
  | 'relative'
  | 'fixed'
  | 'absolute'
  | 'sticky'
);

export const PositionDataTypeList = [
  'static',
  'relative',
  'fixed',
  'absolute',
  'sticky'
];

// DATATYPE: FlexDirectionDataType
export type FlexDirectionDataType = (
  'column'
  | 'row'
);

export const FlexDirectionDataTypeList = [
  'column',
  'row'
];

// DATATYPE: FlexWrapDataType
export type FlexWrapDataType = (
  'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'initial'
  | 'inherit'
);

export const FlexWrapDataTypeList = [
  'nowrap',
  'wrap',
  'wrap-reverse',
  'initial',
  'inherit'
];

// DATATYPE: JustifyContentDataType
export type JustifyContentDataType = (
  'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit'
);

export const JustifyContentDataTypeList = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'initial',
  'inherit'
];

// DATATYPE: JustifyItemsDataType
export type JustifyItemsDataType = (
  'legacy' // Default value. Grid items with justify-self value 'auto' only inherits grid container justify-items property value if it starts with 'legacy'. It exists to implement the legacy alignment behavior of HTML's 〈center〉 element and align attribute.
  | 'normal' // Dependant on layout context, but similar to 'stretch' for grid layout
  | 'stretch' // Stretches to fill the grid cell if inline-size (width) is not set.
  | 'start' // Align items at the start in the inline direction
  | 'left' // Align items to the left
  | 'center' // Align items to the center
  | 'end' // Align items at the end in the inline direction
  | 'right' // Align items to the right
  | 'safe' // sets alignment of the item to 'start' if the content overflows
  | 'unsafe' // keeps the alignment value regardless of wether or not the item content overflows
  | 'baseline' // alignment	The element is aligned with the baseline of the parent.
  | 'initial' // Sets this property to its default value. Read about initial
  | 'inherit' // Inherits this property from its parent element. Read about inherit
);

export const JustifyItemsDataTypeList = [
  'legacy',
  'normal',
  'stretch',
  'start',
  'left',
  'center',
  'end',
  'right',
  'safe',
  'unsafe',
  'baseline',
  'initial',
  'inherit'
];

// DATATYPE: FlexAlignItemsDataType
export type FlexAlignItemsDataType = (
  'normal' // Default. Behaves like 'stretch' for flexbox and grid items, or 'start' for grid items with a defined block size.
  | 'stretch' // Items are stretched to fit the container.
  | 'center' // Items are positioned at the center of the container.
  | 'flex-start' // Items are positioned at the beginning of the container.
  | 'flex-end' // Items are positioned at the end of the container.
  | 'baseline' // Items are positioned at the baseline of the container.
  | 'initial'	// Sets this property to its default value. Read about initial.
  | 'inherit'	// Inherits this property from its parent element. Read about inherit.
);

export const FlexAlignItemsDataTypeList = [
  'normal',
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'baseline',
  'initial',
  'inherit'
];

// DATATYPE: GridAlignItemsDataType
export type GridAlignItemsDataType = (
  'normal' // Default. Behaves like 'stretch' for flexbox and grid items, or 'start' for grid items with a defined block size.
  | 'stretch' // Items are stretched to fit the container.
  | 'center' // Items are positioned at the center of the container.
  | 'start' // Items are positioned at the beginning of the container.
  | 'end' // Items are positioned at the end of the container.
  | 'baseline' // Items are positioned at the baseline of the container.
  | 'initial'	// Sets this property to its default value. Read about initial.
  | 'inherit'	// Inherits this property from its parent element. Read about inherit.
);

export const GridAlignItemsDataTypeList = [
  'normal',
  'stretch',
  'center',
  'start',
  'end',
  'baseline',
  'initial',
  'inherit'
];

// DATATYPE: TextAlignDataType
export type TextAlignDataType = (
  'left'
  | 'center'
  | 'right'
);

export const TextAlignDataTypeList = [
  'left',
  'center',
  'right'
];

// DATATYPE: TextWeightDataType
export type TextWeightDataType = (
  'light'
  | 'lighter'
  | 'normal'
  | 'bold'
  | 'bolder'
);

export const TextWeightDataTypeList = [
  'light',
  'lighter',
  'normal',
  'bold',
  'bolder'
];

// DATATYPE: TextWhiteSpaceDataType
export type TextWhiteSpaceDataType = (
  'normal'
  | 'nowrap'
  | 'break-spaces'
  | 'pre'
  | 'pre-line'
  | 'pre-wrap'
);

export const TextWhiteSpaceDataTypeList = [
  'normal',
  'nowrap',
  'break-spaces',
  'pre',
  'pre-line',
  'pre-wrap'
];

// DATATYPE: TextOverflowDataType
export type TextOverflowDataType = (
  'ellipsis'
  | 'clip'
  | 'visible'
  | 'hidden'
);
export const TextOverflowDataTypeList = [
  'ellipsis',
  'clip',
  'visible',
  'hidden'
];

// DATATYPE: TextBoxOrientDataType
export type TextBoxOrientDataType = (
  'horizontal'
  | 'vertical'
  | 'inline-axis'
  | 'block-axis'
);

export const TextBoxOrientDataTypeList = [
  'horizontal',
  'vertical',
  'inline-axis',
  'block-axis'
];

// DATATYPE: TextDecorationDataType
export type TextDecorationDataType = (
  | 'none'
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'blink' // Deprecated, may not be supported
  | 'inherit'
  | 'initial'
  | 'unset'
);
export const TextDecorationDataTypeList = [
  'none',
  'underline',
  'overline',
  'line-through',
  'blink', // Deprecated, may not be supported
  'inherit',
  'initial',
  'unset',
];

// DATATYPE: BorderStyleDataType
export type BorderStyleDataType = (
  'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'none'
  | 'hidden'
);

export const BorderStyleDataTypeList = [
  'solid',
  'dashed',
  'dotted',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'none',
  'hidden'
];

// DATATYPE: IconTypeDataType
export type IconTypeDataType = (
  'mat'
  | 'span'
);

export const IconTypeDataTypeList = [
  'mat',
  'span'
];

// DATATYPE: OutlineStyleDataType
export type OutlineStyleDataType = (
  'none' // Specifies no outline. This is default
  | 'hidden' // Specifies a hidden outline
  | 'dotted' // Specifies a dotted outline
  | 'dashed' // Specifies a dashed outline
  | 'solid' // Specifies a solid outline
  | 'double' // Specifies a double outline
  | 'groove' // Specifies a 3D grooved outline. The effect depends on the outline-color value
  | 'ridge' // Specifies a 3D ridged outline. The effect depends on the outline-color value
  | 'inset' // Specifies a 3D inset outline. The effect depends on the outline-color value
  | 'outset' // Specifies a 3D outset outline. The effect depends on the outline-color value
  | 'initial' // Sets this property to its default value. Read about initial
  | 'inherit' // Inherits this property from its parent element. Read about inherit
);

export const OutlineStyleDataTypeList = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'initial',
  'inherit'
];

// DATATYPE: VisibilityDataType
export type VisibilityDataType = (
  'visible'	// Default value. The element is visible	
  | 'hidden' // The element is hidden (but still takes up space)	
  | 'collapse' // Only for table rows (<tr>), row groups (<tbody>), columns (<col>), column groups (<colgroup>), and flex items. This value removes a row or column as if display: none where used.
  | 'initial'	// Sets this property to its default value. Read about initial	
  | 'inherit'	// Inherits this property from its parent element. Read about inherit
);

export const VisibilityDataTypeList = [
  'visible',
  'hidden',
  'collapse',
  'initial',
  'inherit'
];

// DATATYPE: CursorDataType
export type CursorDataType = (
  'alias' // The cursor indicates an alias of something is to be created	
  | 'all-scroll' // The cursor indicates that something can be scrolled in any direction	
  | 'auto' // Default. The browser sets a cursor	
  | 'cell' // The cursor indicates that a cell (or set of cells) may be selected	
  | 'col-resize' // The cursor indicates that the column can be resized horizontally	
  | 'context-menu' // The cursor indicates that a context-menu is available	
  | 'copy' // The cursor indicates something is to be copied	
  | 'crosshair' // The cursor render as a crosshair	
  | 'default' // The default cursor	
  | 'e-resize' // The cursor indicates that an edge of a box is to be moved right (east)	
  | 'ew-resize' // Indicates a bidirectional resize cursor	
  | 'grab' // The cursor indicates that something can be grabbed	
  | 'grabbing' // The cursor indicates that something can be grabbed	
  | 'help' // The cursor indicates that help is available	
  | 'move' // The cursor indicates something is to be moved	
  | 'n-resize' // The cursor indicates that an edge of a box is to be moved up (north)	
  | 'ne-resize' // The cursor indicates that an edge of a box is to be moved up and right (north/east)	
  | 'nesw-resize' // Indicates a bidirectional resize cursor	
  | 'ns-resize' // Indicates a bidirectional resize cursor	
  | 'nw-resize' // The cursor indicates that an edge of a box is to be moved up and left (north/west)	
  | 'nwse-resize' // Indicates a bidirectional resize cursor	
  | 'no-drop' // The cursor indicates that the dragged item cannot be dropped here	
  | 'none' // No cursor is rendered for the element	
  | 'not-allowed' // The cursor indicates that the requested action will not be executed	
  | 'pointer' // The cursor is a pointer and indicates a link	
  | 'progress' // The cursor indicates that the program is busy (in progress)	
  | 'row-resize' // The cursor indicates that the row can be resized vertically	
  | 's-resize' // The cursor indicates that an edge of a box is to be moved down (south)	
  | 'se-resize' // The cursor indicates that an edge of a box is to be moved down and right (south/east)	
  | 'sw-resize' // The cursor indicates that an edge of a box is to be moved down and left (south/west)	
  | 'text' // The cursor indicates text that may be selected	
  // | 'url()' // A comma separated list of URLs to custom cursors. Note: Always specify a generic cursor at the end of the list, in case none of the URL-defined cursors can be used	
  | 'vertical-text' // The cursor indicates vertical-text that may be selected	
  | 'w-resize' // The cursor indicates that an edge of a box is to be moved left (west)	
  | 'wait' // The cursor indicates that the program is busy	
  | 'zoom-in' // The cursor indicates that something can be zoomed in	
  | 'zoom-out' // The cursor indicates that something can be zoomed out	
  | 'initial' // Sets this property to its default value. Read about initial	
  | 'inherit' // Inherits this property from its parent element. Read about inherit
);

export const CursorDataTypeList = [
  'alias',
  'all-scroll',
  'auto',
  'cell',
  'col-resize',
  'context-menu',
  'copy',
  'crosshair',
  'default',
  'e-resize',
  'ew-resize',
  'grab',
  'grabbing',
  'help',
  'move',
  'n-resize',
  'ne-resize',
  'nesw-resize',
  'ns-resize',
  'nw-resize',
  'nwse-resize',
  'no-drop',
  'none',
  'not-allowed',
  'pointer',
  'progress',
  'row-resize',
  's-resize',
  'se-resize',
  'sw-resize',
  'text',
  // 'url()',
  'vertical-text',
  'w-resize',
  'wait',
  'zoom-in',
  'zoom-out',
  'initial',
  'inherit'
];
