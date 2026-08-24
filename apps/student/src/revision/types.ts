export type RevisionInterval=1|3|7|14|30;
export type RevisionItem={id:string;subject:"Physics"|"Chemistry"|"Biology";chapter:string;topic:string;source:"mistake"|"weak-topic"|"completed";dueAt:string;interval:RevisionInterval;completed:boolean};
export type WeakArea={subject:"Physics"|"Chemistry"|"Biology";chapter:string;topic:string;accuracy:number;mistakes:number};
export type LearningRecommendation={id:string;title:string;subject:"Physics"|"Chemistry"|"Biology";reason:string;priority:"high"|"medium"|"low";action:"revision"|"practice"|"continue"};