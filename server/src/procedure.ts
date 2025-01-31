import auth from "./middlewares/auth";
import logger from "./middlewares/logger";
import trpc from "./trpc";

export const publicProcedure = trpc.procedure.use(logger);

export const authProcedure = publicProcedure.use(auth);
