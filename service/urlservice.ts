import { Url } from "../types";
import UrlModel from "../models/url.model";

const getUrls = async (): Promise<Url[]> => {
  const urls = await UrlModel.find({});
  return urls;
};

const getOneUrl = async (short: string): Promise<Url> => {
  const url = await UrlModel.findOne({ shortUrl: short });
  url && url.count++;
  if (!url) {
    throw Error("Url is not available");
  }
  return url;
};

const postUrls = async (url: Url): Promise<Url> => {
  const urls = new UrlModel({
    ...url,
  });

  const savedtodo = await urls.save();

  return savedtodo;
};

export default {
  getUrls,
  postUrls,
  getOneUrl,
};
