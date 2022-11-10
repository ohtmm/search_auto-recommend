import "styled-components";

declare module "style-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      second: string;
      black: string;
      white: string;
      gray: string;
    };
  }
}
