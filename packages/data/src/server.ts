import express from "express";

import * as E from "fp-ts/Either";
import * as t from "io-ts";
import * as H from "hyper-ts";
import * as HE from "hyper-ts/lib/express";
import { flow } from "fp-ts/lib/function";

const app = express();

/**
 * ¡IMPURO!
 *
 * TODO: represent this side-effect as an IO instance (or if
 * Express request handlers cannot be separated from an async
 * environment, as a Task)
 */
const timeRequest: RequestHandler = (req: any, _res, next) => {
  req.timestamp = Date.now();
  next();
};

const decodeMiddleware = <E, A, O = A, I = unknown>(
  codec: t.Type<A, O, I>,
  onLeft: (error: DecodeError) => E,
): H.Middleware<H.StatusOpen, H.StatusOpen, E, A> =>
  H.decodeBody(flow(decodeWithCodec(codec), E.mapLeft(onLeft)));
