import once from "lodash/once";

import { setupIfNeeded } from "./execute-setup-ddl";

// Env (POSTGRES) is injected by `dotenvx run` from the package.json scripts;
// no in-app .env loading needed.
export const setUp = once(() => setupIfNeeded());
