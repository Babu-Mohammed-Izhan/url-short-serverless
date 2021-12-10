import express, { Request, Response } from "express";
import urlService from "../controller/urlservice";
import { parseString, toUrl } from "../utils";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  const urls = urlService.getUrls();
  res.status(200).send(urls);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const urls = urlService.getOneUrl(id);
  if (!urls) {
    res.status(404).send("Url is not available");
  }
  res.redirect(`${urls.fullUrl}`);
});

router.post("/", (req: Request, res: Response) => {
  const fullUrl = toUrl(req.body);

  const fullUrl2 = parseString(fullUrl);

  const shortUrl = "arwsaf";

  const count = 0;

  const url = urlService.postUrls({ fullUrl: fullUrl2, shortUrl, count });

  res.status(201).send(url);
});

export default router;
