//@ts-ignore
import nconf from 'nconf'
//@ts-ignore
import deep from 'deep-extend'
import defaultSetting from "./setting.json";

nconf
  .file({ file: 'gt.json', search: true })
  .defaults(defaultSetting);



const PARAMS = nconf.get('params');
const CONFIG = nconf.get('config');
const MAPPER = nconf.get('mapper');

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