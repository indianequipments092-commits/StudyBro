import type {AIRequest,AIResponse} from "./types";
import type {AIProvider} from "./provider";
export async function askAITeacher(provider:AIProvider,request:AIRequest):Promise<AIResponse>{
 if(!request.id||!request.text.trim()) throw new Error("A valid AI request is required");
 return provider.generate(request);
}