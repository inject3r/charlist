import popularData from "../data/popular.json";
import emojiData from "../data/emoji.json";
import arrowsData from "../data/arrows.json";
import hieroglyphsData from "../data/hieroglyphs.json";
import symbolsData from "../data/symbols.json";
import currencyData from "../data/currency.json";
import numbersData from "../data/numbers.json";
import mathData from "../data/math.json";
import punctuationData from "../data/punctuation.json";
import lettersData from "../data/letters.json";

export const categories = [
  { id: "all", label: "All" },
  { id: "popular", label: "Popular" },
  { id: "emoji", label: "Emoji" },
  { id: "arrows", label: "Arrows" },
  { id: "hieroglyphs", label: "Hieroglyphs" },
  { id: "symbols", label: "Symbols" },
  { id: "currency", label: "Currency" },
  { id: "numbers", label: "Numbers" },
  { id: "math", label: "Math" },
  { id: "punctuation", label: "Punctuation" },
  { id: "letters", label: "Letters" },
];

export const getAllData = () => {
  return {
    id: "all",
    name: "All",
    chars: [
      ...popularData.chars,
      ...emojiData.chars,
      ...arrowsData.chars,
      ...hieroglyphsData.chars,
      ...symbolsData.chars,
      ...currencyData.chars,
      ...numbersData.chars,
      ...mathData.chars,
      ...punctuationData.chars,
      ...lettersData.chars,
    ],
  };
};

export const dataMap = {
  all: getAllData(),
  popular: popularData,
  emoji: emojiData,
  arrows: arrowsData,
  hieroglyphs: hieroglyphsData,
  symbols: symbolsData,
  currency: currencyData,
  numbers: numbersData,
  math: mathData,
  punctuation: punctuationData,
  letters: lettersData,
};
