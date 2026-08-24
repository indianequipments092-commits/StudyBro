import type {RemoteAppPolicy} from "./types";
export function isMaintenanceBlocked(policy:RemoteAppPolicy):boolean{return policy.maintenance;}
export function isVersionBlocked(current:string,min?:string):boolean{
 if(!min)return false;
 const a=current.split(".").map(Number),b=min.split(".").map(Number);
 for(let i=0;i<Math.max(a.length,b.length);i++){const x=a[i]||0,y=b[i]||0;if(x!==y)return x<y;}
 return false;
}
export function canLogin(policy:RemoteAppPolicy):boolean{return policy.loginEnabled&&!policy.maintenance;}
export function canDownload(policy:RemoteAppPolicy):boolean{return policy.downloadsEnabled&&!policy.maintenance;}
export function requiresForceUpdate(policy:RemoteAppPolicy,current:string):boolean{return policy.forceUpdate&&isVersionBlocked(current,policy.minimumVersion);}
