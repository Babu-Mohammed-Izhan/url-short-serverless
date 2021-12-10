import { Url, UrlInput } from "./types";

const isNumber = (num: unknown): num is number => {
  return typeof num === "number";
};
const isString = (text: unknown): text is string => {
  return typeof text === "string";
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseNumber = (num: unknown): number => {
  if (!num || !isNumber(num)) {
    throw new Error("Incorrect or missing number input");
  }

  return num;
};

const parseString = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing string input");
  }

  return comment;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const toUrl = (fullUrl: unknown): string => {
  const url = parseString(fullUrl);
  return url;
};

const parseUrl = ({ fullUrl, shortUrl, count }: UrlInput): Url => {
  const fullUrlinput = toUrl(fullUrl);
  const shortUrlinput = parseString(shortUrl);
  const countinput = parseNumber(count);
  return { fullUrl: fullUrlinput, shortUrl: shortUrlinput, count: countinput };
};

export { parseDate, parseString, parseNumber, toUrl, parseUrl };
