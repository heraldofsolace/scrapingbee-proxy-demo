
const scrapingbee = require('scrapingbee');

async function get(url) {
  var client = new scrapingbee.ScrapingBeeClient('<YOUR_API_KEY>');
  var response = await client.get({
    url: url,
    params: {  
         'extract_rules': {"headers": { "selector": "h2", "type": "list" }},
         'own_proxy': '0.tcp.in.ngrok.io:10888',
    },
  })
  return response
}

get('https://www.scrapingbee.com').then(function (response) {
    var decoder = new TextDecoder();
    var text = decoder.decode(response.data);
    console.log(text);
}).catch((e) => {
  console.error(e);
  console.log('A problem occurs : ' + e.response.error)});
