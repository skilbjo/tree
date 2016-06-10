var tree = {}

var aggregate = function (s) {
    return s.split("|").reverse().reduce(function (p, c) {
        var o = {};
        o.id = c;
        o.children = p;
        return o;
    }, tree);
}

aggregate('1|100376|100377|100378')
aggregate('1|100376|100377|100379|100380');

console.log(
	JSON.stringify(aggregate('1|100376|100377|100378'), null, ' '));



