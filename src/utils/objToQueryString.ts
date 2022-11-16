/**
 * objToQueryString
 * @param {any} obj
 * @return {string} query string
 */
export default function objToQueryString(obj: any): string {
  const str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      if (obj[p] !== undefined || obj[p] !== null)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
