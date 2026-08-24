import type {WatermarkData} from "./types";
import {buildWatermark} from "./watermark";
export type WatermarkPlacement={x:number;y:number;opacity:number;rotation:number;text:string};
export function createWatermarkPlacement(data:WatermarkData,seed=0):WatermarkPlacement{
 const text=buildWatermark(data);
 const n=Math.abs(Math.sin(seed+1));
 return {x:8+n*64,y:12+(1-n)*70,opacity:0.18,rotation:-18,text};
}