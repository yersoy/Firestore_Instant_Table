var lodash=require("./wrapperLodash");function chain(a){var r=lodash(a);return r.__chain__=!0,r}module.exports=chain;