// (function() {
//   var goldApiUrl = 'https://www.goldapi.io/api/XAU/USD';
//   var goldApiKey = 'goldapi-bq53o1sm4kidana-io';

//   $.ajax({
//     url: goldApiUrl,
//     headers: {
//       'x-access-token': goldApiKey
//     },
//     method: 'GET',
//     success: function(response) {
//       var goldPrice = response.price;
//       // Display the gold price wherever desired in your Shopify store
//       $('.gold-price').text('Current gold price: $' + goldPrice);
//     },
//     error: function() {
//       console.log('Error fetching gold price from the GoldAPI.io.');
//     }
//   });
// })();

var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-bq53o1sm4kidana-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));