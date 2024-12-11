(function() {
  var goldApiUrl = 'https://www.goldapi.io/api/XAU/USD';
  var goldApiKey = 'goldapi-bq53o1sm4kidana-io';

  $.ajax({
    url: goldApiUrl,
    headers: {
      'x-access-token': goldApiKey
    },
    method: 'GET',
    success: function(response) {
      var goldPrice = response.price;
      // Display the gold price wherever desired in your Shopify store
      $('.gold-price').text('Current gold price: $' + goldPrice);
    },
    error: function() {
      console.log('Error fetching gold price from the GoldAPI.io.');
    }
  });
})();

{23 items
"timestamp":1733961326
"metal":"XAU"
"currency":"INR"
"exchange":"IDC"
"symbol":"FX_IDC:XAUINR"
"prev_close_price":230553.1
"open_price":230506.8
"low_price":230506.8
"high_price":230506.8
"open_time":1733961600
"price":230742.4
"ch":189.3
"chp":0.08
"ask":230752.4
"bid":230742.4
"price_gram_24k":7418.5404
"price_gram_22k":6800.3287
"price_gram_21k":6491.2229
"price_gram_20k":6182.117
"price_gram_18k":5563.9053
"price_gram_16k":4945.6936
"price_gram_14k":4327.4819
"price_gram_10k":3091.0585
}
