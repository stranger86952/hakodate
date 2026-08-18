/* フラッシュ問題集
blocks: text / tex / chem / image
answer: 表示用のTeX文字列です。
answerExpression: 足し算用のTeX式です。通常はanswerと同じ値にします。
explanation: 文字列、または text / tex / chem の配列で記述できます。
*/
window.FLASH_QUESTIONS = [
  {
    id: "integral-001",
    category: "積分",
    difficulty: 1,
    blocks: [
      { type: "text", content: "次の定積分の値は？" },
      { type: "tex", content: String.raw`\int_0^4\sqrt[3]{x}\,dx` }
    ],
    answer: String.raw`3\sqrt[3]{4}`,
    answerExpression: String.raw`3\sqrt[3]{4}`,
    explanation: "な阪関無"
  },
  {
    id: "integral-002",
    category: "積分",
    difficulty: 2,
    blocks: [
      { type: "text", content: "次の定積分の値は？" },
      { type: "tex", content: String.raw`\int_0^2\frac{2}{2+2^x}\,dx` }
    ],
    answer: String.raw`\frac{1}{2}`,
    answerExpression: String.raw`\frac{1}{2}`,
    explanation: "うい"
  },
  {
    id: "integral-003",
    category: "積分",
    difficulty: 1,
    blocks: [
      { type: "text", content: "次の定積分の値は？" },
      { type: "tex", content: String.raw`\int_{\int_0^x x^3\,dx}^{\int_0^{x^2} x\,dx}\frac{\ln2}{x}\,dx` }
    ],
    answer: String.raw`(\ln2)^2`,
    answerExpression: String.raw`\log(2)^2`,
    explanation: "見た目だけすぎる"
  },
  {
    id: "limit-001",
    category: "極限",
    difficulty: 2,
    blocks: [
      { type: "text", content: "次の極限値は？" },
      { type: "tex", content: String.raw`\lim_{x\to0}\frac{\sin\left(\frac{\sin x}{x}-\cos x\right)}{x^2}` }
    ],
    answer: String.raw`\frac{1}{3}`,
    answerExpression: String.raw`\frac{1}{3}`,
  },
  {
    id: "chem-001",
    category: "化学式",
    difficulty: 1,
    blocks: [
      { type: "text", content: "こいつの分子量は？（整数値）" },
      { type: "chem", content: String.raw`\ce{Ca(OH)2}` }
    ],
    answer: String.raw`74`,
    answerExpression: String.raw`74`,
    explanation: [
      { type: "chem", content: String.raw`\ce{Ca}` },
      { type: "text", content: "は当然"},
      { type: "tex", content: "40"}
    ]
  },
  {
    id: "reaction-001",
    category: "化学反応式",
    difficulty: 2,
    blocks: [
      { type: "tex", content: String.raw`\alpha+\beta+\gamma=?` },
      { type: "chem", content: String.raw`\ce{3Cu + \alpha HNO3}\\\ce{-> 3Cu(NO3)2 + \beta H2O + \gamma NO}` }
    ],
    answer: String.raw`14`,
    answerExpression: String.raw`14`,
    explanation: [
      { type: "text", content: "係数は" },
      { type: "tex", content: String.raw`8+4+2=14` }
    ]
  },
  {
    id: "reaction-002",
    category: "化学反応式",
    difficulty: 2,
    blocks: [
      { type: "tex", content: String.raw`\alpha+\beta+\gamma=?` },
      { type: "chem", content: String.raw`\ce{3Cu + \alpha HNO3}\\\ce{-> 3Cu(NO3)2 + \beta H2O + \gamma NO2}` }
    ],
    answer: String.raw`24`,
    answerExpression: String.raw`24`,
    explanation: [
      { type: "tex", content: String.raw`12+6+6=24` },
      { type: "text", content: "だけど、希硝酸だと思ってたら爆笑"}
    ]
  },
  {
    id: "structure-001",
    category: "構造式",
    difficulty: 1,
    blocks: [
      { type: "text", content: "トリアンギュレンに含まれる炭素原子の数は？" },
      { type: "image", content: "./assets/questions/flash/Triangulene.svg", alt: "トリアンギュレンの構造式" }
    ],
    answer: String.raw`22`,
    answerExpression: String.raw`22`,
    explanation: "数えるだけ"
  },
  {
    id: "structure-002",
    category: "構造式",
    difficulty: 2,
    blocks: [
      { type: "text", content: "コロネンの分子量は？（整数値）" },
      { type: "image", content: "./assets/questions/flash/Coronene.svg", alt: "トリアンギュレンの構造式" }
    ],
    answer: String.raw`300`,
    answerExpression: String.raw`300`,
    explanation: "キリが良いね"
  },
  {
    id: "history-001",
    category: "年号",
    difficulty: 2,
    blocks: [
      { type: "text", content: "ポーツマス条約が締結されたのは何年？" }
    ],
    answer: String.raw`1905`,
    answerExpression: String.raw`1905`,
    explanation: "https://www.y-history.net/appendix/wh1403-042.html"
  },
  {
    id: "history-002",
    category: "年号",
    difficulty: 1,
    blocks: [
      { type: "text", content: "博多駅前道路陥没事故が起きたのは何年？" }
    ],
    answer: String.raw`2016`,
    answerExpression: String.raw`2016`,
    explanation: "10年前...？？"
  },
  {
    id: "history-003",
    category: "年号",
    difficulty: 1,
    blocks: [
      { type: "text", content: "卒業式があったのは2026年2月何日？" }
    ],
    answer: String.raw`6`,
    answerExpression: String.raw`6`,
    explanation: "流石に忘れてたらやばい"
  }
];
