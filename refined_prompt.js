/**
 * Converts a given string to camelCase format.
 *
 * The function splits the input string by non-alphanumeric characters,
 * filters out empty segments, and then transforms the first word to lowercase
 * and subsequent words to capitalized form, joining them together.
 *
 * @param {string} str - The input string to convert.
 * @throws {Error} Throws if the input is not a string, is empty, or does not contain any alphabetic characters.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase("right_side"); // returns "rightSide"
 * toCamelCase("Hello World!"); // returns "helloWorld"
 * toCamelCase(""); // throws Error
 */

/**
 * Converts a given string to dot.case format.
 *
 * The function splits the input string by non-alphanumeric characters,
 * filters out empty segments, converts all words to lowercase, and joins them with dots.
 *
 * @param {string} str - The input string to convert.
 * @throws {Error} Throws if the input is not a string, is empty, or does not contain any alphabetic characters.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase("right_side"); // returns "right.side"
 * toDotCase("Hello World!"); // returns "hello.world"
 * toDotCase(""); // throws Error
 */
function toCamelCase(str) {
    if (typeof str !== 'string' || str === undefined || str === null) {
        throw new Error('Input must be a non-empty string.');
    }
    if (str.trim() === '') {
        throw new Error('Input string cannot be empty.');
    }
    if (!/[a-zA-Z]/.test(str)) {
        throw new Error('Input string must contain at least one alphabetic character.');
    }

    // Split by non-alphanumeric characters
    const words = str
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error('Input string must contain at least one valid word.');
    }

    // Convert to camelCase
    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("right_side")); // "rightSide"
// console.log(toCamelCase("")); // Throws error
function toDotCase(str) {
    if (typeof str !== 'string' || str === undefined || str === null) {
        throw new Error('Input must be a non-empty string.');
    }
    if (str.trim() === '') {
        throw new Error('Input string cannot be empty.');
    }
    if (!/[a-zA-Z]/.test(str)) {
        throw new Error('Input string must contain at least one alphabetic character.');
    }

    // Split by non-alphanumeric characters
    const words = str
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error('Input string must contain at least one valid word.');
    }

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase("right_side")); // "right.side"
// console.log(toDotCase("Hello World!")); // "hello.world"
