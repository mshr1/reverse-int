module.exports = function reverse(n) {
    if (n < 0) {
        n = Math.abs(-n);
    }
    n = n.toString();
    newNum = n.split("");
    newNum.reverse();
    n = newNum.join("");
    n = Number(n);

    return n;
};
