export type Difficulty="easy"|"medium"|"hard"|"neet"|"neet-tough";
export type PracticeMode="dpp"|"pyq"|"test";
export type Subject="Physics"|"Chemistry"|"Biology";
export type Question={id:string;question:string;options:string[];correctIndex:number;explanation:string;subject:Subject;chapter:string;topic:string;difficulty:Difficulty;year?:number};
export type PracticeConfig={mode:PracticeMode;title:string;questionIds:string[];timeLimitSeconds:number;negativeMarking:number};
export type PracticeResult={correct:number;wrong:number;skipped:number;score:number;accuracy:number;timeSeconds:number;weakTopics:string[]};