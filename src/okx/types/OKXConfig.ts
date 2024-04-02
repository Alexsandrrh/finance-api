export interface OKXConfig {
  apiKey: string;
  secretKey: string;
  passphrase: string;
  isDemo?: boolean;
  version?: string | 'v5';
}
