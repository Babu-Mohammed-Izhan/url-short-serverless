import express, { Request, Response } from "express";
import urlService from "../service/urlservice";
import { Url } from "../types";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  const urls = urlService.getUrls();
  res.status(200).send(urls);
});

const isString = (text: unknown): text is string => {
  return typeof text === "string";
};

const seeIfString = (url: unknown): string => {
  if (!url || !isString(url)) {
    throw new Error("Incorrect or missing input");
  }
  return url;
};

const toUrl = (fullUrl: unknown): string => {
  return seeIfString(fullUrl);
};

router.post("/", (req: Request, res: Response) => {
  const fullUrl = toUrl(req.body);

  const fullUrl2 = seeIfString(fullUrl);

  const shortUrl = "arwsaf";

  const count = 0;

  const url = urlService.postUrls({ fullUrl: fullUrl2, shortUrl, count });

  res.status(201).send(url);
});

export default router;
