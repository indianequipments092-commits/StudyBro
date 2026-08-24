export type FeatureFlag={key:string;enabled:boolean;rolloutPercent?:number};
export type RemoteAnnouncement={id:string;title:string;message:string;target:"all"|"class_11"|"class_12"|"batch"|"student";startsAt?:string;endsAt?:string;active:boolean};
export type RemoteAppPolicy={maintenance:boolean;minimumVersion?:string;forceUpdate:boolean;downloadsEnabled:boolean;loginEnabled:boolean;};
export type SyncState="idle"|"syncing"|"synced"|"offline"|"error";