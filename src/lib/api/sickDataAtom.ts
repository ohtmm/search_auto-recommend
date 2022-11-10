import { atom } from "recoil";

export interface ISickDate {
  sickCd: string;
  sickNm: string;
}

export const sickDataAtom = atom<ISickDate[]>({
  key: "sickData",
  default: [
    {
      sickCd: "",
      sickNm: ""
    }
  ]
});
