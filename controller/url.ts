import express, { Request, Response } from "express";
import urlService from "../service/urlservice";
import { toUrl } from "../utils";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  const urls = urlService.getUrls();
  res.status(200).send(urls);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  urlService
    .getOneUrl(id)
    .then((data) => {
      if (!data) {
        res.status(404).send("Url is not available");
      }
      res.redirect(`${data.fullUrl}`);
    })
    .catch((_err) => {
      console.log("Url is Missing");
    });
});

router.post("/", (req: Request, res: Response) => {
  const fullUrl: string = toUrl(req.body);

  const shortUrl: string = uuidv4();

  const count = 0;

  const url = urlService.postUrls({ fullUrl, shortUrl, count });

  res.status(201).send(url);
});

export default router;
