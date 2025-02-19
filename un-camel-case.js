'use strict';

function unCamelCase(str) {
	return str.replace(/[\w-]+/g, (s) => {
		return /^[A-Z]?[a-z]*(?:[A-Z][a-z]*)+$/.test(s)
			? s
					.replace(/[A-Z]/g, (casedStr) => `-${casedStr.toLowerCase()}`)
					.replace(/^(o|ms|moz|khtml|epub|(\w+-?)*webkit)(?=-)/i, '-$1') // eslint-disable-line regexp/no-super-linear-backtracking -- TODO: fix
			: s;
	});
}

module.exports = unCamelCase;
