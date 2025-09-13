function toKebabCase(str) {
    return str
        .split(' ')
        .map(word => word.toLowerCase())
        .join('-');
}