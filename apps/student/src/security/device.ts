import type {SecuritySession,DeviceState} from "./types";
export function validateDeviceSession(session:SecuritySession,expectedDeviceId:string):boolean{
 return session.state==="active"&&session.deviceId===expectedDeviceId&&(!session.expiresAt||Date.parse(session.expiresAt)>Date.now());
}
export function nextDeviceState(state:DeviceState,event:"register"|"approve"|"block"|"unblock"|"expire"):DeviceState{
 if(event==="block")return "blocked";
 if(event==="unblock"&&state==="blocked")return "active";
 if(event==="register"&&state==="unregistered")return "pending";
 if(event==="approve"&&state==="pending")return "active";
 if(event==="expire"&&state==="active")return "pending";
 return state;
}