"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertConfig = exports.assertParams = void 0;
//@ts-ignore
const nconf_1 = __importDefault(require("nconf"));
//@ts-ignore
const deep_extend_1 = __importDefault(require("deep-extend"));
const setting_json_1 = __importDefault(require("./setting.json"));
nconf_1.default
    .file({ file: 'gt.json', search: true })
    .defaults(setting_json_1.default);
const PARAMS = nconf_1.default.get('params');
const CONFIG = nconf_1.default.get('config');
const MAPPER = nconf_1.default.get('mapper');
const assertParams = (p) => {
    const params = (0, deep_extend_1.default)(PARAMS, typeof p === 'object' ? p : { q: p });
    params.sl = MAPPER[params.sl] || params.sl;
    params.tl = MAPPER[params.tl] || params.tl;
    params.hl = MAPPER[params.hl] || params.hl;
    params.q = encodeURI(params.q);
    return params;
};
exports.assertParams = assertParams;
const assertConfig = (config) => {
    return (0, deep_extend_1.default)(CONFIG, config);
};
exports.assertConfig = assertConfig;
