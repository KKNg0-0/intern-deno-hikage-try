/**
 * ロードが終わったら 「GET /welcome-message」でサーバーにアクセスする
 */
window.onload = async () => {
    const response = await fetch('/home-page');
    document.querySelector('#home-page-title').innerText = await response.text();
}