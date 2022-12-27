// @ts-nocheck
/* eslint no-use-before-define: 0 */
export function getPropByString(obj, propString) {
	if (!propString) return obj;

	let prop,
		props = propString.split('.');

	for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
		prop = props[i];

		var candidate = obj[prop];
		if (candidate !== undefined) {
			obj = candidate;
		} else {
			break;
		}
	}
	return obj[props[i]];
}
