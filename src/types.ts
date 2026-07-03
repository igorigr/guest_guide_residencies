export type Lang = 'pt' | 'en' | 'es';

export type LocalizedString = Record<Lang, string>;

export type TransportType = 'metro' | 'bus' | 'airport' | 'station' | 'walk' | 'car';

export type Transport = {
  type: TransportType;
  name: string;
  line?: string;
  walkTime?: string;
  description: LocalizedString;
};

export type ApartmentNote = {
  icon: 'wifi' | 'ac' | 'shower' | 'window' | 'trash' | 'tv' | 'kitchen' | 'key' | 'pool' | 'gym' | 'laundry' | 'door';
  title: LocalizedString;
  description: LocalizedString;
};

export type TipCategory =
  | 'mercado'
  | 'padaria'
  | 'restaurante'
  | 'oQueFazer'
  | 'cultura'
  | 'lojas'
  | 'farmacia';

export type Tip = {
  category: TipCategory;
  name: string;
  distance: string;
  description: LocalizedString;
  mapsQuery: string;
  /**
   * Optional photo URL of the establishment.
   * If empty, a gradient placeholder with the category icon is shown.
   */
  image?: string;
};

export type Parking = {
  name: string;
  address: string;
  mapsQuery: string;
  info: LocalizedString[];
  checkoutRules: LocalizedString[];
};

export type Apto = {
  slug: string;
  name: string;
  shortName: string;
  hero: {
    image: string;
    welcome: LocalizedString;
    subtitle: LocalizedString;
  };
  location: {
    address: string;
    unit: string;
    city: string;
    state: string;
    country: string;
    mapsQuery: string;
    arrivalSteps: LocalizedString[];
    transports: Transport[];
  };
  schedule: {
    checkIn: string;
    checkOut: string;
    flexibilityNote: LocalizedString;
  };
  apartment: {
    wifi: {
      network: string;
      password: string;
      network5g?: string;
    };
    notes: ApartmentNote[];
  };
  parking?: Parking;
  rules: LocalizedString[];
  tips: Tip[];
  contact: {
    hostName: string;
    hostPhotoInitial: string;
    hostPhone: string;
    whatsappMessage: LocalizedString;
  };
  emergency: {
    police: string;
    samu: string;
    firefighters: string;
  };
  theme?: {
    primary?: string;
    accent?: string;
    background?: string;
  };
};
