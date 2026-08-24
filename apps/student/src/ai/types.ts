export type AIIntent="doubt"|"explain"|"quiz"|"revision";
export type AIRequest={id:string;text:string;subject?:"Physics"|"Chemistry"|"Biology";chapter?:string;topic?:string;intent:AIIntent;imageUri?:string};
export type AIResponse={requestId:string;answer:string;steps:string[];keyTerms:string[];followUps:string[];disclaimer?:string};