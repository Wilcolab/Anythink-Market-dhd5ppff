function convert(str) {
    return str
        .split(' ')
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(convert("right side")); // Output: rightSide