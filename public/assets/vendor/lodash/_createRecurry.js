var isLaziable=require("./_isLaziable"),setData=require("./_setData"),setWrapToString=require("./_setWrapToString"),WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64;function createRecurry(A,_,R,e,r,L,a,P,i,t){var G=_&WRAP_CURRY_FLAG;_|=G?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG,(_&=~(G?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG))&WRAP_CURRY_BOUND_FLAG||(_&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG));var W=[A,_,r,G?L:void 0,G?a:void 0,G?void 0:L,G?void 0:a,P,i,t],F=R.apply(void 0,W);return isLaziable(A)&&setData(F,W),F.placeholder=e,setWrapToString(F,A,_)}module.exports=createRecurry;