/* 観光地データ
画像は assets/tourism/ に保存します。
website と mapUrl は空文字でも構いません。
*/
window.TOURISM_SPOTS = [
  {
    id: "goryokaku",
    name: "五稜郭",
    website: "https://www.hakodate-jts-kosya.jp/park/goryokaku/",
    price: "無料（有料施設もある）",
    photo: "./assets/tourism/goryokaku.jpeg",
    photoAlt: "お前通信ざっこ(笑)",
    access: "徒歩46分・バス30分300円（大体）",
    hours: "05:00-19:00",
    summary: "季節違うから桜は見れないです。",
    mapUrl: "https://maps.app.goo.gl/SUtKerNa2rM6J1bNA"
  },
  {
    id: "goryokaku-tower",
    name: "五稜郭タワー",
    website: "https://www.goryokaku-tower.co.jp/",
    price: "前売チケット1080円（普通に買うと1200円）",
    photo: "./assets/tourism/goryokaku-tower.jpg",
    photoAlt: "お前通信ざっこ(笑)",
    access: "徒歩45分・バス30分300円（大体）",
    hours: "09:00-18:00",
    summary: "高さはなんと107m！ちなみに神戸タワーは108m。",
    mapUrl: "https://maps.app.goo.gl/Pw1Soi6tvj7PZY8KA"
  },
  {
    id: "nogi-shrine",
    name: "函館乃木神社",
    website: "https://hakodate-nogijinja.com/",
    price: "お賽銭",
    photo: "./assets/tourism/nogi-shrine.jpg",
    photoAlt: "（神様の前で暴言はちょっと言いずらい）",
    access: "徒歩53分・市電orバス40分300円（大体）",
    hours: "09:00-16:30（諸説あり）",
    summary: "日露戦争の何かの人の何からしい。",
    mapUrl: "https://maps.app.goo.gl/ZiDix2QpJKoc7RFh7"
  },
  {
    id: "jgsdf",
    name: "陸上自衛隊 函館駐屯地",
    website: "https://www.mod.go.jp/gsdf/nae/11d/jgsdf-post/images/hakodate/",
    price: "無料",
    photo: "./assets/tourism/jgsdf.png",
    photoAlt: "自衛隊にジャミングされた？",
    access: "徒歩54分・市電orバス40分300円（大体）",
    hours: "ずっとやってないと困る",
    summary: "ホームページのデザインどうなっとんねん...",
    mapUrl: "https://maps.app.goo.gl/GGM6qMWuEMnNoMTf9"
  },
  {
    id: "tropical",
    name: "函館市熱帯植物園",
    website: "https://hako-eco.com/",
    price: "300円",
    photo: "./assets/tourism/tropical.jpg",
    photoAlt: "まあ𝓐𝓶𝓪𝔃𝓸𝓷の奥地で電波繋がるわけないし",
    access: "徒歩75分・バス30分300円（大体）",
    hours: "09:30-18:00",
    summary: "トロピカル幾何学の方がおもろいかも？",
    mapUrl: "https://maps.app.goo.gl/AhvA9okgeZXfsQmt6"
  },
  {
    id: "jmsdf",
    name: "海上自衛隊 函館基地隊",
    website: "https://www.mod.go.jp/msdf/hasaa/",
    price: "無料",
    photo: "./assets/tourism/jmsdf.jpg",
    photoAlt: "別に見なくていいかも",
    access: "徒歩27分・バス20分250円（大体）",
    hours: "ずっとやってないと困る",
    summary: "多分かなりしょぼい。",
    mapUrl: "https://maps.app.goo.gl/1HF1yLMfgchdshuZ6"
  },
  {
    id: "aynu",
    name: "函館市北方民族資料館",
    website: "https://www.zaidan-hakodate.com/hoppominzoku/",
    price: "300円（課金すると他の施設も見れるようになる）",
    photo: "./assets/tourism/aynu.webp",
    photoAlt: "お前通信ざっこ(笑)",
    access: "徒歩29分・バス20分250円（大体）",
    hours: "09:00-17:00",
    summary: "他の施設：文学館・旧英国領事館・なんか洋館",
    mapUrl: "https://maps.app.goo.gl/5rPVBZks7ytCcPaa6"
  },
  {
    id: "ropeway",
    name: "函館山ロープウェイ",
    website: "https://334.co.jp/",
    price: "往復1800円（片道1200円）",
    photo: "./assets/tourism/ropeway.jpg",
    photoAlt: "お前通信ざっこ(笑)",
    access: "徒歩31分・バス20分250円（大体）",
    hours: "10:00-21:30（下りは22:00まで）",
    summary: "夜間の下山は徒歩非推奨っぽいけど、函館駅までのバスが出てる。",
    mapUrl: "https://maps.app.goo.gl/pDAXv6YH6py589La8"
  },
  {
    id: "hakodate-mountain",
    name: "函館山展望台",
    website: "https://334.co.jp/",
    price: "無料",
    photo: "./assets/tourism/hakodate-mountain.jpg",
    photoAlt: "スマホ見てないで景色見ろ",
    access: "登山orロープウェイorバス",
    hours: "不明",
    summary: "綺麗らしいけど当日は曇りです。",
    mapUrl: "https://maps.app.goo.gl/5Sctf9xYGtUjafnt6"
  },
  {
    id: "tachimachi",
    name: "立待岬",
    website: "https://www.hakobura.jp/spots/587",
    price: "無料",
    photo: "./assets/tourism/tachimachi.jpg",
    photoAlt: "スマホ見てないで景色見ろ",
    access: "徒歩56分・市電35分250円（大体）",
    hours: "ずっと",
    summary: "天気が\"良ければ\"下北半島も見える。",
    mapUrl: "https://maps.app.goo.gl/x3VgQGP34oAK6Mf47"
  }
];
