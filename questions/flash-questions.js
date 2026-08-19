/* フラッシュ問題集
question / explanation はMarkdown風の1本の文字列です。
  $...$       : 文章内の数式
  $$...$$     : 独立表示の数式
  ![説明](URL): 画像
answer は表示用TeX、answerExpression は総和計算用TeXです。
*/
window.FLASH_QUESTIONS = [
  {
    id: "integral-001",
    category: "積分",
    difficulty: 1,
    question: String.raw`次の定積分の値は？

$$
\int_0^4\sqrt[3]{x}\,dx
$$`,
    answer: String.raw`3\sqrt[3]{4}`,
    answerExpression: String.raw`3\sqrt[3]{4}`,
    explanation: String.raw`な阪関無`
  },
  {
    id: "integral-002",
    category: "積分",
    difficulty: 2,
    question: String.raw`次の定積分の値は？

$$
\int_0^2\frac{2}{2+2^x}\,dx
$$`,
    answer: String.raw`\frac{1}{2}`,
    answerExpression: String.raw`\frac{1}{2}`,
    explanation: String.raw`うい`
  },
  {
    id: "integral-003",
    category: "積分",
    difficulty: 1,
    question: String.raw`次の定積分の値は？

$$
\int_{\int_0^x x^3\,dx}^{\int_0^{x^2} x\,dx}\frac{\ln2}{x}\,dx
$$`,
    answer: String.raw`(\ln2)^2`,
    answerExpression: String.raw`\log(2)^2`,
    explanation: String.raw`見た目だけすぎる`
  },
  {
    id: "integral-004",
    category: "積分",
    difficulty: 1,
    question: String.raw`次の定積分の値は？

$$
\int_0^{\infty}\dfrac{1}{1+x^2}\,dx
$$`,
    answer: String.raw`\frac{\pi}{2}`,
    answerExpression: String.raw`\frac{\pi}{2}`,
    explanation: String.raw`$\arctan$だから`
  },
  {
    id: "limit-001",
    category: "極限",
    difficulty: 2,
    question: String.raw`次の極限値は？

$$
\lim_{x\to0}\frac{\sin\left(\frac{\sin x}{x}-\cos x\right)}{x^2}
$$`,
    answer: String.raw`\frac{1}{3}`,
    answerExpression: String.raw`\frac{1}{3}`
  },
  {
    id: "limit-002",
    category: "極限",
    difficulty: 1,
    question: String.raw`次の極限値は？

$$
\lim_{x\to\infty}\ln n\cdot\ln\left(1+\frac{1}{\ln n}\right)
$$`,
    answer: String.raw`1`,
    answerExpression: String.raw`1`
  },
  {
    id: "limit-003",
    category: "極限",
    difficulty: 1,
    question: String.raw`次の極限値は？

$$
\lim_{x\to\infty}\left(1-\frac{2}{n}\right)^n
$$`,
    answer: String.raw`\frac{1}{e^2}`,
    answerExpression: String.raw`\frac{1}{e^2}`
  },
  {
    id: "chem-001",
    category: "化学式",
    difficulty: 1,
    question: String.raw`こいつの分子量は？（整数値）

$$
\ce{Ca(OH)2}
$$`,
    answer: String.raw`74`,
    answerExpression: String.raw`74`,
    explanation: String.raw`$\ce{Ca}$は当然$40$`
  },
  {
    id: "chem-002",
    category: "化学式",
    difficulty: 1,
    question: String.raw`シュウ酸の分子量は？（整数値）`,
    answer: String.raw`90`,
    answerExpression: String.raw`90`
  },
  {
    id: "reaction-001",
    category: "化学反応式",
    difficulty: 2,
    question: String.raw`$$
\boldsymbol{\alpha+\beta+\gamma=?}
$$

$$
\ce{3Cu + \alpha HNO3}\\\ce{-> 3Cu(NO3)2 + \beta H2O + \gamma NO}
$$`,
    answer: String.raw`14`,
    answerExpression: String.raw`14`,
    explanation: String.raw`係数は$8+4+2=14$`
  },
  {
    id: "reaction-002",
    category: "化学反応式",
    difficulty: 2,
    question: String.raw`$$
\boldsymbol{\alpha+\beta+\gamma=?}
$$

$$
\ce{3Cu + \alpha HNO3}\\\ce{-> 3Cu(NO3)2 + \beta H2O + \gamma NO2}
$$`,
    answer: String.raw`24`,
    answerExpression: String.raw`24`,
    explanation: String.raw`$12+6+6=24$だけど、希硝酸だと思ってたら爆笑`
  },
  {
    id: "structure-001",
    category: "構造式",
    difficulty: 1,
    question: String.raw`トリアンギュレンに含まれる炭素原子の数は？

![トリアンギュレンの構造式](./assets/questions/flash/Triangulene.svg)`,
    answer: String.raw`22`,
    answerExpression: String.raw`22`,
    explanation: String.raw`数えるだけ`
  },
  {
    id: "structure-002",
    category: "構造式",
    difficulty: 2,
    question: String.raw`コロネンの分子量は？（整数値）

![コロネンの構造式](./assets/questions/flash/Coronene.svg)`,
    answer: String.raw`300`,
    answerExpression: String.raw`300`,
    explanation: String.raw`キリが良いね`
  },
  {
    id: "structure-003",
    category: "構造式",
    difficulty: 1,
    question: String.raw`[1.1.1]プロペランの分子量は？（整数値）

![[1.1.1]プロペランの構造式](./assets/questions/flash/Propellane.png)`,
    answer: String.raw`66`,
    answerExpression: String.raw`66`,
    explanation: String.raw`嫌な記憶`
  },
  {
    id: "history-001",
    category: "年号",
    difficulty: 2,
    question: String.raw`ポーツマス条約が締結されたのは何年？`,
    answer: String.raw`1905`,
    answerExpression: String.raw`1905`,
    explanation: String.raw`https://www.y-history.net/appendix/wh1403-042.html`
  },
  {
    id: "history-002",
    category: "年号",
    difficulty: 1,
    question: String.raw`博多駅前道路陥没事故が起きたのは何年？`,
    answer: String.raw`2016`,
    answerExpression: String.raw`2016`,
    explanation: String.raw`10年前...？？`
  },
  {
    id: "history-003",
    category: "年号",
    difficulty: 1,
    question: String.raw`卒業式があったのは2026年2月何日？`,
    answer: String.raw`6`,
    answerExpression: String.raw`6`,
    explanation: String.raw`流石に忘れてたらやばい`
  },
  {
    id: "history-004",
    category: "年号",
    difficulty: 1,
    question: String.raw`東海道新幹線が開通したのは何年？`,
    answer: String.raw`1964`,
    answerExpression: String.raw`1964`,
    explanation: String.raw`10月1日`
  },
  {
    id: "history-005",
    category: "年号",
    difficulty: 2,
    question: String.raw`青函トンネルが開通したのは何年？`,
    answer: String.raw`1988`,
    answerExpression: String.raw`1988`,
    explanation: String.raw`3月13日`
  }
];
