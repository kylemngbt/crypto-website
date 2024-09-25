let settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "headers": {}
}

const btc = document.querySelector("#bitcoin");
const eth = document.querySelector("#ethereum");
const doge = document.querySelector("#dogecoin");

