import { RADIANS } from '../../sine_grapher/src/constants.js';

/**
 * An immutable array containing all
 * cosine values from radians listed on
 * the unit circle.
 * @constant {!number[]}
 * @readonly
 */
export const COS_VALUES = RADIANS.map((radian) => Math.cos(radian));

/**
 * A constant array containing multiple colors.
 * @constant {!string[]}
 * @readonly
 */
export const COLORS = Object.freeze(['#673C4F', '#7F557D', '#726E97', '#7698B3', '#83B5D1']);

/**
 * A constant object representing the
 * min and max values for Circle radii.
 * @constant {!Object.<string, number>}
 * @readonly
 */
export const RADIUS_BOUNDS = Object.freeze({ min: 1, max: 3 });

/**
 * Multiplier to increase speed.
 * @constant {!number}
 * @readonly
 */
export const SPEED_SCALAR = 5;

/**
 * The number of Circle objects to create.
 * Also doubles as a minimum number of ambient circles to have.
 * @constant {!number}
 * @readonly
 */
export const CIRCLE_AMOUNT = 200;

/**
 * The offset between each Circle when
 * using them to draw a character onto
 * the canvas.
 * @constant {!number}
 * @readonly
 */
export const OFFSET = 10;