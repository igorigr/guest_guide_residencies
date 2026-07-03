import type { Lang, LocalizedString } from '../types';

export const languages = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang: Lang = 'pt';

export const ui = {
  pt: {
    'nav.local': 'Local',
    'nav.checkin': 'Check-in',
    'nav.apto': 'Apto',
    'nav.parking': 'Estacionamento',
    'nav.rules': 'Regras',
    'nav.tips': 'Dicas',
    'nav.contact': 'Contato',

    'hero.cta': 'Explorar o Guia',
    'hero.badge': 'Guest Guide',
    'hero.scroll': 'Deslize para baixo',

    'arrival.title': 'Como Chegar',
    'arrival.openMaps': 'Abrir no Google Maps',
    'arrival.steps': 'Passo a passo',
    'arrival.howToReach': 'Como chegar?',
    'arrival.howToReachDesc':
      'Os tempos são estimativas considerando o deslocamento total até o apartamento e podem variar conforme dia, trânsito e horário.',
    'arrival.airports': 'Aeroportos',
    'arrival.stations': 'Rodoviárias / Terminais',
    'arrival.publicTransport': 'Transporte Público',

    'checkin.title': 'Check-in e Check-out',
    'checkin.in': 'Check-in',
    'checkin.out': 'Check-out',
    'checkin.from': 'A partir das',
    'checkin.until': 'Até às',
    'checkin.flex': 'Precisa de flexibilidade?',
    'checkin.flexCta': 'Falar no WhatsApp',

    'apt.title': 'O Apartamento',
    'apt.subtitle': 'Pequenos cuidados para deixar tudo perfeito durante sua estadia.',
    'apt.connectivity': 'Conectividade',
    'apt.wifi.fast': 'Mais Rápida (5G)',
    'apt.wifi.network': 'Rede',
    'apt.wifi.password': 'Senha',
    'apt.wifi.copy': 'Copiar senha',
    'apt.wifi.copied': 'Copiado!',

    'parking.title': 'Estacionamento',
    'parking.location': 'Localização',
    'parking.openMaps': 'Abrir no Google Maps',
    'parking.checkoutRules': 'Regras no check-out',

    'rules.title': 'Regras da Casa',

    'tips.title': 'Dicas',
    'tips.all': 'Todos',
    'tips.cat.mercado': 'Mercado',
    'tips.cat.padaria': 'Padaria',
    'tips.cat.restaurante': 'Restaurante',
    'tips.cat.oQueFazer': 'O que fazer',
    'tips.cat.cultura': 'Cultura',
    'tips.cat.lojas': 'Lojas',
    'tips.cat.farmacia': 'Farmácia',

    'contact.title': 'Contato e Emergência',
    'contact.host': 'Anfitrião',
    'contact.whatsapp': 'Chamar no WhatsApp',
    'contact.emergency': 'Protocolos de Emergência',
    'contact.police': 'Polícia',
    'contact.samu': 'SAMU',
    'contact.firefighters': 'Bombeiros',

    'footer.madeWith': 'Feito com carinho para sua estadia.',

    'index.title': 'Guias do Hóspede',
    'index.subtitle': 'Selecione o apartamento para ver o guia.',
  },
  en: {
    'nav.local': 'Location',
    'nav.checkin': 'Check-in',
    'nav.apto': 'Apartment',
    'nav.parking': 'Parking',
    'nav.rules': 'Rules',
    'nav.tips': 'Tips',
    'nav.contact': 'Contact',

    'hero.cta': 'Explore the Guide',
    'hero.badge': 'Guest Guide',
    'hero.scroll': 'Scroll down',

    'arrival.title': 'How to Get There',
    'arrival.openMaps': 'Open in Google Maps',
    'arrival.steps': 'Step by step',
    'arrival.howToReach': 'How to reach?',
    'arrival.howToReachDesc':
      'Times are estimates considering the total commute and may vary depending on the day, traffic and hour.',
    'arrival.airports': 'Airports',
    'arrival.stations': 'Bus stations / Terminals',
    'arrival.publicTransport': 'Public Transport',

    'checkin.title': 'Check-in and Check-out',
    'checkin.in': 'Check-in',
    'checkin.out': 'Check-out',
    'checkin.from': 'From',
    'checkin.until': 'Until',
    'checkin.flex': 'Need flexibility?',
    'checkin.flexCta': 'Message on WhatsApp',

    'apt.title': 'The Apartment',
    'apt.subtitle': 'Small details to make your stay perfect.',
    'apt.connectivity': 'Connectivity',
    'apt.wifi.fast': 'Fastest (5G)',
    'apt.wifi.network': 'Network',
    'apt.wifi.password': 'Password',
    'apt.wifi.copy': 'Copy password',
    'apt.wifi.copied': 'Copied!',

    'parking.title': 'Parking',
    'parking.location': 'Location',
    'parking.openMaps': 'Open in Google Maps',
    'parking.checkoutRules': 'Check-out rules',

    'rules.title': 'House Rules',

    'tips.title': 'Tips',
    'tips.all': 'All',
    'tips.cat.mercado': 'Grocery',
    'tips.cat.padaria': 'Bakery',
    'tips.cat.restaurante': 'Restaurant',
    'tips.cat.oQueFazer': 'Things to do',
    'tips.cat.cultura': 'Culture',
    'tips.cat.lojas': 'Shopping',
    'tips.cat.farmacia': 'Pharmacy',

    'contact.title': 'Contact and Emergency',
    'contact.host': 'Host',
    'contact.whatsapp': 'Open WhatsApp',
    'contact.emergency': 'Emergency Numbers',
    'contact.police': 'Police',
    'contact.samu': 'Ambulance',
    'contact.firefighters': 'Firefighters',

    'footer.madeWith': 'Made with care for your stay.',

    'index.title': 'Guest Guides',
    'index.subtitle': 'Select an apartment to view its guide.',
  },
  es: {
    'nav.local': 'Lugar',
    'nav.checkin': 'Check-in',
    'nav.apto': 'Apto',
    'nav.parking': 'Estacionamiento',
    'nav.rules': 'Reglas',
    'nav.tips': 'Tips',
    'nav.contact': 'Contacto',

    'hero.cta': 'Explorar la Guía',
    'hero.badge': 'Guest Guide',
    'hero.scroll': 'Desliza hacia abajo',

    'arrival.title': 'Cómo Llegar',
    'arrival.openMaps': 'Abrir en Google Maps',
    'arrival.steps': 'Paso a paso',
    'arrival.howToReach': '¿Cómo llegar?',
    'arrival.howToReachDesc':
      'Los tiempos son estimaciones del trayecto total al apartamento y pueden variar según el día, tráfico y hora.',
    'arrival.airports': 'Aeropuertos',
    'arrival.stations': 'Estaciones / Terminales',
    'arrival.publicTransport': 'Transporte Público',

    'checkin.title': 'Check-in y Check-out',
    'checkin.in': 'Check-in',
    'checkin.out': 'Check-out',
    'checkin.from': 'A partir de',
    'checkin.until': 'Hasta',
    'checkin.flex': '¿Necesitas flexibilidad?',
    'checkin.flexCta': 'Hablar por WhatsApp',

    'apt.title': 'El Apartamento',
    'apt.subtitle': 'Pequeños detalles para que tu estancia sea perfecta.',
    'apt.connectivity': 'Conectividad',
    'apt.wifi.fast': 'Más Rápida (5G)',
    'apt.wifi.network': 'Red',
    'apt.wifi.password': 'Contraseña',
    'apt.wifi.copy': 'Copiar contraseña',
    'apt.wifi.copied': '¡Copiada!',

    'parking.title': 'Estacionamiento',
    'parking.location': 'Ubicación',
    'parking.openMaps': 'Abrir en Google Maps',
    'parking.checkoutRules': 'Reglas al check-out',

    'rules.title': 'Reglas de la Casa',

    'tips.title': 'Tips',
    'tips.all': 'Todos',
    'tips.cat.mercado': 'Mercado',
    'tips.cat.padaria': 'Panadería',
    'tips.cat.restaurante': 'Restaurante',
    'tips.cat.oQueFazer': 'Qué hacer',
    'tips.cat.cultura': 'Cultura',
    'tips.cat.lojas': 'Tiendas',
    'tips.cat.farmacia': 'Farmacia',

    'contact.title': 'Contacto y Emergencia',
    'contact.host': 'Anfitrión',
    'contact.whatsapp': 'Abrir WhatsApp',
    'contact.emergency': 'Números de Emergencia',
    'contact.police': 'Policía',
    'contact.samu': 'Ambulancia',
    'contact.firefighters': 'Bomberos',

    'footer.madeWith': 'Hecho con cariño para tu estancia.',

    'index.title': 'Guías del Huésped',
    'index.subtitle': 'Selecciona un apartamento para ver su guía.',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['pt'];

export function uiAll(key: UIKey): LocalizedString {
  return {
    pt: ui.pt[key],
    en: ui.en[key],
    es: ui.es[key],
  };
}
