//@ts-ignore
import { Client } from 'node-rest-client';
//@ts-ignore
import retus from 'retus';
//@ts-ignore
import { JSDOM } from "jsdom";
import { assertParams, assertConfig } from './setting';
export const translate = (p, c) => {
    const params = assertParams(p);
    const config = assertConfig(c);
    const url = `https://translate.google.com/m?sl=${params.sl}&tl=${params.tl}&hl=${params.hl}&q=${params.q}`;
    return new Promise(resolve => {
        const client = new Client();
        client.get(url, config, (data) => {
            const body = data.toString('utf8');
            const dom = new JSDOM(body);
            const div = dom.window.document.querySelector("div.result-container");
            resolve(div.textContent);
        });
    });
};
export const getTranslate = (p, c) => {
    const params = assertParams(p);
    const config = assertConfig(c);
    const url = `https://translate.google.com/m?sl=${params.sl}&tl=${params.tl}&hl=${params.hl}&q=${params.q}`;
    const rep = retus.get(url, config);
    const dom = new JSDOM(rep.body);
    const div = dom.window.document.querySelector("div.result-container");
    return div.textContent;
};
