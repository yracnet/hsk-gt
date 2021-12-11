"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTranslate = exports.translate = void 0;
//@ts-ignore
const node_rest_client_1 = require("node-rest-client");
//@ts-ignore
const retus_1 = __importDefault(require("retus"));
//@ts-ignore
const jsdom_1 = require("jsdom");
const setting_1 = require("./setting");
const translate = (p, c) => {
    const params = (0, setting_1.assertParams)(p);
    const config = (0, setting_1.assertConfig)(c);
    const url = `https://translate.google.com/m?sl=${params.sl}&tl=${params.tl}&hl=${params.hl}&q=${params.q}`;
    return new Promise(resolve => {
        const client = new node_rest_client_1.Client();
        client.get(url, config, (data) => {
            const body = data.toString('utf8');
            const dom = new jsdom_1.JSDOM(body);
            const div = dom.window.document.querySelector("div.result-container");
            resolve(div.textContent);
        });
    });
};
exports.translate = translate;
const getTranslate = (p, c) => {
    const params = (0, setting_1.assertParams)(p);
    const config = (0, setting_1.assertConfig)(c);
    const url = `https://translate.google.com/m?sl=${params.sl}&tl=${params.tl}&hl=${params.hl}&q=${params.q}`;
    const rep = retus_1.default.get(url, config);
    const dom = new jsdom_1.JSDOM(rep.body);
    const div = dom.window.document.querySelector("div.result-container");
    return div.textContent;
};
exports.getTranslate = getTranslate;
