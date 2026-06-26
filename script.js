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
function getAssistSpecial(){
  const pinfu  = document.getElementById("assist-pinfu").checked;
  const chitoi = document.getElementById("assist-chitoi").checked;
  if(chitoi) return "chitoi";
  if(pinfu)  return "pinfu";
  return "none";
}

function onSpecialCheck(type){
  // 排他：どちらかにチェックを入れたらもう一方を外す
  if(type === "pinfu" && document.getElementById("assist-pinfu").checked){
    document.getElementById("assist-chitoi").checked = false;
  }
  if(type === "chitoi" && document.getElementById("assist-chitoi").checked){
    document.getElementById("assist-pinfu").checked = false;
  }
  updateAssistSpecialUI();
  calcAssist();
}

function updateAssistSpecialUI(){
  const special = getAssistSpecial();
  const allFields = document.getElementById("assist-detail-fields");
  const subFields = document.getElementById("assist-detail-sub");
  const badge     = document.getElementById("assist-special-badge");

  // まずリセット
  allFields.classList.remove("assist-greyed");
  subFields.classList.remove("assist-greyed");

  if(special === "chitoi"){
    // 七対子：あがり方ごとグレーアウト
    allFields.classList.add("assist-greyed");
    badge.style.display = "block";
    badge.textContent   = "七対子：25符固定にゃ。下の項目は使わないにゃ 🐾";
  }else if(special === "pinfu"){
    // ピンフ：あがり方は使う、頭・待ち・刻子カンをグレーアウト
    subFields.classList.add("assist-greyed");
    badge.style.display = "block";
    const win = document.getElementById("assist-win").value;
    badge.textContent = win === "tsumo"
      ? "ピンフツモ：20符固定にゃ。あがり方だけ選んでにゃ 🐾"
      : "ピンフロン：30符固定にゃ。あがり方だけ選んでにゃ 🐾";
  }else{
    badge.style.display = "none";
  }
}

function calcAssistFu(){
  const special = getAssistSpecial();
  if(special === "chitoi") return {fu:25, memo:"七対子：25符固定にゃ。"};
  if(special === "pinfu"){
    const win = document.getElementById("assist-win").value;
    if(win === "tsumo") return {fu:20, memo:"ピンフツモ：20符固定にゃ。"};
    // ロン・鳴きロン → 30符
    return {fu:30, memo:"ピンフロン：30符固定にゃ（メンゼンロン +10 で30符）。"};
  }
  let raw=20,memo=[];
  let win=document.getElementById("assist-win").value;
  if(win==="closedRon"){raw+=10;memo.push("メンゼンロン +10")}
  if(win==="tsumo"){raw+=2;memo.push("ツモ +2")}
  let head=parseInt(document.getElementById("assist-head").value);
  if(head>0){raw+=head;memo.push((head===4?"ダブ風頭":"役牌頭")+" +"+head)}
  let wait=parseInt(document.getElementById("assist-wait").value);
  if(wait>0){raw+=wait;memo.push("愚形/単騎 +2")}
  document.querySelectorAll(".assist-set").forEach(el=>{
    let count=parseInt(el.value),fu=parseInt(el.dataset.fu);
    if(count>0){raw+=count*fu;memo.push(count+"個×"+fu+"符")}
  });
  let rounded=ceil10(raw);
  return{fu:rounded,memo:"基本20符"+(memo.length?" / "+memo.join(" / "):"")+" → "+raw+"符 → 切り上げ → "+rounded+"符"};
}

function calcAssist(){
  updateAssistSpecialUI();
  let han=parseInt(document.getElementById("assist-han").value);
  let f=calcAssistFu();
  document.getElementById("assist-fu").innerText="🐾 "+f.fu+"符";
  setPoint("assist",scoreFromFuHan(f.fu,han));
  document.getElementById("assist-note").innerText=f.memo;
  setCommentCatByName("assist-cat", "キリッ猫");
  document.getElementById("assist-comment").innerText =
    f.fu===20 ? "ピンフツモは20符固定にゃ。きれいな形にゃ ✨" :
    f.fu===25 ? "七対子は25符固定にゃ。迷わないにゃ 🐾" :
    f.fu>=50  ? "重めの手にゃ。符が乗ってるにゃ 🔥" :
    randomComment("assist");
}
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
  if(document.body.classList.contains("developer-mode")){
    calcBattleAwaken();
  }else{
    calcBattleNormal();
  }
}

function calcBattleNormal(){
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

  if(value === "low"){
    total -= 1;
    reasons.push("1000～2000 -1");
  }else if(value === "mangan"){
    total += 2;
    reasons.push("満貫以上 +2");
  }else{
    reasons.push("3900～5200 基準");
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

  if(riskLevel === "danger"){
    total -= 2;
    reasons.push("危険牌 -2");
  }else if(riskLevel === "verydanger"){
    total -= 3;
    reasons.push("超危険牌 -3");
  }else{
    reasons.push("通りそうな牌 基準");
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

  if(value === "low" && shape === "bad"){
    if(total <= 1){
      judgement = "🚪 ベタオリにゃ";
      risk = "0枚";
    }
    reasons.push("1000～2000愚形：引き補正");
  }

  if(shanten === "tenpai" && value === "mangan"){
    if(total <= 0){
      judgement = "🐾 押し寄り";
      risk = "1〜2枚";
    }
    reasons.push("満貫以上テンパイ：押し補正");
  }

  applyBattleResult({
    judgement: judgement,
    risk: risk,
    total: total,
    reasons: reasons
  });

  updateDeveloperPanel();
}

function getBattleValue(id, fallback){
  const el = document.getElementById(id);
  return el ? el.value : fallback;
}


function setAwakenFieldVisible(name, visible){
  document.querySelectorAll('[data-awaken-field="' + name + '"]').forEach(el => {
    el.classList.toggle('awaken-hidden', !visible);
  });
}

function updateAwakenVisibility(){
  if(!document.body.classList.contains("developer-mode")) return;

  const shanten   = getBattleValue("aw-battle-shanten",  "tenpai");
  const threat    = getBattleValue("aw-battle-threat",   "riichi");
  const riskLevel = getBattleValue("aw-battle-risklevel","okay");

  const isRiichi  = (threat === "riichi" || threat === "parent");
  const isOpen    = (threat === "open");
  const isAnyDanger = (riskLevel !== "okay");

  // 自分の手：シャンテン数に応じて形欄を切り替え
  setAwakenFieldVisible("tenpaiShape",    shanten === "tenpai");
  setAwakenFieldVisible("iishantenShape", shanten === "one");
  setAwakenFieldVisible("shape", false);

  // 相手セクション：副露数は仕掛け時のみ表示
  setAwakenFieldVisible("openCount", isOpen);

  // 切る牌セクション：残り筋はリーチ系かつ無筋の時のみ表示
  setAwakenFieldVisible("suji", isRiichi && isAnyDanger);

  // 押す牌の性質は無筋を切る時のみ表示
  setAwakenFieldVisible("pushTile", isAnyDanger);
}

function calcBattleAwaken(){
  // =============================================
  // Awaken v3.0 - Knowledge完全準拠ロジック
  // 設計思想:
  //   テンパイ / 1シャンテン / 2シャンテン以下 を
  //   完全に別軸で評価する。
  //   巡目×シャンテン数の組み合わせ補正を入れる。
  //   「満貫が見えるか」を打点評価の中心に置く。
  //   残り筋は「迷う場面」でのみ比重を上げる。
  //   安牌なし=押しにはしない。
  // =============================================

  let total = 0;
  let reasons = [];
  let expectedMemos = [];
  let coachingComments = [];
  let pushWarning = "";

  updateAwakenVisibility();

  // --- 入力読み込み ---
  let round    = getBattleValue("aw-battle-round",    "middle");
  let rank     = getBattleValue("aw-battle-rank",     "2"); // 着順直読み（1〜4）
  let shanten  = getBattleValue("aw-battle-shanten",  "tenpai");
  let value    = getBattleValue("aw-battle-value",    "middle");
  let threat   = getBattleValue("aw-battle-threat",   "riichi");
  let riskLevel= getBattleValue("aw-battle-risklevel","okay");

  let tenpaiShape    = getBattleValue("aw-battle-tenpai-shape",    "ryanmen");
  let iishantenShape = getBattleValue("aw-battle-iishanten-shape", "ryanmen2");
  let suji           = getBattleValue("aw-battle-suji",            "normal");
  let safe           = getBattleValue("aw-battle-safe",            "enough");
  let openCount      = getBattleValue("aw-battle-open-count",      "none");
  let secondAttacker = getBattleValue("aw-battle-second-attacker", "none");
  let pushTile       = getBattleValue("aw-battle-push-tile",       "normal");
  // riverInfo・shape(2シャンテン以下)・position(東南場)は削除済み

  // 便利フラグ
  const isRiichi     = (threat === "riichi" || threat === "parent");
  const isOpen       = (threat === "open");
  const hasAttack    = true; // 攻撃なし廃止のため常にtrue
  const isTenpai     = (shanten === "tenpai");
  const isOne        = (shanten === "one");
  const isTwoPlus    = (shanten === "two" || shanten === "three");
  const isRyanmen    = (isTenpai && tenpaiShape === "ryanmen");
  const isHaneman    = (value === "haneman");
  const isMangan     = (value === "mangan" || isHaneman);
  const isLow        = (value === "low");
  const isMiddle     = (value === "middle");
  // 危険度フラグ（4段階）
  const isSafe19     = (riskLevel === "safe19");  // 無筋1・9・字牌周辺
  const isDanger     = (riskLevel === "danger");   // 無筋2・3・7・8
  const isVeryDanger = (riskLevel === "verydanger"); // 無筋4・5・6・またぎ
  const isAnyDanger  = (isSafe19 || isDanger || isVeryDanger); // 現物・筋以外

  // =============================================
  // BLOCK A: 着順（全シャンテン共通）
  // =============================================

  if(rank === "1"){
    total -= 1;
    reasons.push("トップ目 -1");
    coachingComments.push("トップ目は放銃リスクの価値が上がるにゃ。");
  }else if(rank === "4"){
    total += 1;
    reasons.push("4着目 +1");
    coachingComments.push("ラス目は着順上昇の価値が高い。押す材料を探すにゃ。");
  }else if(rank === "3"){
    reasons.push("3着目 ±0");
  }else{
    reasons.push("2着目 ±0");
  }

  // =============================================
  // BLOCK B: 手牌価値（シャンテン数で別軸評価）
  // =============================================

  // --- テンパイ評価 ---
  if(isTenpai){
    // テンパイはそれ自体が強い（和了抽選に入っている）
    total += 5;
    reasons.push("テンパイ +5");
    expectedMemos.push("テンパイは1シャンテン以下と別物にゃ。和了の抽選に入っている。");

    // テンパイ形
    if(isRyanmen){
      total += 2;
      reasons.push("両面テンパイ +2");
      expectedMemos.push("両面は低打点でも押し有利になりやすいにゃ。相手の高打点を潰す価値もある。");
    }else{
      // 愚形テンパイ
      total -= 1;
      reasons.push("愚形テンパイ -1");
      expectedMemos.push("愚形は打点・残り筋が押しの根拠になるにゃ。低打点愚形は慎重に。");
    }

    // テンパイ時の打点（満貫が見えるかを中心に）
    if(isHaneman){
      total += 3;
      reasons.push("跳満以上 +3");
      expectedMemos.push("跳満以上は迷わず押す根拠になるにゃ。");
    }else if(isMangan){
      total += 2;
      reasons.push("満貫 +2");
      expectedMemos.push("満貫以上は放銃リスクを背負う価値が出やすいにゃ。");
    }else if(isLow){
      if(isRyanmen){
        // 低打点でも両面テンパイは基本押し（PF-INT-015）
        reasons.push("低打点だが両面テンパイ → 打点補正なし");
        expectedMemos.push("鳴き1000点の両面テンパイでも基本押し有利にゃ。");
      }else{
        total -= 1;
        reasons.push("愚形低打点 -1");
        expectedMemos.push("愚形かつ低打点はかなり押す根拠が弱くなるにゃ。");
      }
    }else{
      // middle (3900〜5200)
      total += 1;
      reasons.push("中打点 +1");
    }

    // 巡目：テンパイは終盤でも基本押し寄りだが、終盤愚形低打点は例外
    if(round === "early"){
      total += 1;
      reasons.push("序盤テンパイ +1");
    }else if(round === "late"){
      if(!isRyanmen && isLow){
        total -= 1;
        reasons.push("終盤・愚形低打点テンパイ -1");
        expectedMemos.push("終盤の愚形低打点テンパイは和了率も低い。無理押し注意にゃ。");
      }else{
        reasons.push("終盤テンパイ（基本押し） ±0");
      }
    }

  // --- 1シャンテン評価 ---
  }else if(isOne){
    // 1シャンテンは基本不利（相手は1枚、自分は2枚必要）
    // ベースは -1（不利な抽選）
    total -= 1;
    reasons.push("1シャンテン（基本不利） -1");
    expectedMemos.push("1シャンテンは相手より1段階多く引く必要がある不利な抽選にゃ。");

    // 形スコア（受け入れ・最終形）
    if(iishantenShape === "complete"){
      total += 3;
      reasons.push("完全1シャンテン +3");
      expectedMemos.push("完全1シャンテンは受け入れが最も広い形にゃ。");
    }else if(iishantenShape === "kuttsuki"){
      total += 3;
      reasons.push("くっつき良形 +3");
      expectedMemos.push("浮き牌のくっつきは受け入れが非常に広い形にゃ。");
    }else if(iishantenShape === "ryanmen2"){
      total += 2;
      reasons.push("両面両面以上 +2");
      expectedMemos.push("1シャンテンで押す最低条件は両面両面以上にゃ。ここを基準に判断するにゃ。");
    }else if(iishantenShape === "ryankan"){
      total += 0;
      reasons.push("リャンカン（最終愚形リスク） ±0");
      expectedMemos.push("受け入れは広くても最終愚形率が高い形にゃ。打点で補えるか確認するにゃ。");
    }else if(iishantenShape === "gukei"){
      total -= 1;
      reasons.push("愚形含み1シャンテン -1");
      expectedMemos.push("愚形含み1シャンテンは押しすぎ注意にゃ。打点・巡目が揃わないと苦しい。");
    }else{
      // gukeiStrong
      total -= 2;
      reasons.push("愚形濃厚1シャンテン -2");
      expectedMemos.push("最終が愚形濃厚の1シャンテンはかなり厳しい条件にゃ。");
    }

    // 打点スコア（1シャンテンはリーチ込み3翻以上が押す基準）
    if(isHaneman){
      total += 3;
      reasons.push("跳満以上 +3");
      expectedMemos.push("1シャンテンでも跳満以上なら積極的に押す根拠があるにゃ。");
    }else if(isMangan){
      total += 2;
      reasons.push("満貫 +2");
      expectedMemos.push("1シャンテンでも満貫が見えるなら押す価値が出てくるにゃ。");
    }else if(isLow){
      total -= 2;
      reasons.push("低打点1シャンテン -2");
      expectedMemos.push("リーチ込み3翻未満の1シャンテンは押す根拠がかなり薄いにゃ。");
    }else{
      // middle (3900〜5200) ← 白鳥翔「リーチ込み3翻以上が基準」より、満貫未満中打点は不利寄り
      total -= 1;
      reasons.push("中打点1シャンテン -1");
      expectedMemos.push("満貫未満の1シャンテンは押す根拠がやや薄いにゃ。形・巡目が揃わないと苦しい。");
    }

    // 巡目スコア（1シャンテンは巡目の影響が大きい）
    if(round === "early"){
      total += 2;
      reasons.push("序盤1シャンテン +2");
      expectedMemos.push("序盤の1シャンテンは押し価値が高い。自分の和了率がまだ残っているにゃ。");
    }else if(round === "middle"){
      total += 0;
      reasons.push("中盤1シャンテン ±0");
    }else{
      // late
      total -= 2;
      reasons.push("終盤1シャンテン -2");
      expectedMemos.push("終盤の1シャンテンは自分の和了率が大幅に低下するにゃ。オリ価値が高まる。");
    }

  // --- 2シャンテン以下評価 ---
  }else{
    // 基本的に押し返し期待値がない
    if(shanten === "two"){
      total -= 4;
      reasons.push("2シャンテン -4");
      expectedMemos.push("2シャンテンは無筋を複数本押す前提。放銃抽選を複数回受けることになるにゃ。");
    }else{
      total -= 6;
      reasons.push("3シャンテン以上 -6");
      expectedMemos.push("3シャンテン以上での押しは期待値がかなり低いにゃ。");
    }

    // 形は軽く見る（2シャンテン以下では形よりシャンテン数が支配的）
    if(shape === "good"){
      total += 1;
      reasons.push("形良い +1");
    }

    // 打点（2シャンテン以下はよほど高くないと押せない）
    if(isHaneman){
      total += 2;
      reasons.push("跳満以上 +2");
    }else if(isMangan){
      total += 1;
      reasons.push("満貫 +1");
      expectedMemos.push("2シャンテン以下でも満貫が確実なら多少押せる場面があるにゃ。");
    }else if(isLow){
      total -= 1;
      reasons.push("低打点 -1");
    }
    // middle(3900〜5200)は補正なし

    // 巡目
    if(round === "early"){
      total += 1;
      reasons.push("序盤 +1");
    }else if(round === "late"){
      total -= 1;
      reasons.push("終盤 -1");
    }
  }

  // =============================================
  // BLOCK C: 脅威評価（常に攻撃あり前提）
  // =============================================

  if(threat === "riichi"){
    total -= 2;
    reasons.push("リーチ -2");
  }else if(threat === "parent"){
    total -= 4;
    reasons.push("親リーチ -4");
    coachingComments.push("親リーチは打点・放銃点ともに重い。押す根拠が強くないとオリ有利にゃ。");
  }else{
    // 高そうな仕掛け
    total -= 1;
    reasons.push("高そうな仕掛け -1");
  }

  // =============================================
  // BLOCK D: 危険度
  // =============================================

    // 切る牌の危険度（4段階）
    if(riskLevel === "okay"){
      total += 1;
      reasons.push("現物・筋 +1");
    }else if(isSafe19){
      total -= 2;
      reasons.push("無筋（1・9・字牌周辺） -2");
      expectedMemos.push("1・9周辺は両面待ちに刺さる形が少なく比較的通りやすいにゃ。");
    }else if(isDanger){
      total -= 3;
      reasons.push("無筋（2・3・7・8） -3");
      expectedMemos.push("中間牌周辺は両面・カンチャン両方に刺さる可能性があるにゃ。");
    }else{
      // verydanger: 無筋4・5・6・またぎ
      total -= 5;
      reasons.push("無筋（4・5・6・またぎ） -5");
      expectedMemos.push("4・5・6と筋またぎは最も放銃率が高い牌にゃ。相当な根拠が必要。");
    }

    // 残り筋（リーチ系かつ無筋の時のみ有効）
    const sujiWeight = (isTenpai && isMangan) ? 0 : 1;
    if(isRiichi && isAnyDanger && sujiWeight > 0){
      if(suji === "many"){
        if(round === "early"){
          total += 2;
          reasons.push("序盤リーチ（読みづらい）＋残り筋多い +2");
          expectedMemos.push("序盤の読みづらいリーチは残り筋カウントを重視するにゃ。");
        }else{
          total += 1;
          reasons.push("残り筋多い +1");
        }
      }else if(suji === "few"){
        total -= 2;
        reasons.push("残り筋少ない -2");
        expectedMemos.push("残り筋が少ない時、同じ無筋でも実質危険度が跳ね上がるにゃ。");
      }else{
        reasons.push("残り筋普通 ±0");
      }
    }else if(isRiichi && isAnyDanger && sujiWeight === 0){
      reasons.push("満貫テンパイのため残り筋比重省略");
    }

    // 安牌量（Knowledge: 安牌なし=押しにはしない）
    if(safe === "enough"){
      if(!isTenpai){
        total -= 1;
        reasons.push("安牌十分：引き選択しやすい -1");
        coachingComments.push("安牌があるなら、まずそちらを使う選択肢を持つにゃ。");
      }else{
        reasons.push("安牌十分・テンパイ ±0");
      }
    }else if(safe === "none"){
      if(isTenpai){
        total += 1;
        reasons.push("安牌ほぼなし＋テンパイ +1");
        expectedMemos.push("テンパイで安牌なしなら押し寄りにゃ。");
      }else{
        reasons.push("安牌ほぼなし・テンパイ以外 ±0");
        expectedMemos.push("安牌がない＝押しではないにゃ。手牌価値で判断するにゃ。");
        if(isTwoPlus){
          coachingComments.push("安牌がなくても遠い手からの無筋は無駄押しになりやすいにゃ。苦しいオリも一手にゃ。");
        }
      }
    }

    // 副露対応222（PF-INT-013）
    if(isOpen){
      if(openCount === "two" && (round === "middle" || round === "late") && isTwoPlus){
        total -= 3;
        reasons.push("副露対応222（2副露・中盤以降・自分遠い） -3");
        expectedMemos.push("2フーロ・2段目・自分2シャンテン以上。無筋はかなり損にゃ。");
      }else if(openCount === "three" && !isTenpai){
        total -= 3;
        reasons.push("3副露以上＋ノーテン -3");
        expectedMemos.push("3副露はほぼテンパイ。ノーテンからの無筋は重いにゃ。");
      }else if(openCount === "two" && isTenpai){
        total -= 1;
        reasons.push("2副露仕掛け・テンパイ時 -1");
      }else if(openCount === "one" && round === "late" && isTwoPlus){
        total -= 1;
        reasons.push("1副露＋終盤＋遠い手 -1");
      }
    }

    // 第2攻撃者（DL-017）
    if(secondAttacker === "parent"){
      total -= 2;
      reasons.push("第2攻撃者：親が押し -2");
      expectedMemos.push("リーチ者の現物でも押している親には危ない牌があるにゃ。");
    }else if(secondAttacker === "child"){
      total -= 1;
      reasons.push("第2攻撃者：子が押し -1");
    }

    // 開拓プッシュ（PF-INT-014）
    if(isAnyDanger && pushTile === "kaitaku"){
      total += 1;
      reasons.push("通ると安全牌が増える +1");
      expectedMemos.push("どうせ押すなら通った後に安全牌が増える牌からにゃ。");
    }else if(pushTile === "blocked"){
      total -= 1;
      reasons.push("通っても次で詰まる -1");
      expectedMemos.push("今押したとしても次の牌で詰まりやすい形にゃ。");
    }

  // =============================================
  // BLOCK E: 判定変換（8段階）
  // =============================================

  let judgement = "";
  let risk = "";

  if(total >= 10){
    judgement = "🔥 かなり押し";
    risk = "何枚でも";
    coachingComments.push("期待値が大きく押し寄り。追いかけても全ツしても良いにゃ。");
  }else if(total >= 7){
    judgement = "😼 押し";
    risk = "3枚程度まで";
    coachingComments.push("押し有利。危険牌でも数枚は押せる根拠があるにゃ。");
  }else if(total >= 4){
    judgement = "🐾 やや押し";
    risk = "1〜2枚";
    coachingComments.push("やや押し。無筋連打ではなく、押す牌を選ぶにゃ。");
  }else if(total >= 2){
    judgement = "🐱 微押し";
    risk = "1枚まで";
    coachingComments.push("微押し。1枚押せる根拠がある程度。次の状況で再判断するにゃ。");
  }else if(total >= -1){
    judgement = "🤔 微降り";
    risk = "0〜1枚";
    coachingComments.push("微降り。通りそうな牌があれば押せるが、無理に押さなくてよいにゃ。");
  }else if(total >= -3){
    judgement = "🙀 降り寄り";
    risk = "0枚";
    coachingComments.push("降り寄り。安全牌を優先して使いながら回るにゃ。");
  }else if(total >= -5){
    judgement = "🚪 降り";
    risk = "0枚";
    coachingComments.push("降り有利。原則ベタオリの方向で手を組み直すにゃ。");
  }else{
    judgement = "🚪 ベタオリ";
    risk = "0枚";
    coachingComments.push("押し返しの期待値がほぼない。ベタオリを選ぶにゃ。");
  }

  // =============================================
  // BLOCK F: 警告メッセージ
  // =============================================

  // 押し不足警告（降りすぎ注意）
  if(isTenpai && !isLow && threat !== "parent" && !isVeryDanger && total >= 2){
    pushWarning = "押し不足注意：この条件は降りすぎると長期期待値を落としやすいにゃ。";
  }
  // 両面テンパイ押し不足警告（低打点でも）
  if(isRyanmen && threat !== "parent" && !isVeryDanger && total >= 0){
    pushWarning = "両面テンパイ押し不足：低打点でも両面は押し有利になりやすいにゃ。";
  }
  // 安牌なし=押しではない警告
  if(!isTenpai && safe === "none"){
    pushWarning = "安牌がない＝押しではないにゃ。遠い手からの無筋は無駄押しになりやすいにゃ。";
  }

  applyBattleResult({
    judgement: judgement,
    risk: risk,
    total: total,
    reasons: reasons,
    expectedMemos: expectedMemos,
    coachingComments: coachingComments,
    pushWarning: pushWarning,
    logicVersion: "Awaken v3.0"
  });

  updateDeveloperPanel();
}

function applyBattleResult(result){
  window.latestBattleResult = result;

  document.getElementById("battle-judge").innerText = result.judgement;
  document.getElementById("battle-risk").innerText = result.risk;
  document.getElementById("battle-score").innerText = result.total;
  document.getElementById("battle-reason").innerHTML = "<b>理由：</b>" + result.reasons.join(" / ");
}

function updateDeveloperPanel(){
  const panel = document.getElementById("developer-mode-panel");
  if(!panel) return;
  if(!document.body.classList.contains("developer-mode")) return;

  const result = window.latestBattleResult;
  if(!result) return;

  const memoHtml = (result.expectedMemos || []).slice(0, 4).map(memo => "<li>" + memo + "</li>").join("");
  const commentHtml = (result.coachingComments || []).slice(0, 3).map(comment => "<li>" + comment + "</li>").join("");
  const warningHtml = result.pushWarning ? `<div class="developer-warning">⚠️ ${result.pushWarning}</div>` : "";
  const logicVersion = result.logicVersion || "観察モード";

  panel.innerHTML = `
    <div class="developer-title">🐾 開発者モード</div>
    <div class="developer-text">魂天レビュー版ロジックで判定中にゃ。</div>
    <div class="developer-badge">現在：${logicVersion}</div>
    <div class="developer-text"><b>期待値メモ</b></div>
    <ul class="developer-list">${memoHtml}</ul>
    <div class="developer-text"><b>打ち筋矯正コメント</b></div>
    <ul class="developer-list">${commentHtml}</ul>
    ${warningHtml}
    <button class="developer-close" onclick="hideDeveloperMode()">
閉じる
</button>
  `;
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
  calcBattle();
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

    calcBattle();

}
