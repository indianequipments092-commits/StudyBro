export type ProtectedContentConfig={watermark:ReturnType<typeof import("./watermarkView").createWatermarkPlacement>;secureWindowRecommended:boolean;recordingProtectionBestEffort:boolean};
export function createProtectedContentConfig(data:import("./types").WatermarkData,seed?:number):ProtectedContentConfig{
 return {watermark:require("./watermarkView").createWatermarkPlacement(data,seed),secureWindowRecommended:true,recordingProtectionBestEffort:true};
}