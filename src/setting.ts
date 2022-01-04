//@ts-ignore
import { PARAMS, HEADERS } from "./setting.json";


export const assertParams = (p?: any) => {
  const params = typeof p === 'object' ? p : { q: p }
  params.q = encodeURI(params.q);
  return { ...PARAMS, ...params };
}
export const assertConfig = (config?: any) => {
  const headers = { ...HEADERS, ...config?.headers }
  return { ...config, headers };
}