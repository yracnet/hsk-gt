//@ts-ignore
import { PARAMS, HEADERS } from "./setting.json";
export const assertParams = (p) => {
    const params = typeof p === 'object' ? p : { q: p };
    params.q = encodeURI(params.q);
    return Object.assign(Object.assign({}, PARAMS), params);
};
export const assertConfig = (config) => {
    const headers = Object.assign(Object.assign({}, HEADERS), config === null || config === void 0 ? void 0 : config.headers);
    return Object.assign(Object.assign({}, config), { headers });
};
