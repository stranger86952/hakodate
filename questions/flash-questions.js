/* フラッシュ問題集
blocks: text / tex / chem / image
answer: 必ずTeX文字列で記述します。
explanation: 任意の補足説明です。
*/
window.FLASH_QUESTIONS = [
  {
    id: "integral-001",
    category: "積分",
    difficulty: 1,
    blocks: [
      { type: "text", content: "次の定積分の値は？" },
      { type: "tex", content: String.raw`\int_0^4 \sqrt[3]{x}\,dx` }
    ],
    answer: String.raw`3\sqrt[3]{4}`,
    exactAnswer: { rational: [0, 1], radicals: [{ coefficient: [3, 1], index: 3, radicand: 4 }] },
  },
  {
    id: "chem-001",
    category: "化学式",
    difficulty: 1,
    blocks: [
      { type: "chem", content: String.raw`\ce{Ca(OH)2}` },
      { type: "text", content: "この1分子に含まれる原子の総数は？" }
    ],
    answer: String.raw`5`,
    exactAnswer: { rational: [5, 1], radicals: [] },
    explanation: "Caが1個、Oが2個、Hが2個"
  },
  {
    id: "reaction-001",
    category: "化学反応式",
    difficulty: 2,
    blocks: [
      { type: "chem", content: String.raw`\ce{2H2 + O2 -> 2H2O}` },
      { type: "text", content: "生成物側の水分子の係数は？" }
    ],
    answer: String.raw`2`,
    exactAnswer: { rational: [2, 1], radicals: [] },
  },
  {
    id: "structure-image-001",
    category: "構造式",
    difficulty: 2,
    blocks: [
      { type: "image", content: "./assets/questions/flash/ethanol-structure.svg", alt: "エタノールの構造式" },
      { type: "text", content: "この構造式に含まれる炭素原子の数は？" }
    ],
    answer: String.raw`2`,
    exactAnswer: { rational: [2, 1], radicals: [] },
  },
  {
    id: "limit-001",
    category: "極限",
    difficulty: 3,
    blocks: [
      { type: "text", content: "次の極限値は？" },
      { type: "tex", content: String.raw`\lim_{x\to 0}\frac{\sin x}{x}` }
    ],
    answer: String.raw`1`,
    exactAnswer: { rational: [1, 1], radicals: [] },
  }
];
