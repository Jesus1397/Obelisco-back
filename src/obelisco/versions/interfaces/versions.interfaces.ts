export interface ObeliscoVersion {
  version?: string;
  date?: string;
  pullRequest?: string;
  changes?: string[];
  other?: ObeliscoVersion[];
}
