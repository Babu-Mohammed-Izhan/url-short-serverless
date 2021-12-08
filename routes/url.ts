import express, { Request, Response } from "express";
import urlService from "../service/urlservice";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  const urls = urlService.getUrls();
  res.status(200).send(urls);
});

const seeIfString = (string1: any): string => {
  if (typeof string1 === "string") {
    return string1;
  }
};

router.post("/", (req: Request, res: Response) => {
  const { fullUrl } = req.body;

  const fullUrl2 = seeIfString(fullUrl);

  const shortUrl = "arwsaf";

  const count = 0;

  const url = urlService.postUrls({ fullUrl: fullUrl2, shortUrl, count });

  res.status(201).send(url);
});

export default router;
