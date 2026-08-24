import type {WatermarkData} from "./types";
export function maskMobile(mobile:string):string{
 const clean=mobile.replace(/\D/g,"");
 if(clean.length<4)return "••••";
 return "••••••"+clean.slice(-4);
}
export function buildWatermark(data:WatermarkData):string{
 const mobile=data.mobileMasked?data.mobileMasked:undefined;
 return [data.appLabel,data.studentName,data.studentId,mobile].filter(Boolean).join(" • ");
}