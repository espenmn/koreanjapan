const phrases = [
  { no: "Hei", ko: "안녕하세요", koPron: "annyeonghaseyo", ja: "こんにちは", jaPron: "konnichiwa" },
  { no: "Ha det", ko: "안녕히 가세요", koPron: "annyeonghi gaseyo", ja: "さようなら", jaPron: "sayonara" },
  { no: "Takk", ko: "감사합니다", koPron: "gamsahamnida", ja: "ありがとうございます", jaPron: "arigatou gozaimasu" },
  { no: "Tusen takk", ko: "대단히 감사합니다", koPron: "daedanhi gamsahamnida", ja: "どうもありがとうございます", jaPron: "doumo arigatou gozaimasu" },
  { no: "Vær så snill", ko: "부탁합니다", koPron: "butakhamnida", ja: "お願いします", jaPron: "onegaishimasu" },
  { no: "Unnskyld meg", ko: "실례합니다", koPron: "sillyehamnida", ja: "すみません", jaPron: "sumimasen" },
  { no: "Ja", ko: "네", koPron: "ne", ja: "はい", jaPron: "hai" },
  { no: "Nei", ko: "아니요", koPron: "aniyo", ja: "いいえ", jaPron: "iie" },
  { no: "God morgen", ko: "좋은 아침", koPron: "joeun achim", ja: "おはようございます", jaPron: "ohayou gozaimasu" },
  { no: "God kveld", ko: "좋은 저녁", koPron: "joeun jeonyeok", ja: "こんばんは", jaPron: "konbanwa" },

  { no: "Hvor er toalettet?", ko: "화장실이 어디인가요?", koPron: "hwajangsil i eodi ingayo", ja: "トイレはどこですか", jaPron: "toire wa doko desu ka" },
  { no: "Togstasjon", ko: "기차역", koPron: "gichayeok", ja: "駅", jaPron: "eki" },
  { no: "Busstasjon", ko: "버스 정류장", koPron: "beoseu jeongnyujang", ja: "バス停", jaPron: "basutei" },
  { no: "Flyplass", ko: "공항", koPron: "gonghang", ja: "空港", jaPron: "kuukou" },
  { no: "Hotell", ko: "호텔", koPron: "hotel", ja: "ホテル", jaPron: "hoteru" },
  { no: "Taxi", ko: "택시", koPron: "taeksi", ja: "タクシー", jaPron: "takushii" },
  { no: "Hvor mye koster det?", ko: "얼마예요?", koPron: "eolmayeyo", ja: "いくらですか", jaPron: "ikura desu ka" },
  { no: "Jeg vil til...", ko: "...에 가고 싶어요", koPron: "e gago sipeoyo", ja: "...に行きたいです", jaPron: "ni ikitai desu" },
  { no: "Hvor er ...?", ko: "... 어디에 있나요?", koPron: "eodi e innayo", ja: "...はどこですか", jaPron: "wa doko desu ka" },
  { no: "Hjelp!", ko: "도와주세요", koPron: "dowajuseyo", ja: "助けて", jaPron: "tasukete" },
  { no: "Øl", ko: "맥주", koPron: "maekju", ja: "ビール", jaPron: "biiru" },
  { no: "Vann", ko: "물", koPron: "mul", ja: "水", jaPron: "mizu" },
  { no: "Kaffe", ko: "커피", koPron: "keopi", ja: "コーヒー", jaPron: "koohii" },
  { no: "Te", ko: "차", koPron: "cha", ja: "お茶", jaPron: "ocha" },
  { no: "Mat", ko: "음식", koPron: "eumsik", ja: "食べ物", jaPron: "tabemono" },
  { no: "Restaurant", ko: "레스토랑", koPron: "reseutorang", ja: "レストラン", jaPron: "resutoran" },
  { no: "Meny", ko: "메뉴", koPron: "menyu", ja: "メニュー", jaPron: "menyuu" },
  { no: "Regningen", ko: "계산서", koPron: "gyesanseo", ja: "お会計", jaPron: "okaikei" },

  { no: "For dyrt", ko: "너무 비싸요", koPron: "neomu bissayo", ja: "高すぎます", jaPron: "takasugimasu" },
  { no: "Billigere?", ko: "더 싸요?", koPron: "deo ssayo", ja: "もっと安いですか", jaPron: "motto yasui desu ka" },
  { no: "Jeg kjøper den", ko: "이걸 살게요", koPron: "igeol salgeyo", ja: "これを買います", jaPron: "kore o kaimasu" },
  { no: "Kontanter", ko: "현금", koPron: "hyeongeum", ja: "現金", jaPron: "genkin" },
  { no: "Kort", ko: "카드", koPron: "kadeu", ja: "カード", jaPron: "kaado" },
  { no: "Kvittering", ko: "영수증", koPron: "yeongsujeung", ja: "領収書", jaPron: "ryoushuusho" },
  { no: "Åpen?", ko: "열려 있나요?", koPron: "yeollyeo innayo", ja: "開いていますか", jaPron: "aiteimasu ka" },
  { no: "Stengt?", ko: "닫혔나요?", koPron: "dathyeonnayo", ja: "閉まっていますか", jaPron: "shimatteimasu ka" },

  { no: "Til høyre", ko: "오른쪽", koPron: "oreunjjok", ja: "右", jaPron: "migi" },
  { no: "Til venstre", ko: "왼쪽", koPron: "oenjjok", ja: "左", jaPron: "hidari" },
  { no: "Rett frem", ko: "곧장", koPron: "gotjang", ja: "まっすぐ", jaPron: "massugu" },
  { no: "Hvor langt?", ko: "얼마나 멀어요?", koPron: "eolmana meoreoyo", ja: "どのくらい遠いですか", jaPron: "dono kurai tooi desu ka" },

  { no: "Jeg er syk", ko: "저는 아파요", koPron: "jeoneun apayo", ja: "気分が悪いです", jaPron: "kibun ga warui desu" },
  { no: "Lege", ko: "의사", koPron: "uisa", ja: "医者", jaPron: "isha" },
  { no: "Sykehus", ko: "병원", koPron: "byeongwon", ja: "病院", jaPron: "byouin" },
  { no: "Apotek", ko: "약국", koPron: "yakguk", ja: "薬局", jaPron: "yakkyoku" },
  { no: "1", ko: "하나", koPron: "hana", ja: "一", jaPron: "ichi" },
  { no: "2", ko: "둘", koPron: "dul", ja: "二", jaPron: "ni" },
  { no: "3", ko: "셋", koPron: "set", ja: "三", jaPron: "san" },
  { no: "4", ko: "넷", koPron: "net", ja: "四", jaPron: "yon" },
  { no: "5", ko: "다섯", koPron: "daseot", ja: "五", jaPron: "go" },
  { no: "6", ko: "여섯", koPron: "yeoseot", ja: "六", jaPron: "roku" },
  { no: "7", ko: "일곱", koPron: "ilgop", ja: "七", jaPron: "nana" },
  { no: "8", ko: "여덟", koPron: "yeodeol", ja: "八", jaPron: "hachi" },
  { no: "9", ko: "아홉", koPron: "ahop", ja: "九", jaPron: "kyuu" },
  { no: "10", ko: "열", koPron: "yeol", ja: "十", jaPron: "juu" },

];

const list = document.getElementById("list");
const lang = document.getElementById("lang");
const search = document.getElementById("search");

// function speak(text, langCode) {
//   const utter = new SpeechSynthesisUtterance(text);
//   utter.lang = langCode;
//   speechSynthesis.speak(utter);
// }

function speak(text, langCode) {
  speechSynthesis.cancel(); // stop overlapping speech

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = langCode;

  // 👇 slower speech (0.6–1.0 is normal range)
  utter.rate = 0.75;

  // optional: slightly clearer pronunciation
  utter.pitch = 1.0;
  utter.volume = 1;

  speechSynthesis.speak(utter);
}

function render() {
  const q = search.value.toLowerCase();
  const mode = lang.value;

  list.innerHTML = "";

  phrases
    .filter(p => p.no.toLowerCase().includes(q))
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "card";

      const foreign = mode === "ko" ? p.ko : p.ja;
      const pron = mode === "ko" ? p.koPron : p.jaPron;
      const speakLang = mode === "ko" ? "ko-KR" : "ja-JP";

      div.innerHTML = `
        <div class="langs"><div class="no">${p.no}</div>
        <div> <span class="pron">${pron}</span>  <span class="foreign"> &nbsp; • &nbsp; ${foreign}</span></div>
        </div>
        <button>▶</button>
      `;

      div.querySelector("button").onclick = () => speak(foreign, speakLang);

      list.appendChild(div);
    });
}

lang.onchange = render;
search.oninput = render;

render();