var arrayFilter=require("./_arrayFilter"),arrayMap=require("./_arrayMap"),baseProperty=require("./_baseProperty"),baseTimes=require("./_baseTimes"),isArrayLikeObject=require("./isArrayLikeObject"),nativeMax=Math.max;function unzip(e){if(!e||!e.length)return[];var a=0;return e=arrayFilter(e,function(r){if(isArrayLikeObject(r))return a=nativeMax(r.length,a),!0}),baseTimes(a,function(r){return arrayMap(e,baseProperty(r))})}module.exports=unzip;