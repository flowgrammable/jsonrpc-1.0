
var jsonReqSerializer = function(reqMsg) {
  return {
    id: reqMsg.id,
    method: reqMsg.method,
    params: reqMsg.params
  };
}

var jsonResSerializer = function(resMsg){
  return {
    id: resMsg.id,
    result: resMsg.result || null,
    error: resMsg.error || null
  };
}

var jsonNotifySerializer = function(notMsg){
  return {
    method: notMsg.method,
    params: notMsg.params
  };
}

exports.msgSerializers = {
  jsonReq: jsonReqSerializer,
  jsonRes: jsonResSerializer,
  jsonNot: jsonNotifySerializer
};
     
