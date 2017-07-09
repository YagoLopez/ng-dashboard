// These are basic defaults values. For full options see:
// http://leafletjs.com/reference-1.0.3.html

export interface ILeafletMapConfig {
  maxZoom?: number,
  attribution?: string,
  id?: string,
  accessToken?: string,
  [otherArgs: string]: any
}
