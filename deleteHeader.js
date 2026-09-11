delete $request.headers['If-None-Match'];
delete $request.headers['if-none-match'];
delete $request.headers['If-Modified-Since'];
delete $request.headers['if-modified-since'];
$done({});
