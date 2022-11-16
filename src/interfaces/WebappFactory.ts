interface WebappFactoryAds {
  showInterstitialAd(id: string): Promise<void>;
  showRewardAd(id: string): Promise<void>;
}

export interface Contact {
  name: string;
  id: string;
  phoneNumbers: {
    number: string;
    id: string;
    label: string;
    isPrimary: boolean;
  }[];
}

interface WebappFactory {
  ads: WebappFactoryAds;
  getVersion(): Promise<string>;
  getContacts(): Promise<Contact[]>;
  getToken(): Promise<string>;
  getFcmToken(): Promise<string>;
  getLocation(): Promise<{
    latitude: number;
    longitude: number;
  }>;
  playSound(path: string): Promise<void>;
  openUrl(url: string): Promise<any>;
  canOpenUrl(url: string): Promise<boolean>;
}

export default WebappFactory;
