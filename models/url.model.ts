import { Url } from "./../types";
import { Schema, model } from "mongoose";

const urlSchema = new Schema<Url>({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const UrlModel = model<Url>("URL", urlSchema);

export default UrlModel;
