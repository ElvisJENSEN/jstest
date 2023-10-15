var body = $response.body;
//var obj = JSON.parse(body);

//obj['data']['isMember'] = 1;
//obj['data']['expireTime'] = "2023-07-12";
// body = JSON.stringify(obj);
$httpClient.get("http://192.168.10.264:20480/api/test", function (error, response, data) {
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        });
console.log(body);
//var body2 = $request.headers;

$done(body);
