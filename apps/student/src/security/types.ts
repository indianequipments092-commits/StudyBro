export type DeviceState="unregistered"|"active"|"blocked"|"pending";
export type SecuritySession={userId:string;deviceId:string;sessionId:string;state:DeviceState;expiresAt?:string};
export type WatermarkData={studentName:string;studentId:string;mobileMasked?:string;appLabel:"NSG BRO"};