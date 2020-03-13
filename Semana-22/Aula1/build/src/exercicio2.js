"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOneEditString = (source, comparision) => {
    if (comparision.length > source.length + 1 ||
        comparision.length < source.length - 1) {
        return false;
    }
    let communCharQuantity = 0;
    for (const char of comparision) {
        if (source.indexOf(char) !== -1) {
            communCharQuantity++;
        }
    }
    return (communCharQuantity <= source.length + 1 &&
        communCharQuantity >= source.length - 1);
};
