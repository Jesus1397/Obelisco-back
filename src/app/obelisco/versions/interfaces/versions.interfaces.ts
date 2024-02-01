export interface ObeliscoVersion {
  version?: string;
  date?: string;
  pullRequest?: string;
  changes?: ObeliscoChanges[];
  other?: ObeliscoVersion[];
}
export interface ObeliscoChanges {
  component?: string;
  modifications?: string | string[];
  links?: ObeliscoLinks[];
}
export interface ObeliscoLinks {
  title?: string;
  url?: string;
}
