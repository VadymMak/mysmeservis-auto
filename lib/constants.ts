import type {
  NavItem,
  StatItem,
  WhyItem,
  GalleryImage,
  Review,
  ContactItem,
  FaqItem,
  ChatConfig,
  ServiceCategory,
  DaySchedule,
  MenuCategory,
  ImageMap,
  HeroContent,
  ImprintData,
} from './types';
import { t } from './get-ui-text';

// Switch to true when local /images/*.webp files are ready
export const USE_LOCAL_IMAGES = false;

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const HERO: HeroContent = {
  title: 'MYSMESERVIS',
  subtitle: 'Spoľahlivý autoservis v Trenčíne. Opravujeme všetky značky vozidiel — rýchlo, kvalitne a za férové ceny. Výmena oleja, brzdy, geometria, diagnostika a komplexný servis. Zavolajte nám alebo príďte osobne.',
  layout: 'full',
};

// ---------------------------------------------------------------------------
// IMAGES
// ---------------------------------------------------------------------------
export const IMAGES: ImageMap = {
  hero: '/images/hero.webp',
  about: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
  gallery: [
    '/images/gallery-1.webp',
    '/images/gallery-2.webp',
    '/images/gallery-3.webp',
    '/images/gallery-4.webp',
    '/images/gallery-5.webp',
    '/images/gallery-6.webp',
  ],
  logo: '',
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: t().nav.home,     href: '#hero'     },
  { label: t().nav.services, href: '#services' },
  { label: t().nav.reviews,  href: '#reviews'  },
  { label: t().nav.contact,  href: '#contact'  },
];

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export const STATS: StatItem[] = [];

// ---------------------------------------------------------------------------
// WHY US
// ---------------------------------------------------------------------------
export const WHY_ITEMS: WhyItem[] = [
  { id: '1', icon: '⭐', title: t().whyUs.q1Title, description: t().whyUs.q1Desc },
  { id: '2', icon: '⚡', title: t().whyUs.q2Title, description: t().whyUs.q2Desc },
  { id: '3', icon: '💰', title: t().whyUs.q3Title, description: t().whyUs.q3Desc },
  { id: '4', icon: '🛡️', title: t().whyUs.q4Title, description: t().whyUs.q4Desc },
];

// ---------------------------------------------------------------------------
// SERVICE CATEGORIES (templateType: 'services')
// ---------------------------------------------------------------------------
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: '1',
    name: 'Bežná údržba a servis',
    items: [
      {
        id: '1-1',
        name: 'Výmena motorového oleja',
        description: 'Výmena oleja a olejového filtra pre všetky typy motorov. Predĺžte životnosť vášho motora.',
        price: 'Na dopyt',
        icon: '🛢️',
      },
      {
        id: '1-2',
        name: 'Servis bŕzd',
        description: 'Kontrola, čistenie a výmena brzdových platničiek, kotúčov a brzdovej kvapaliny.',
        price: 'Na dopyt',
        icon: '🔧',
      },
      {
        id: '1-3',
        name: 'Výmena filtrov',
        description: 'Výmena vzduchového, palivového a kabínového filtra pre optimálny výkon vozidla.',
        price: 'Na dopyt',
        icon: '🔩',
      },
    ],
  },
  {
    id: '2',
    name: 'Diagnostika a elektrika',
    items: [
      {
        id: '2-1',
        name: 'Počítačová diagnostika',
        description: 'Profesionálna diagnostika chybových kódov a elektroniky vozidla pomocou moderného vybavenia.',
        price: 'Na dopyt',
        icon: '💻',
      },
      {
        id: '2-2',
        name: 'Oprava elektroinštalácie',
        description: 'Diagnostika a oprava elektrických porúch, osvetlenia, batérie a alternátora.',
        price: 'Na dopyt',
        icon: '⚡',
      },
      {
        id: '2-3',
        name: 'Kontrola a výmena batérie',
        description: 'Testovanie stavu akumulátora a jeho výmena za originálnu alebo kvalitnú náhradnú.',
        price: 'Na dopyt',
        icon: '🔋',
      },
    ],
  },
  {
    id: '3',
    name: 'Podvozok a geometria',
    items: [
      {
        id: '3-1',
        name: 'Nastavenie geometrie kolies',
        description: 'Presné nastavenie geometrie náprav pre rovnomerné opotrebenie pneumatík a istú jazdu.',
        price: 'Na dopyt',
        icon: '🎯',
      },
      {
        id: '3-2',
        name: 'Oprava podvozka',
        description: 'Kontrola a výmena tlmičov, pružín, ramien a ďalších dielov podvozka.',
        price: 'Na dopyt',
        icon: '🚗',
      },
      {
        id: '3-3',
        name: 'Výmena a vyváženie pneumatík',
        description: 'Prezutie, vyváženie pneumatík a kontrola tlaku pre bezpečnú jazdu v každom ročnom období.',
        price: 'Na dopyt',
        icon: '🔄',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// SCHEDULE (templateType: 'schedule')
// ---------------------------------------------------------------------------
export const SCHEDULE: DaySchedule[] = [];

// ---------------------------------------------------------------------------
// MENU CATEGORIES (templateType: 'menu')
// ---------------------------------------------------------------------------
export const MENU_CATEGORIES: MenuCategory[] = [];

// ---------------------------------------------------------------------------
// REVIEWS
// ---------------------------------------------------------------------------
export const REVIEWS: Review[] = [];

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const CONTACT_ITEMS: ContactItem[] = [
  { icon: '📍', title: t().contact.address, lines: ['Jána Psotného 12, Nové Zlatovce, Trenčín'] },
  { icon: '📞', title: t().contact.phone,   lines: ['+421 902 535 035'] },
  { icon: '✉️', title: t().contact.email,   lines: ['info@mysmeservis.sk'] },
  { icon: '🕐', title: t().contact.hours,   lines: ['Pondelok – Piatok: 09:00 – 18:00', 'Sobota – Nedeľa: Zatvorené'] },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'Aké značky vozidiel opravujete?',
    answer: 'Opravujeme všetky značky osobných aj úžitkových vozidiel — domáce aj zahraničné. Bez ohľadu na typ alebo vek auta, radi vám pomôžeme.',
  },
  {
    id: '2',
    question: 'Musím si vopred dohodnúť termín?',
    answer: 'Odporúčame dohodnúť termín vopred telefonicky alebo e-mailom, aby sme vám mohli venovať dostatok času. V prípade núdzových situácií sa snažíme pomôcť čo najskôr.',
  },
  {
    id: '3',
    question: 'Ako dlho trvá bežný servis vozidla?',
    answer: 'Bežná údržba, ako výmena oleja alebo filtrov, trvá zvyčajne 30 – 60 minút. Zložitejšie opravy môžu trvať dlhšie — presný čas vám povieme po diagnostike.',
  },
  {
    id: '4',
    question: 'Používate originálne náhradné diely?',
    answer: 'Používame originálne aj kvalitné značkové náhradné diely podľa vašich preferencií a rozpočtu. Vždy vás informujeme o dostupných možnostiach pred samotnou opravou.',
  },
  {
    id: '5',
    question: 'Čo robiť, ak sa mi auto pokazí počas jazdy?',
    answer: 'Zavolajte nám na číslo +421 902 535 035 a poradíme vám, ako postupovať. V prípade potreby vám pomôžeme zabezpečiť odtiahnutie vozidla do nášho servisu.',
  },
];

// ---------------------------------------------------------------------------
// CHAT CONFIG
// ---------------------------------------------------------------------------
export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Dobrý deň! Vitajte v MYSMESERVIS. Ako vám môžeme pomôcť?',
  quickReplies: [
    {
      id: '1',
      label: 'Ako si dohodnúť termín?',
      response: 'Termín si môžete dohodnúť telefonicky na čísle +421 902 535 035 alebo e-mailom na info@mysmeservis.sk. Pracujeme od pondelka do piatku od 09:00 do 18:00.',
    },
    {
      id: '2',
      label: 'Aké služby ponúkate?',
      response: 'Ponúkame komplexný autoservis — výmenu oleja, servis bŕzd, počítačovú diagnostiku, nastavenie geometrie kolies, opravu podvozka, výmenu pneumatík a oveľa viac.',
    },
    {
      id: '3',
      label: 'Kde sa nachádzate?',
      response: 'Nájdete nás na adrese Jána Psotného 12, Nové Zlatovce, Trenčín. Tešíme sa na vašu návštevu!',
    },
    {
      id: '4',
      label: 'Aké sú vaše otváracie hodiny?',
      response: 'Sme otvorení od pondelka do piatku od 09:00 do 18:00. Cez víkend máme zatvorené. Dohodnite si termín vopred pre rýchle vybavenie.',
    },
  ],
  fallbackResponse: 'Ďakujeme za vašu správu. Pre rýchlejšiu odpoveď nás prosím kontaktujte telefonicky na +421 902 535 035 alebo e-mailom na info@mysmeservis.sk.',
};

// ---------------------------------------------------------------------------
// IMPRINT
// ---------------------------------------------------------------------------
export const IMPRINT: ImprintData | null = null;