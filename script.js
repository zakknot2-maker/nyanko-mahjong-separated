const CAT_LIBRARY = [
  { name:"覗き猫", src:"images/peek-logo.jpg", pos:"50% 42%", scale:1.42, mood:"logo" },
  { name:"キリッ猫", src:"images/kiri.jpg", pos:"50% 50%", scale:1.00, mood:"strong" },
  { name:"ニンマリ猫", src:"images/ninmari.jpg", pos:"50% 50%", scale:1.00, mood:"smirk" },
  { name:"ネクタイ猫", src:"images/tie.jpg", pos:"50% 42%", scale:1.04, mood:"condition" },
  { name:"あんぐり猫", src:"images/anguri.jpg", pos:"52% 35%", scale:1.08, mood:"fire" },
  { name:"面白顔猫", src:"images/funny.jpg", pos:"50% 50%", scale:1.00, mood:"funny" },
  { name:"お風呂猫", src:"images/bath.jpg", pos:"50% 40%", scale:1.08, mood:"battle" }
];

const COMMENT_LINES = {
  assist: [
    "符計算をサポートするよ！迷ったときは補助輪ネコにおまかせにゃ 🐾",
    "切り上げ忘れに注意にゃ。最後は10符単位にゃ 🀄",
    "役牌頭とダブ風頭、ここで差が出るにゃ 😼",
    "暗刻とカンは符が伸びるにゃ。高符を疑うにゃ 🔥",
    "七対子は25符固定。これは迷わないにゃ 🐾",
    "補助輪つけてもトップは取れるにゃ 😏",
    "符は細かいけど、慣れたら速いにゃ"
  ],
  quick: [
    "翻と符がわかる時は早いネコで一発確認にゃ ⚡",
    "3900はよく出るにゃ。覚えておくと速いにゃ 🐈",
    "満貫以上は符を気にしすぎなくてOKにゃ 🔥",
    "点数確認完了にゃ。あとは堂々と申告にゃ 🀄",
    "早い確認はミス防止に効くにゃ 🐾",
    "その点数、すぐ出せるのは強いにゃ 😼",
    "にゃんこスピードで確認完了にゃ"
  ],
  conditionGood: [
    "まくり筋ありにゃ！オーラスの炎、燃やすにゃ 🔥",
    "その条件なら戦えるにゃ。直撃もツモも見るにゃ 😼",
    "チャンスあるにゃ。最後まで諦めないにゃ 🐾",
    "条件は見えたにゃ。あとは和了るだけにゃ 🀄",
    "ニンマリできる条件にゃ 😏",
    "そのルート、かなり現実的にゃ"
  ],
  conditionBad: [
    "まだ届かないにゃ…。もう一翻ほしいにゃ 😿",
    "条件は重いにゃ。直撃ルートも確認するにゃ 🐾",
    "かなり厳しいにゃ。でもオーラスは何が起きるかわからないにゃ 🔥",
    "ツモ条件と直撃条件、両方見ておくにゃ 🐈‍⬛",
    "あんぐりするほど遠いにゃ 🙀",
    "裏ドラに祈るルートもあるにゃ"
  ],
  conditionLead: [
    "もうリードしてるにゃ。守るか攻めるかは場況次第にゃ 🐾",
    "上回ってるにゃ。放銃だけは気をつけるにゃ 😼",
    "リード中にゃ。落ち着いていくにゃ 🐈",
    "勝ってるときほど丁寧にゃ",
    "にんまりしてても油断は禁物にゃ 😏"
  ]
};

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function applyCatImage(id, cat){
  const img = document.getElementById(id);
  if(!img || !cat) return;
  img.src = cat.src;
  img.style.objectPosition = cat.pos;
  img.style.transform = "scale(" + cat.scale + ")";
}


function getCatByName(name){
  return CAT_LIBRARY.find(c => c.name === name) || CAT_LIBRARY[0];
}
function setCommentCatByName(id, name){
  const cat = getCatByName(name);
  applyCatImage(id, cat);
}

function randomizeHeroCat(){ applyCatImage("hero-cat", pick(CAT_LIBRARY)); }

const COMMENT_CAT_LIBRARY = [
  { name:"覗き猫", src:CAT_LIBRARY[0].src, pos:"50% 45%", scale:1.08 },
  { name:"キリッ猫", src:CAT_LIBRARY[1].src, pos:"50% 50%", scale:1.00 },
  { name:"ニンマリ猫", src:CAT_LIBRARY[2].src, pos:"50% 50%", scale:1.00 },
  { name:"ネクタイ猫", src:CAT_LIBRARY[3].src, pos:"50% 42%", scale:1.00 },
  { name:"あんぐり猫", src:CAT_LIBRARY[4].src, pos:"52% 38%", scale:1.00 },
  { name:"面白顔猫", src:CAT_LIBRARY[5].src, pos:"50% 50%", scale:1.00 },
  { name:"お風呂猫", src:CAT_LIBRARY[6].src, pos:"50% 40%", scale:1.00 }
];

function randomizeCommentCat(id){ applyCatImage(id, pick(COMMENT_CAT_LIBRARY)); }
function randomComment(kind){ return pick(COMMENT_LINES[kind] || COMMENT_LINES.assist); }


const heroLines=[
  "🔥 オーラスまで諦めないにゃ",
  "😼 3900は裏ドラ次第にゃ",
  "🐾 降りる勇気も大事にゃ",
  "🀄 先制リーチは正義にゃ",
  "😹 鳴きすぎ注意報にゃ",
  "🐱 今日も良い配牌にゃ",
  "🐈‍⬛ 押す時は押すにゃ",
  "👑 トップ取りにいくにゃ",
  "🐟 ツモれば解決にゃ",
  "🙀 その牌ほんとに通るかにゃ？",
  "😏 その押し、通る気がするにゃ",
  "💰 満貫は正義にゃ",
  "🎯 待ちは広く持つにゃ",
  "⚡ 迷ったら早いネコに聞くにゃ",
  "😼 条件は見えてからが勝負にゃ"
];
document.getElementById("hero-message").innerText=heroLines[Math.floor(Math.random()*heroLines.length)];

function showTool(id, btn){
  document.querySelectorAll(".tool").forEach(t=>t.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  btn.classList.add("active");

  document.body.classList.remove("theme-assist","theme-quick","theme-condition");
  if(id === "quick") document.body.classList.add("theme-quick");
  else if(id === "condition") document.body.classList.add("theme-condition");
  else document.body.classList.add("theme-assist");
}
function ceil100(n){return Math.ceil(n/100)*100}
function ceil10(n){return Math.ceil(n/10)*10}
function fmt(n){return Number(n).toLocaleString()}
function scoreFromFuHan(fu,han){let base;if(han>=13)base=8000;else if(han>=11)base=6000;else if(han>=8)base=4000;else if(han>=6)base=3000;else if(han>=5)base=2000;else{base=fu*Math.pow(2,han+2);if(base>=2000||(han===4&&fu>=30)||(han===3&&fu>=60))base=2000;}let koRon=ceil100(base*4),oyaRon=ceil100(base*6),koTsumoKo=ceil100(base),koTsumoOya=ceil100(base*2),oyaTsumo=ceil100(base*2);if(fu===25&&han===2){koRon=1600;oyaRon=2400;koTsumoKo=400;koTsumoOya=800;oyaTsumo=800;}return{koRon,oyaRon,koTsumoKo,koTsumoOya,oyaTsumo}}
function setPoint(prefix,s){document.getElementById(prefix+"-ko-ron").innerText="🐾 "+fmt(s.koRon)+" 点";document.getElementById(prefix+"-ko-tsumo").innerText="🐈 "+fmt(s.koTsumoKo)+" / "+fmt(s.koTsumoOya);document.getElementById(prefix+"-oya-ron").innerText="👑 "+fmt(s.oyaRon)+" 点";document.getElementById(prefix+"-oya-tsumo").innerText="🐟 "+fmt(s.oyaTsumo)+" ALL";}
function calcQuick(){let han=parseInt(document.getElementById("quick-han").value),fu=parseInt(document.getElementById("quick-fu").value);if((han===1&&fu===20)||(han===1&&fu===25)){["quick-ko-ron","quick-ko-tsumo","quick-oya-ron","quick-oya-tsumo"].forEach(id=>document.getElementById(id).innerText="-");return;}setPoint("quick",scoreFromFuHan(fu,han));setCommentCatByName("quick-cat", "ニンマリ猫");
document.getElementById("quick-comment").innerText =
  fu===25 ? "七対子は25符固定、ここ大事にゃ 🐾" :
  han>=5 ? randomComment("quick") :
  randomComment("quick");}
function calcAssistFu(){let special=document.getElementById("assist-special").value;if(special==="chitoi")return{fu:25,memo:"七対子は25符固定にゃ。"};if(special==="pinfuTsumo")return{fu:20,memo:"平和ツモは20符固定にゃ。"};let raw=20,memo=[];let win=document.getElementById("assist-win").value;if(win==="closedRon"){raw+=10;memo.push("メンゼンロン +10")}if(win==="tsumo"){raw+=2;memo.push("ツモ +2")}let head=parseInt(document.getElementById("assist-head").value);if(head>0){raw+=head;memo.push((head===4?"ダブ風頭":"役牌頭")+" +"+head)}let wait=parseInt(document.getElementById("assist-wait").value);if(wait>0){raw+=wait;memo.push("愚形/単騎 +2")}document.querySelectorAll(".assist-set").forEach(el=>{let count=parseInt(el.value),fu=parseInt(el.dataset.fu);if(count>0){raw+=count*fu;memo.push(count+"個×"+fu+"符")}});let rounded=ceil10(raw);return{fu:rounded,memo:(memo.length?memo.join(" / "):"基本符のみ")+" → "+raw+"符 → "+rounded+"符"}}
function calcAssist(){let han=parseInt(document.getElementById("assist-han").value);let f=calcAssistFu();document.getElementById("assist-fu").innerText="🐾 "+f.fu+"符";setPoint("assist",scoreFromFuHan(f.fu,han));document.getElementById("assist-note").innerText=f.memo;setCommentCatByName("assist-cat", "キリッ猫");
document.getElementById("assist-comment").innerText =
  f.fu===20 ? "平和ツモは20符固定にゃ。きれいな形にゃ ✨" :
  f.fu===25 ? "七対子は25符固定にゃ。迷わないにゃ 🐾" :
  f.fu>=50 ? "重めの手にゃ。符が乗ってるにゃ 🔥" :
  randomComment("assist");}
const ronChild=[{name:"1000ロン",point:1000},{name:"2000ロン",point:2000},{name:"3900ロン",point:3900},{name:"5200ロン",point:5200},{name:"満貫ロン",point:8000},{name:"跳満ロン",point:12000},{name:"倍満ロン",point:16000},{name:"三倍満ロン",point:24000},{name:"役満ロン",point:32000}];
const ronParent=[{name:"1500ロン",point:1500},{name:"2900ロン",point:2900},{name:"5800ロン",point:5800},{name:"満貫ロン",point:12000},{name:"跳満ロン",point:18000},{name:"倍満ロン",point:24000},{name:"三倍満ロン",point:36000},{name:"役満ロン",point:48000}];
const tsumoChild=[{name:"500 / 1000ツモ",gain:2000,childPay:500,parentPay:1000},{name:"1000 / 2000ツモ",gain:4000,childPay:1000,parentPay:2000},{name:"1300 / 2600ツモ",gain:5200,childPay:1300,parentPay:2600},{name:"2000 / 4000ツモ",gain:8000,childPay:2000,parentPay:4000},{name:"3000 / 6000ツモ",gain:12000,childPay:3000,parentPay:6000},{name:"4000 / 8000ツモ",gain:16000,childPay:4000,parentPay:8000},{name:"6000 / 12000ツモ",gain:24000,childPay:6000,parentPay:12000},{name:"8000 / 16000ツモ",gain:32000,childPay:8000,parentPay:16000}];
const tsumoParent=[{name:"1000 ALL",gain:3000,childPay:1000},{name:"2000 ALL",gain:6000,childPay:2000},{name:"4000 ALL",gain:12000,childPay:4000},{name:"6000 ALL",gain:18000,childPay:6000},{name:"8000 ALL",gain:24000,childPay:8000},{name:"12000 ALL",gain:36000,childPay:12000},{name:"16000 ALL",gain:48000,childPay:16000}];
function findRon(me,target,mySeat,direct,bonus){
  const list=mySeat==="parent"?ronParent:ronChild;
  for(const c of list){
    const myAfter=me+c.point+bonus;
    const targetAfter=target-(direct?c.point:0);
    if(myAfter>targetAfter) return c.name;
  }
  return "役満でも届かない";
}
function findTsumo(me,target,mySeat,targetSeat,bonus){
  const list=mySeat==="parent"?tsumoParent:tsumoChild;
  for(const c of list){
    const targetPay=mySeat==="parent"?c.childPay:(targetSeat==="parent"?c.parentPay:c.childPay);
    const myAfter=me+c.gain+bonus;
    const targetAfter=target-targetPay;
    if(myAfter>targetAfter) return c.name;
  }
  return "役満ツモでも届かない";
}

function setConditionDifficultyCat(resultText){
  const easy = ["1000","1300","1500","2000","2600","2900"];
  const normal = ["3900","5200","5800","7700","8000","満貫"];

  if(easy.some(x => resultText.includes(x))){
    setCommentCatByName("condition-cat","ニンマリ猫");
    document.getElementById("condition-comment").innerText="ニンマリできる条件にゃ 😏";
  }else if(normal.some(x => resultText.includes(x))){
    setCommentCatByName("condition-cat","ネクタイ猫");
    document.getElementById("condition-comment").innerText="まだ現実的に戦える条件にゃ 👔";
  }else{
    setCommentCatByName("condition-cat","面白顔猫");
    document.getElementById("condition-comment").innerText="なかなか遠いにゃ 🤣";
  }
}

function calcCondition(){
  const meInput = document.getElementById("cond-me");
  const targetInput = document.getElementById("cond-target");

  const mySeat = document.getElementById("cond-my-seat").value;
  const targetSeat = document.getElementById("cond-target-seat").value;
  const honba = parseInt(document.getElementById("cond-honba").value || 0);
  const kyotaku = parseInt(document.getElementById("cond-kyotaku").value || 0);

  if(meInput.value === "" || targetInput.value === ""){
    document.getElementById("cond-diff").innerText = "点数を入力してください🐾";
    document.getElementById("cond-minimum").innerText = "-";
    document.getElementById("cond-ron").innerText = "-";
    document.getElementById("cond-direct").innerText = "-";
    document.getElementById("cond-tsumo").innerText = "-";
    document.getElementById("cond-tsumo-sub").innerText =
      "自分：" + (mySeat === "parent" ? "親" : "子") +
      " / 相手：" + (targetSeat === "parent" ? "親" : "子") +
      "。本場・供託込みで判定するにゃ。";
    return;
  }

  const me = parseInt(meInput.value);
  const target = parseInt(targetInput.value);
  const bonus = honba * 300 + kyotaku * 1000;
  const diff = target - me;

  document.getElementById("cond-diff").innerText =
    diff > 0 ? fmt(diff) + "点ビハインド" : fmt(Math.abs(diff)) + "点リード";

  const ron = findRon(me, target, mySeat, false, bonus);
  const direct = findRon(me, target, mySeat, true, bonus);
  const tsumo = findTsumo(me, target, mySeat, targetSeat, bonus);

  document.getElementById("cond-ron").innerText = ron;
  document.getElementById("cond-direct").innerText = direct;
  document.getElementById("cond-tsumo").innerText = tsumo;

  let bestCondition = ron;
  if(bestCondition.includes("届かない")) bestCondition = direct;
  if(bestCondition.includes("届かない")) bestCondition = tsumo;

  setConditionDifficultyCat(bestCondition);

  if(diff < 0){
    document.getElementById("cond-minimum").innerText = "すでに上回ってるにゃ";
  }else if([ron, direct, tsumo].some(x => !x.includes("届かない"))){
    document.getElementById("cond-minimum").innerText = "どれかでまくれるにゃ";
  }else{
    document.getElementById("cond-minimum").innerText = "かなり厳しいにゃ";
  }

  document.getElementById("cond-tsumo-sub").innerText =
    "自分：" + (mySeat === "parent" ? "親" : "子") +
    " / 相手：" + (targetSeat === "parent" ? "親" : "子") +
    "。本場・供託込みで判定するにゃ。";
}
function showSecretBattle(){
  document.body.classList.add("secret-mode");
  document.getElementById("secret-battle").classList.add("active");
  calcBattle();
  document.getElementById("secret-battle").scrollIntoView({behavior:"smooth",block:"start"});
}

function hideSecretBattle(){
  document.body.classList.remove("secret-mode");
  document.getElementById("secret-battle").classList.remove("active");
}
function calcBattle(){
  let total = 0;
  let reasons = [];

  let round = document.getElementById("battle-round").value;
  let rank = document.getElementById("battle-rank").value;
  let shanten = document.getElementById("battle-shanten").value;
  let value = document.getElementById("battle-value").value;
  let shape = document.getElementById("battle-shape").value;
  let threat = document.getElementById("battle-threat").value;
  let riskLevel = document.getElementById("battle-risklevel").value;

  if(round === "early"){
    total += 1;
    reasons.push("序盤 +1");
  }else if(round === "late"){
    total -= 1;
    reasons.push("終盤 -1");
  }else{
    reasons.push("中盤 基準");
  }

  if(rank === "1"){
    total -= 1;
    reasons.push("トップ目 -1");
  }else if(rank === "3"){
    total += 1;
    reasons.push("3着目 +1");
  }else if(rank === "4"){
    total += 2;
    reasons.push("ラス目 +2");
  }else{
    reasons.push("2着目 基準");
  }

  if(shanten === "tenpai"){
    total += 3;
    reasons.push("テンパイ +3");
  }else if(shanten === "one"){
    total += 1;
    reasons.push("1シャンテン +1");
  }else if(shanten === "two"){
    total -= 2;
    reasons.push("2シャンテン -2");
  }else{
    total -= 4;
    reasons.push("3シャンテン以上 -4");
  }

  if(value === "1000"){
    total -= 2;
    reasons.push("1000級 -2");
  }else if(value === "2000"){
    total -= 1;
    reasons.push("2000級 -1");
  }else if(value === "mangan"){
    total += 2;
    reasons.push("満貫以上 +2");
  }else{
    reasons.push("3900級 基準");
  }

  if(shape === "bad"){
    total -= 1;
    reasons.push("愚形 -1");
  }else{
    total += 1;
    reasons.push("良形 +1");
  }

  if(threat === "riichi"){
    total -= 2;
    reasons.push("リーチ -2");
  }else if(threat === "parent"){
    total -= 3;
    reasons.push("親リーチ -3");
  }else if(threat === "open"){
    total -= 2;
    reasons.push("高そうな仕掛け -2");
  }else{
    reasons.push("相手攻撃なし 基準");
  }

  if(riskLevel === "safe"){
    total += 1;
    reasons.push("安全牌 +1");
  }else if(riskLevel === "danger"){
    total -= 2;
    reasons.push("危険牌 -2");
  }else if(riskLevel === "verydanger"){
    total -= 3;
    reasons.push("無スジ危険牌 -3");
  }else{
    reasons.push("まあ通りそう 基準");
  }

  let judgement = "";
  let risk = "";

  if(total >= 5){
    judgement = "🔥 全ツにゃ";
    risk = "3枚以上";
  }else if(total >= 3){
    judgement = "😼 押しにゃ";
    risk = "2枚くらい";
  }else if(total >= 1){
    judgement = "🐾 押し寄り";
    risk = "1〜2枚";
  }else if(total === 0){
    judgement = "🤔 微妙にゃ";
    risk = "0〜1枚";
  }else if(total >= -3){
    judgement = "🙀 降り寄り";
    risk = "0〜1枚";
  }else{
    judgement = "🚪 ベタオリにゃ";
    risk = "0枚";
  }

  if((shanten === "two" || shanten === "three") && threat === "parent"){
    judgement = "🚪 ベタオリにゃ";
    risk = "0枚";
    reasons.push("2シャンテン以上で親リーチ：強制引き");
  }

  if(round === "late" && riskLevel === "verydanger"){
    if(total >= 3){
      judgement = "🐾 押し寄り";
      risk = "1枚まで";
    }else{
      judgement = "🙀 降り寄り";
      risk = "0〜1枚";
    }
    reasons.push("終盤の超危険牌：一段階引き");
  }

  if(value === "1000" && shape === "bad"){
    if(total <= 1){
      judgement = "🚪 ベタオリにゃ";
      risk = "0枚";
    }
    reasons.push("低打点愚形：引き補正");
  }

  if(shanten === "tenpai" && value === "mangan"){
    if(total <= 0){
      judgement = "🐾 押し寄り";
      risk = "1〜2枚";
    }
    reasons.push("満貫以上テンパイ：押し補正");
  }

  document.getElementById("battle-judge").innerText = judgement;
  document.getElementById("battle-risk").innerText = risk;
  document.getElementById("battle-score").innerText = total;
  document.getElementById("battle-reason").innerHTML = "<b>理由：</b>" + reasons.join(" / ");
}
/* ==========================
開発者モード隠しコマンド
順番：
1 吹き出し
2 猫の顔
3 手牌を置く手
4 タイトル「ざわ…戦えるかにゃ？」
========================== */

const devSecretSequence = ["speech", "face", "hand", "title"];
let devSecretProgress = [];
let devSecretTimer = null;

function getBattleTapZone(e){
  const panel = document.getElementById("secret-battle");
  if(!panel || !document.body.classList.contains("secret-mode")) return null;

  if(e.target.closest("select, button, input")) return null;

  const rect = panel.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  const beforeHeight = parseFloat(getComputedStyle(panel, "::before").height) || 420;
  const imageRatio = beforeHeight / rect.height;

  if(e.target.closest(".secret-head, .secret-title")){
    return "title";
  }

  if(y > imageRatio) return null;

  const iy = y / imageRatio;

  // 吹き出し：右上
  if(x >= 0.68 && x <= 0.98 && iy >= 0.04 && iy <= 0.38){
    return "speech";
  }

  // 猫の顔：中央上
  if(x >= 0.34 && x <= 0.70 && iy >= 0.16 && iy <= 0.52){
    return "face";
  }

  // 手牌を置く手：左下〜中央下
  if(x >= 0.10 && x <= 0.62 && iy >= 0.58 && iy <= 0.96){
    return "hand";
  }

  return null;
}

function handleDeveloperCommandTap(e){
  const zone = getBattleTapZone(e);
  if(!zone) return;

  clearTimeout(devSecretTimer);
  devSecretTimer = setTimeout(() => {
    devSecretProgress = [];
  }, 5000);

  const next = devSecretSequence[devSecretProgress.length];

  if(zone === next){
    devSecretProgress.push(zone);
  }else{
    devSecretProgress = zone === devSecretSequence[0] ? [zone] : [];
  }

  if(devSecretProgress.length === devSecretSequence.length){
    devSecretProgress = [];
    clearTimeout(devSecretTimer);
    showDeveloperMode();
  }
}

function showDeveloperMode(){
  const battle = document.getElementById("secret-battle");

battle.animate([
    {transform:"scale(1)"},
    {transform:"scale(1.015)"},
    {transform:"scale(1)"}
],{
    duration:250
});
  document.body.classList.add("developer-mode");

  let panel = document.getElementById("developer-mode-panel");
  if(!panel){
    panel = document.createElement("div");
    panel.id = "developer-mode-panel";
    panel.className = "developer-panel";
    panel.innerHTML = `
      <div class="developer-title">🐾 開発者モード</div>
      <div class="developer-text">ようこそ、飼い主。</div>
      <div class="developer-text">自分用の押し引き補正はここに育てていくにゃ。</div>
      <div class="developer-badge">現在：観察モード</div>
      <button class="developer-close" onclick="hideDeveloperMode()">
閉じる
</button>
    `;
    document.getElementById("secret-battle").appendChild(panel);
  }

  panel.classList.add("active");
}

document.getElementById("secret-battle").addEventListener("click", handleDeveloperCommandTap);

applyCatImage("hero-cat", CAT_LIBRARY[0]);
setCommentCatByName('assist-cat', 'キリッ猫');
setCommentCatByName('quick-cat', 'ニンマリ猫');
setCommentCatByName('condition-cat', 'ネクタイ猫');
document.body.classList.add("theme-assist");

calcQuick();
calcAssist();
calcCondition();

function hideDeveloperMode(){

    document.body.classList.remove("developer-mode");

    const panel = document.getElementById("developer-mode-panel");

    if(panel){
        panel.classList.remove("active");
    }

}
