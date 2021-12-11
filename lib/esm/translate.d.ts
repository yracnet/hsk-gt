interface Params {
    q: string;
    sl?: string;
    tl?: string;
    hl?: string;
}
interface Config {
    url?: string;
    method?: string;
    headers?: object;
}
export declare const translate: (p: string | Params, c?: Config | undefined) => Promise<string>;
export declare const getTranslate: (p: string | Params, c?: Config | undefined) => any;
export {};
