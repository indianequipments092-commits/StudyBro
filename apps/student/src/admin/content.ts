import type {ContentItem,ContentStatus} from "./types";
export function sortContent(items:ContentItem[]):ContentItem[]{return [...items].sort((a,b)=>a.order-b.order);}
export function setContentStatus(item:ContentItem,status:ContentStatus):ContentItem{return {...item,status};}
export function scheduleContent(item:ContentItem,publishAt:string):ContentItem{return {...item,status:"scheduled",publishAt};}
export function reorderContent(items:ContentItem[],from:number,to:number):ContentItem[]{const next=[...items];const [moved]=next.splice(from,1);if(!moved)return next;next.splice(Math.max(0,Math.min(to,next.length)),0,moved);return next.map((item,index)=>({...item,order:index}));}