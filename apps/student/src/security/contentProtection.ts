import type {WatermarkData} from "./types";
import {createWatermarkPlacement} from "./watermarkView";

export type ProtectedContentConfig={
  watermark:ReturnType<typeof createWatermarkPlacement>;
  secureWindowRecommended:boolean;
  recordingProtectionBestEffort:boolean;
};

export function createProtectedContentConfig(
  data:WatermarkData,
  seed?:number
):ProtectedContentConfig{
  return {
    watermark:createWatermarkPlacement(data,seed),
    secureWindowRecommended:true,
    recordingProtectionBestEffort:true
  };
}
