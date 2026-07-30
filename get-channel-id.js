const https = require('https');
https.get('https://www.youtube.com/@Yaqub_Alwaliy', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const match = data.match(/\"channelId\":\"(UC[a-zA-Z0-9_-]+)\"/);
    console.log(match ? match[1] : 'Not found');
  });
}).on("error", console.log);
