import once from "lodash/once";

import { runDDL } from "./execute-setup-ddl";

// Env (POSTGRES) is injected by `dotenvx run` from the package.json scripts;
// no in-app .env loading needed.
export const setup = once(() => runDDL());
