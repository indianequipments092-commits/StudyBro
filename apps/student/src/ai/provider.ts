import type {AIRequest,AIResponse} from "./types";
export interface AIProvider { generate(request:AIRequest):Promise<AIResponse>; }
export type AIProviderConfig={endpoint:string;apiKey?:string;model?:string};
export function createHttpAIProvider(config:AIProviderConfig):AIProvider{
 return {async generate(request){
  const response=await fetch(config.endpoint,{method:"POST",headers:{"Content-Type":"application/json",...(config.apiKey?{Authorization:"Bearer "+config.apiKey}:{})},body:JSON.stringify({model:config.model||"default",request})});
  if(!response.ok) throw new Error("AI provider request failed: "+response.status);
  return await response.json() as AIResponse;
 }};
}