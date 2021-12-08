import { Url } from "../types";
import UrlModel from "../models/url.model";

const getUrls = async () => {
  const urls = await UrlModel.find({});
  return urls;
};

const getOneUrl = async (short: string) => {
  const url = await UrlModel.findOne({ shortUrl: short });
  return url;
};

const postUrls = async (url: Url) => {
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
