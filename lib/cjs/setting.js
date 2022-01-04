"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertConfig = exports.assertParams = void 0;
//@ts-ignore
const setting_json_1 = require("./setting.json");
const assertParams = (p) => {
    const params = typeof p === 'object' ? p : { q: p };
    params.q = encodeURI(params.q);
    return Object.assign(Object.assign({}, setting_json_1.PARAMS), params);
};
exports.assertParams = assertParams;
const assertConfig = (config) => {
    const headers = Object.assign(Object.assign({}, setting_json_1.HEADERS), config === null || config === void 0 ? void 0 : config.headers);
    return Object.assign(Object.assign({}, config), { headers });
};
exports.assertConfig = assertConfig;
