import { createHash } from "crypto";

export const createSha = (s: string) =>
  createHash("sha1").update(s).digest("hex");
