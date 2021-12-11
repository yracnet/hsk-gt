//@ts-ignore
import deep from 'deep-extend'
import setting from "./setting.json";
interface IMAPPER {
  [key: string]: string | undefined
}

const PARAMS = setting.params;
const CONFIG = setting.config;
const MAPPER: IMAPPER = setting.mapper;

export const assertParams = (p?: any) => {
  const params = deep(PARAMS, typeof p === 'object' ? p : { q: p })
  params.sl = MAPPER[params.sl] || params.sl;
  params.tl = MAPPER[params.tl] || params.tl;
  params.hl = MAPPER[params.hl] || params.hl;
  params.q = encodeURI(params.q);
  return params;
}
export const assertConfig = (config?: any) => {
  return deep(CONFIG, config);
}