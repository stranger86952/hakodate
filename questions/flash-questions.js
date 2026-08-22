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
    question: String.raw`$$\int_0^4\sqrt[3]{x}\,dx$$`,
    answer: String.raw`3\sqrt[3]{4}`,
    answerExpression: String.raw`3\sqrt[3]{4}`,
    explanation: String.raw`な阪関無`
  },
  {
    id: "integral-002",
    category: "積分",
    difficulty: 2,
    question: String.raw`$$\int_0^2\frac{2}{2+2^x}\,dx$$`,
    answer: String.raw`1`,
    answerExpression: String.raw`1`,
    explanation: String.raw`$t=2^x$ と置換すると $\frac{1}{\ln2}\left[\ln\frac{t}{t+2}\right]_1^4=1$。`
  },
  {
    id: "integral-003",
    category: "積分",
    difficulty: 1,
    question: String.raw`$$\int_{\int_0^x x^3\,dx}^{\int_0^{x^2} x\,dx}\frac{\ln2}{x}\,dx$$`,
    answer: String.raw`(\ln2)^2`,
    answerExpression: String.raw`\log(2)^2`,
    explanation: String.raw`見た目だけすぎる`
  },
  {
    id: "integral-004",
    category: "積分",
    difficulty: 1,
    question: String.raw`$$\int_0^{\infty}\dfrac{1}{1+x^2}\,dx$$`,
    answer: String.raw`\frac{\pi}{2}`,
    answerExpression: String.raw`\frac{\pi}{2}`,
    explanation: String.raw`$\arctan$だから`
  },
  {
    id: "limit-001",
    category: "極限",
    difficulty: 2,
    question: String.raw`$$\lim_{x\to0}\frac{\sin\left(\frac{\sin x}{x}-\cos x\right)}{x^2}$$`,
    answer: String.raw`\frac{1}{3}`,
    answerExpression: String.raw`\frac{1}{3}`
  },
  {
    id: "limit-002",
    category: "極限",
    difficulty: 1,
    question: String.raw`$$\lim_{x\to\infty}\ln x\cdot\ln\left(1+\frac{1}{\ln x}\right)$$`,
    answer: String.raw`1`,
    answerExpression: String.raw`1`
  },
  {
    id: "limit-003",
    category: "極限",
    difficulty: 1,
    question: String.raw`$$\lim_{x\to\infty}\left(1-\frac{2}{x}\right)^x$$`,
    answer: String.raw`\frac{1}{e^2}`,
    answerExpression: String.raw`\frac{1}{e^2}`
  },
  {
    id: "limit-004",
    category: "極限",
    difficulty: 1,
    question: String.raw`$$\lim_{x\to0}\frac{\tan x-\sin x}{x^3}$$`,
    answer: String.raw`\frac{1}{2}`,
    answerExpression: String.raw`\frac{1}{2}`,
    explanation: String.raw`$\tan$のテイラー展開を覚えてる or ロピタル`
  },
  {
    id: "limit-005",
    category: "極限",
    difficulty: 1,
    question: String.raw`$$\lim_{x\to\infty}x\left(\sqrt{4+\frac{3}{x}}-2\right)$$`,
    answer: String.raw`\frac{3}{4}`,
    answerExpression: String.raw`\frac{3}{4}`,
    explanation: String.raw`ネタ切れ`
  },
  {
    id: "limit-006",
    category: "極限",
    difficulty: 1,
    question: String.raw`$$\lim_{x\to\infty}x^2\left(\sqrt{1+\frac{1}{x}}-1-\frac{1}{2x}\right)$$`,
    answer: String.raw`-\frac{1}{8}`,
    answerExpression: String.raw`-\frac{1}{8}`,
    explanation: String.raw`有理化するくらいならマクローリン暗記`
  },
  {
    id: "limit-007",
    category: "極限",
    difficulty: 1,
    question: String.raw`$$\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}$$`,
    answer: String.raw`-\frac{1}{2}`,
    answerExpression: String.raw`-\frac{1}{2}`,
    explanation: String.raw`ロピタル`
  },
  {
    id: "limit-008",
    category: "極限",
    difficulty: 1,
    question: String.raw`$$\lim_{x\to0}\left(\frac{\sin x}{x}\right)^{\frac{-1}{x^2}}$$`,
    answer: String.raw`e^{\frac{1}{6}}`,
    answerExpression: String.raw`e^{\frac{1}{6}}`,
    explanation: String.raw`ロピタル`
  },
  {
    id: "seq-001",
    category: "数列",
    difficulty: 1,
    question: String.raw`$$a_1=1,\,a_{n+1}=3a_n+1$$のとき$a_{10}=?$`,
    answer: String.raw`\frac{3^{10}-1}{2}`,
    answerExpression: String.raw`\frac{3^{10}-1}{2}`
  },
  {
    id: "seq-002",
    category: "数列",
    difficulty: 1,
    question: String.raw`$$a_1=999,\,a_{n+1}=\frac{1}{1-a_n}$$のとき$a_{2026}=?$`,
    answer: String.raw`999`,
    answerExpression: String.raw`999`,
    explanation: String.raw`$a_{n+3}=a_n$だからね`
  },
  {
    id: "seq-003",
    category: "数列",
    difficulty: 1,
    question: String.raw`$$a_1=1,\,a_{n+1}=S_n+1$$のとき$a_{10}=?$`,
    answer: String.raw`2^9`,
    answerExpression: String.raw`2^9`
  },
  {
    id: "mx-001",
    category: "行列",
    difficulty: 1,
    question: String.raw`$$\det\begin{pmatrix}4&-2&3&1\\0&7&-2&3\\0&0&3&-2\\0&0&0&5\end{pmatrix}$$`,
    answer: String.raw`420`,
    answerExpression: String.raw`420`
  },
  {
    id: "mx-002",
    category: "行列",
    difficulty: 1,
    question: String.raw`$$\det\begin{pmatrix}4&-2&0&6&2\\4&1&7&-2&3\\2&-1&0&3&1\\-1&7&7&0&5\\2&-1&0&1&0\end{pmatrix}$$`,
    answer: String.raw`0`,
    answerExpression: String.raw`0`
  },
  {
    id: "mx-003",
    category: "行列",
    difficulty: 2,
    question: String.raw`$$\det\begin{pmatrix}1&2&0&0&0\\3&4&0&0&0\\0&0&0&5&0\\0&0&6&0&0\\0&0&0&0&7\end{pmatrix}$$`,
    answer: String.raw`420`,
    answerExpression: String.raw`420`,
    explanation: String.raw`あたまつかうまでもない`
  },
  {
    id: "mx-004",
    category: "行列",
    difficulty: 2,
    question: String.raw`$$\det\begin{pmatrix}1&2&3&4&5&6\\3&4&5&6&7&8\\0&0&1&2&3&4\\0&0&3&4&5&6\\0&0&0&0&1&2\\0&0&0&0&3&4\end{pmatrix}$$`,
    answer: String.raw`-8`,
    answerExpression: String.raw`-8`,
    explanation: String.raw`自明`
  },
  {
    id: "mx-005",
    category: "行列",
    difficulty: 2,
    question: String.raw`$$\det\begin{pmatrix}1&2&3&6\\3&4&9&12\\2&4&-1&-2\\6&8&-3&-4\end{pmatrix}$$`,
    answer: String.raw`196`,
    answerExpression: String.raw`196`,
    explanation: String.raw`自明？`
  },
  {
    id: "mx-006",
    category: "行列",
    difficulty: 1,
    question: String.raw`$$\det\begin{pmatrix}8&0&4\\0&\frac{1}{3}&0\\2&0&7\end{pmatrix}$$`,
    answer: String.raw`16`,
    answerExpression: String.raw`16`
  },
  {
    id: "mx-007",
    category: "行列",
    difficulty: 1,
    question: String.raw`$$\det\begin{pmatrix}1&0&2&0\\0&3&0&4\\5&0&6&0\\0&7&0&8\end{pmatrix}$$`,
    answer: String.raw`16`,
    answerExpression: String.raw`16`
  },
  {
    id: "mx-008",
    category: "行列",
    difficulty: 1,
    question: String.raw`$$\det\begin{pmatrix}0&2&0&7&0\\1&0&1&0&1\\0&-1&0&-2&0\\1&0&3&0&5\\0&-2&0&-2&0\end{pmatrix}$$`,
    answer: String.raw`0`,
    answerExpression: String.raw`0`,
    explanation: String.raw`目がチカチカする`
  },
  {
    id: "mx-009",
    category: "行列",
    difficulty: 1,
    question: String.raw`$$\det\begin{pmatrix}1&2&0\\3&4&1\\3&3&3\end{pmatrix}$$`,
    answer: String.raw`-3`,
    answerExpression: String.raw`-3`
  },
  {
    id: "mx-010",
    category: "行列",
    difficulty: 1,
    question: String.raw`$$\det\left(\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&2\\3&4\end{pmatrix}\right)$$`,
    answer: String.raw`2`,
    answerExpression: String.raw`2`
  },
  {
    id: "mx-011",
    category: "行列",
    difficulty: 1,
    question: String.raw`$$\det\left(\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}\begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}\right)$$`,
    answer: String.raw`3`,
    answerExpression: String.raw`3`,
    explanation: String.raw`流石に暗算できないと文系に冷笑される`
  },
  {
    id: "mx-012",
    category: "行列",
    difficulty: 1,
    question: String.raw`$$\det\left(\begin{pmatrix}1&2&3\\3&2&1\end{pmatrix}\begin{pmatrix}1&3\\2&2\\3&1\end{pmatrix}\right)$$`,
    answer: String.raw`96`,
    answerExpression: String.raw`96`
  },
  {
    id: "chem-001",
    category: "化学式",
    difficulty: 1,
    question: String.raw`$$\ce{Ca(OH)2}$$の分子量は？（整数値）`,
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
    id: "chem-003",
    category: "化学式",
    difficulty: 1,
    question: String.raw`$\ce{O}$の原子量と$\ce{Cl2}$の分子量の積は？（整数値）`,
    answer: String.raw`1136`,
    answerExpression: String.raw`1136`,
    explanation: String.raw`良いsum(積なのに)`
  },
  {
    id: "reaction-001",
    category: "化学反応式",
    difficulty: 2,
    question: String.raw`$$\ce{3Cu + \alpha HNO3}\\\ce{-> 3Cu(NO3)2 + \beta H2O + \gamma NO}$$のとき$\boldsymbol{\alpha+\beta+\gamma=?}$`,
    answer: String.raw`14`,
    answerExpression: String.raw`14`,
    explanation: String.raw`係数は$8+4+2=14$`
  },
  {
    id: "reaction-002",
    category: "化学反応式",
    difficulty: 2,
    question: String.raw`$$\ce{3Cu + \alpha HNO3}\\\ce{-> 3Cu(NO3)2 + \beta H2O + \gamma NO2}$$のとき$\boldsymbol{\alpha+\beta+\gamma=?}$`,
    answer: String.raw`24`,
    answerExpression: String.raw`24`,
    explanation: String.raw`$12+6+6=24$だけど、希硝酸だと思ってたら爆笑`
  },
  {
    id: "structure-001",
    category: "構造式",
    difficulty: 1,
    question: String.raw`トリアンギュレンに含まれる炭素原子の数は？![トリアンギュレンの構造式](./assets/questions/flash/Triangulene.svg)`,
    answer: String.raw`22`,
    answerExpression: String.raw`22`,
    explanation: String.raw`数えるだけ`
  },
  {
    id: "structure-002",
    category: "構造式",
    difficulty: 2,
    question: String.raw`コロネンの分子量は？（整数値）![コロネンの構造式](./assets/questions/flash/Coronene.svg)`,
    answer: String.raw`300`,
    answerExpression: String.raw`300`,
    explanation: String.raw`キリが良いね`
  },
  {
    id: "structure-003",
    category: "構造式",
    difficulty: 1,
    question: String.raw`[1.1.1]プロペランの分子量は？（整数値）![\[1.1.1\]プロペランの構造式](./assets/questions/flash/Propellane.png)`,
    answer: String.raw`66`,
    answerExpression: String.raw`66`,
    explanation: String.raw`嫌な記憶`
  },
  {
    id: "structure-004",
    category: "構造式",
    difficulty: 1,
    question: String.raw`トレオニンの立体異性体の数は？（自身を含む）![トレオニンの構造式](./assets/questions/flash/Threonine.svg)`,
    answer: String.raw`4`,
    answerExpression: String.raw`4`
  },
  {
    id: "structure-005",
    category: "構造式",
    difficulty: 1,
    question: String.raw`ドデカヘドランの分子量は？（整数値）![ドデカヘドランの構造式](./assets/questions/flash/Dodecahedrane.png)`,
    answer: String.raw`260`,
    answerExpression: String.raw`260`
  },
  {
    id: "structure-006",
    category: "構造式",
    difficulty: 2,
    question: String.raw`バスケタンの立体異性体の数は？（自身を含む）![バスケタンの構造式](./assets/questions/flash/Basketane.svg)`,
    answer: String.raw`132`,
    answerExpression: String.raw`132`
  },
  {
    id: "structure-007",
    category: "構造式",
    difficulty: 1,
    question: String.raw`アダマンタンに含まれる水素原子の数は？![アダマンタンの構造式](./assets/questions/flash/Adamantane.svg)`,
    answer: String.raw`16`,
    answerExpression: String.raw`16`
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
  },
  {
    id: "history-006",
    category: "年号",
    difficulty: 1,
    question: String.raw`ドーリットル空襲されたのは何年？`,
    answer: String.raw`1942`,
    answerExpression: String.raw`1942`,
    explanation: String.raw`4月18日`
  },
  {
    id: "history-007",
    category: "年号",
    difficulty: 1,
    question: String.raw`GREEN×EXPOは何年（予定）？`,
    answer: String.raw`2027`,
    answerExpression: String.raw`2027`,
    explanation: String.raw`横浜の僻地でやるらしい`
  },
  {
    id: "history-008",
    category: "年号",
    difficulty: 1,
    question: String.raw`平城京遷都は何年？`,
    answer: String.raw`710`,
    answerExpression: String.raw`710`,
    explanation: String.raw`納豆ネバネバ平城京`
  },
  {
    id: "history-009",
    category: "年号",
    difficulty: 1,
    question: String.raw`WWIIでイタリアが降伏したのは何年？`,
    answer: String.raw`1943`,
    answerExpression: String.raw`1943`,
    explanation: String.raw`はやすぎだろ`
  },
  {
    id: "history-010",
    category: "年号",
    difficulty: 1,
    question: String.raw`ミッドウェーでボコされたのは何年？`,
    answer: String.raw`1942`,
    answerExpression: String.raw`1942`,
    explanation: String.raw`開戦から半年...`
  },
  {
    id: "history-011",
    category: "年号",
    difficulty: 2,
    question: String.raw`札幌五輪が開催されたのは何年？`,
    answer: String.raw`1972`,
    answerExpression: String.raw`1972`,
    explanation: String.raw`長野は1998`
  },
  {
    id: "history-012",
    category: "年号",
    difficulty: 1,
    question: String.raw`2回目の東京五輪が開催されたのは何年？`,
    answer: String.raw`2021`,
    answerExpression: String.raw`2021`,
    explanation: String.raw`長野は1998`
  },
  {
    id: "history-013",
    category: "年号",
    difficulty: 1,
    question: String.raw`FIFA2026で日本がブラジルに負けてあげたのは何月？`,
    answer: String.raw`6`,
    answerExpression: String.raw`6`,
    explanation: String.raw`日本時間の6月30日午前2時にキックオフ`
  },
  {
    id: "history-014",
    category: "年号",
    difficulty: 2,
    question: String.raw`日本が国際連合に加盟したのは何年？`,
    answer: String.raw`1956`,
    answerExpression: String.raw`1956`
  },
  {
    id: "tips-001",
    category: "その他",
    difficulty: 1,
    question: String.raw`$369\times271$`,
    answer: String.raw`99999`,
    answerExpression: String.raw`99999`,
    explanation: String.raw`へっ`
  },
  {
    id: "tips-002",
    category: "その他",
    difficulty: 1,
    question: String.raw`$369\times271$`,
    answer: String.raw`99999`,
    answerExpression: String.raw`99999`,
    explanation: String.raw`へっ`
  },
  {
    id: "tips-003",
    category: "その他",
    difficulty: 1,
    question: String.raw`ASCIIは基本的に何bitの文字コード？`,
    answer: String.raw`7`,
    answerExpression: String.raw`7`
  },
  {
    id: "tips-004",
    category: "その他",
    difficulty: 1,
    question: String.raw`$0x29A$は10進数だと？`,
    answer: String.raw`666`,
    answerExpression: String.raw`666`
  },
  {
    id: "tips-005",
    category: "その他",
    difficulty: 1,
    question: String.raw`$0x29A$は10進数だと？`,
    answer: String.raw`666`,
    answerExpression: String.raw`666`
  },
  {
    id: "tips-006",
    category: "その他",
    difficulty: 2,
    question: String.raw`1~2026年に閏年は何回あった？`,
    answer: String.raw`491`,
    answerExpression: String.raw`491`,
    explanation: String.raw`$(100-4+1)*5+6$`
  },
  {
    id: "tips-007",
    category: "その他",
    difficulty: 1,
    question: String.raw`4番目に小さいメルセンヌ素数は？`,
    answer: String.raw`127`,
    answerExpression: String.raw`127`
  }
];
