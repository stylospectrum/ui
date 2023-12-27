/**
 * Popover horizontal align types.
 *
 * @readonly
 * @enum {string}
 * @public
 */
enum PopoverHorizontalAlign {
  /**
   * Popover is centered.
   * @public
   * @type {Center}
   */
  Center = 'Center',

  /**
   * Popover is aligned with the right side of the target. When direction is RTL, it is left aligned.
   * @public
   * @type {Right}
   */
  Right = 'Right',
}

export default PopoverHorizontalAlign;
