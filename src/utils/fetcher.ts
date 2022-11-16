import axios from "axios";

/**
 * getFetcher
 * @param {string} url
 * @return {Promise}
 */
export function getFetcher(url: string) {
  return axios.get(url).then(({ data }) => data);
}

/**
 * postFetcher
 * @param {string} url
 * @param {Record<string, any>} body
 * @return {Promise}
 */
export function postFetcher(url: string, body: Record<string, any>) {
  return axios.post(url, body).then(({ data }) => data);
}

/**
 * postFetcher
 * @param {string} url
 * @param {Record<string, any>} body
 * @return {Promise}
 */
export function putFetcher(url: string, body: Record<string, any>) {
  return axios.put(url, body).then(({ data }) => data);
}
