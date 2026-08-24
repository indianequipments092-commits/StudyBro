export type AdminRole="super_admin"|"content_admin"|"question_admin"|"support_admin"|"analytics_admin";
export type ContentStatus="draft"|"published"|"hidden"|"scheduled";
export type ContentItem={id:string;title:string;type:"pdf"|"video"|"dpp"|"pyq"|"test"|"image";classLevel:"11th"|"12th";subject:"Physics"|"Chemistry"|"Biology";chapterId:string;status:ContentStatus;publishAt?:string;order:number;};
export type Announcement={id:string;title:string;message:string;target:"all"|"class_11"|"class_12"|"batch"|"student";startsAt?:string;endsAt?:string;active:boolean;};