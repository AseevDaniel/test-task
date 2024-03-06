import { REG_EXP } from "@/constants/regExps.js";

const { EMAIL, NUMBER_EXIST, SPECIAL_SYMBOL_EXIST, SPECIAL_SYMBOL_RIGH_PALCE } =
  REG_EXP;
export const passwordPattern = (value = "") => {
  const isNumber = NUMBER_EXIST.test(value);
  const isCharacterNotStartEnd = SPECIAL_SYMBOL_RIGH_PALCE.test(value);
  const isCharacter = SPECIAL_SYMBOL_EXIST.test(value);
  const isCapitals = value.toLowerCase() !== value;

  return { isNumber, isCharacter, isCapitals, isCharacterNotStartEnd };
};

export const emailPattern = (value = "") => {
  const isEmail = EMAIL.test(value);

  return { isEmail };
};
