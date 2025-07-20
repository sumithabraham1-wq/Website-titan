// Fetch BTC price and handle form
async function fetchPrice(){
  const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
  const data = await res.json();
  return data.bitcoin.usd;
}

let currentPrice = 0;
const priceInfo = document.getElementById('price-info');
const btcAmount = document.getElementById('btcAmount');
const usdReceive = document.getElementById('usdReceive');

fetchPrice().then(price=>{
  currentPrice = price;
  priceInfo.textContent = 'Current BTC Price: $' + price.toLocaleString();
});

btcAmount.addEventListener('input', ()=>{
  const amt = parseFloat(btcAmount.value) || 0;
  usdReceive.value = (amt * currentPrice).toFixed(2);
});

document.getElementById('sellForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Simulated sale of ' + btcAmount.value + ' BTC for $' + usdReceive.value);
});