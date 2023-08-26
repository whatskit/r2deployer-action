export interface R2Config {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  region: string;
  sourceDir: string;
  destinationDir: string;
}

export interface FileMap {
  [file: string]: string;
}
