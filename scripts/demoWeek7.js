/**
 * Logical AND assignment (&&=)
 */
// Old
if (x) {
    x = y;
}

// Old
x && (x = y);

// New
x &&= y;

/**
 * Logical OR assignment (||=)
 */
// Old
if (!x) {
    x = y;
}

// Old
x || (x = y);

// New
x ||= y;

/**
 * Nullish coalescing assignment (??=)
 */
// Old
if (x === null || x === undefined) {
    x = y;
}

// Old
x ?? (x = y);

// New
x ??= y;
