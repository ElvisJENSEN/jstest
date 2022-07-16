var body = $response.body;
var obj = JSON.parse(body);

obj['data']['isMember'] = 1;
obj['data']['expireTime'] = "2023-07-12";
body = JSON.stringify(obj);

console.log(body);

$done(body);
