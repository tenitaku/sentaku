// 衣服のドット絵のデータ
const clothesData = [
  "01110",
  "10101",
  "11111",
  "01010",
  "01010"
];

// 衣服を表示する関数
function displayClothes() {
  const container = document.getElementById("clothes-container");

  // 衣服のドット絵を作成し、コンテナに追加
  for (let i = 0; i < clothesData.length; i++) {
    for (let j = 0; j < clothesData[i].length; j++) {
      const pixel = document.createElement("div");
      pixel.className = "clothes";
      if (clothesData[i][j] === "1") {
        pixel.style.backgroundColor = "black";
      }
      pixel.style.top = (i * 10) + "px";
      pixel.style.left = (j * 10) + "px";
      container.appendChild(pixel);
    }
  }
}

// 衣服を風でゆらす関数
function swayClothes() {
  const clothes = document.getElementsByClassName("clothes");

  // 各衣服の位置をランダムに変更
  for (let i = 0; i < clothes.length; i++) {
    const x = Math.floor(Math.random() * 3) - 1;
    const y = Math.floor(Math.random() * 3) - 1;
    clothes[i].style.transform = `translate(${x}px, ${y}px)`;
  }

  // 一定の間隔で衣服をゆらす
  setTimeout(swayClothes, 500);
}

// ページが読み込まれた時に呼び出す関数
window.onload = function() {
  displayClothes(); // 衣服を表示
  swayClothes(); // 衣服をゆらす
};
