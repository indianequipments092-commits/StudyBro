import type {AIRequest,AIResponse} from "./types";
export function buildTeacherResponse(request:AIRequest):AIResponse{
 const context=[request.subject,request.chapter,request.topic].filter(Boolean).join(" • ");
 const prefix=context?"Context: "+context+". ":"";
 const answer=request.intent==="quiz"?"Let's practice this topic with a short NEET-style question.":request.intent==="revision"?"Let's revise the key concepts of this topic in a focused way.":request.intent==="explain"?"Let's break the concept into simple steps before moving to NEET-level details.":"Let's solve the doubt step by step.";
 return {requestId:request.id,answer:prefix+answer,steps:["Identify the concept","Explain the core idea","Apply it to the question","Check the final result"],keyTerms:[request.topic||"Concept","NEET terminology"],followUps:["Explain this in simpler Gujarati","Give me a NEET-level question","Quiz me on this topic"]};
}