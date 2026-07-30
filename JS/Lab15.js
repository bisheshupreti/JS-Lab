function sum(...args) {
    let total = args.reduce((total, num) => total + num);
    return total;
}

document.write("<h3> sum(1, 2) = " + sum(1, 2) + "<h3>");
document.write("<h3> sum(1, 3, 4) = " + sum(1, 3, 4) + "<h3>");
document.write("<h3> sum(9, 8, 12, 34) = " + sum(9, 8, 12, 34) + "<h3>");
document.write("<h3> sum(7, 8, 0, -3) = " + sum(7, 8, 0, -3) + "<h3>");