/* eslint-disable @typescript-eslint/no-var-requires */
import { addWebpackAlias, override } from "customize-cra";
import { resolve } from "path";

export default override(
  addWebpackAlias({
    "@": resolve(__dirname, "src")
  })
);
