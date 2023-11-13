// カウントの初期値
let count = 0;

// カウントの要素を取得
const counterElement = document.getElementById('counter');
// カウントボタンの要素を取得
const clickButton = document.getElementById('clickButton');

// ページが読み込まれたときにセーブデータをロードする
window.onload = function() {
    loadSaveData();
};

// ボタンがクリックされたときの処理
clickButton.addEventListener('click', function() {
    count++;
    counterElement.textContent = count;
    saveData();
});

// セーブデータをCookieに保存する関数
function saveData() {
    document.cookie = `count=${count}; expires=${new Date(2023, 11, 31).toUTCString()}; path=/`;
}

// Cookieからセーブデータを読み込む関数
function loadSaveData() {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('count='))
        .split('=')[1];

    if (cookieValue) {
        count = parseInt(cookieValue);
        counterElement.textContent = count;
    }
}
