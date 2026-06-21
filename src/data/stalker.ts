import {
  FaGuitar,
  FaServer,
  FaBook,
  FaFilm,
  FaClipboardCheck,
  FaCoffee,
  FaMugHot,
  FaCar,
  FaTerminal,
  FaPizzaSlice,
  FaUtensils,
  FaGamepad,
  FaCameraRetro,
  FaMountain,
  FaPlaneDeparture,
  FaCity,
  FaGlobeAsia,
  FaSnowflake,
  FaMapMarkerAlt,
  FaTrophy,
  FaMicrophone,
  FaParachuteBox,
  FaRoad,
  FaCloud,
  FaCode,
  FaHeadphones,
  FaKeyboard,
  FaLaptopCode,
  FaDesktop,
  FaPenNib,
  FaFire,
  FaUserTie,
  FaUsers,
  FaHeart,
  FaPaw,
  FaBug,
  FaSun,
  FaMoon,
  FaCloudSun,
  FaBolt,
  FaPlane,
  FaWrench,
} from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import type { IconType } from 'react-icons';

/* ───────────────────────── Types ───────────────────────── */

export interface BillboardData {
  badge: string;
  seriesTitle: string;
  tagline: string;
  ribbon: string;
  maturityRating: string;
  genreTags: string[];
  seasonInfo: string;
  synopsis: string;
  moreInfo: {
    fullGenres: string[];
    maturityDescriptor: string;
    creator: string;
    releaseYear: string;
    cast: string[];
    audio: string[];
    subtitles: string[];
  };
}

export interface ContinueItem {
  id: string;
  title: string;
  detail: string;
  progressPct: number;
  episodeLabel?: string;
  Icon: IconType;
  gradient: [string, string];
}

export interface TopTenItem {
  rank: number;
  title: string;
  category: string;
  blurb: string;
  Icon: IconType;
  gradient: [string, string];
}

export interface PosterItem {
  id: string;
  title: string;
  synopsis: string;
  genres?: string[];
  Icon: IconType;
  gradient: [string, string];
  matchPct?: number;
  isNew?: boolean;
  done?: boolean;
  meta?: string;
}

export interface PlaceItem {
  id: string;
  city: string;
  country: string;
  blurb: string;
  stamp: string;
  visited: boolean;
  year?: string;
  Icon: IconType;
  gradient: [string, string];
}

export interface CharacterItem {
  id: string;
  name: string;
  role: string;
  blurb: string;
  kind: 'person' | 'pet' | 'prop';
  Icon: IconType;
  gradient: [string, string];
}

export interface Review {
  quote: string;
  author: string;
  stars: number;
}

export interface CriticData {
  freshScore: number;
  audienceScore: number;
  reviews: Review[];
}

export interface HotTake {
  id: string;
  take: string;
  spicyGenre: string;
  Icon: IconType;
  gradient: [string, string];
}

export interface StatItem {
  label: string;
  value: string;
  Icon: IconType;
}

export interface DayEpisode {
  ep: number;
  time: string;
  title: string;
  description: string;
  Icon: IconType;
  gradient: [string, string];
  current?: boolean;
}

export interface Track {
  track: string;
  artist: string;
  vibe: string;
}

export interface SoundtrackData {
  intro: string;
  spotifyEmbed: string;
  tracks: Track[];
}

/* ───────────────────────── The Billboard ───────────────────────── */

export const billboard: BillboardData = {
  badge: 'A TANSEER ORIGINAL · STALKER CUT',
  seriesTitle: 'TANSEER: THE SERIES',
  tagline: 'Equal parts chaos, caffeine, and curiosity.',
  ribbon: '#1 in Oversharing Today',
  maturityRating: 'TV-MA',
  genreTags: ['Adventure', 'Comedy', 'Slice of Life', 'Docu-Reality'],
  seasonInfo: '1 Season (ongoing)',
  synopsis:
    "Born in a terminal window, raised on classic rock, and powered almost entirely by black coffee. Follow one Cloud & DevOps engineer's relentless quest to automate everything, learn one new thing a week, and finally chip away at that bucket list — all while pretending the to-do list isn't quietly on fire. Binge responsibly.",
  moreInfo: {
    fullGenres: [
      'Adventure',
      'Comedy',
      'Slice of Life',
      'Docu-Reality',
      'Coming-of-Age',
      'Tech Noir',
    ],
    maturityDescriptor:
      'TV-MA — contains strong opinions about tabs vs. spaces, mild caffeine dependence, and the occasional unsolicited Terraform rant.',
    creator: 'Written, directed & deployed by Tanseer Khan',
    releaseYear: '2024–',
    cast: [
      'Tanseer Khan',
      'A suspiciously full coffee mug',
      'One half-learned guitar',
      'The cloud (literally)',
    ],
    audio: ['English', 'Hindi', 'Telugu', 'Bash (fluent)'],
    subtitles: ['English', 'Hindi', 'Telugu', 'YAML'],
  },
};

/* ───────────────────────── Continue Watching ───────────────────────── */

export const continueWatching: ContinueItem[] = [
  {
    id: 'cw-guitar',
    title: 'Learning Guitar',
    detail: 'Three chords in, infinite to go.',
    progressPct: 43,
    episodeLabel: "S1:E4 'Wonderwall, Again'",
    Icon: FaGuitar,
    gradient: ['#b45309', '#1c1917'],
  },
  {
    id: 'cw-k8s',
    title: 'Mastering Kubernetes',
    detail: "It's just containers all the way down.",
    progressPct: 67,
    episodeLabel: "S2:E9 'kubectl get sanity'",
    Icon: SiKubernetes,
    gradient: ['#326ce5', '#0c1e3a'],
  },
  {
    id: 'cw-atomic',
    title: 'Reading — Atomic Habits',
    detail: 'On the chapter about not abandoning books.',
    progressPct: 78,
    episodeLabel: 'S1:E13 ‘1% Better’',
    Icon: FaBook,
    gradient: ['#0d9488', '#0a0a0a'],
  },
  {
    id: 'cw-homelab',
    title: 'Home Lab Setup',
    detail: 'Wires everywhere. Regret nowhere.',
    progressPct: 31,
    episodeLabel: "S1:E3 'It Was DNS'",
    Icon: FaServer,
    gradient: ['#475569', '#0a0a0a'],
  },
  {
    id: 'cw-telugu',
    title: 'Telugu Cinema Backlog',
    detail: 'Twelve films deep, no subtitles needed.',
    progressPct: 55,
    episodeLabel: 'S4:E2 ‘Interval Block’',
    Icon: FaFilm,
    gradient: ['#7c3aed', '#1e1b4b'],
  },
  {
    id: 'cw-bucket',
    title: 'The Bucket List',
    detail: 'Crossing things off faster than adding them. Allegedly.',
    progressPct: 22,
    episodeLabel: 'S1:E1 ‘Someday’',
    Icon: FaClipboardCheck,
    gradient: ['#e50914', '#1c1917'],
  },
];

/* ───────────────────────── Top 10 Today ───────────────────────── */

export const topTen: TopTenItem[] = [
  {
    rank: 1,
    title: 'Black Coffee',
    category: 'Comfort Fuel',
    blurb: 'The beverage, the lifestyle, the entire personality.',
    Icon: FaCoffee,
    gradient: ['#78350f', '#0a0a0a'],
  },
  {
    rank: 2,
    title: 'Hotel California',
    category: 'Forever Song',
    blurb: 'The Eagles. The 7-minute mood-setter.',
    Icon: FaGuitar,
    gradient: ['#a16207', '#1c1917'],
  },
  {
    rank: 3,
    title: 'Biryani at 2 AM',
    category: 'Comfort Food',
    blurb: 'Scientifically the best time. Don’t fact-check this.',
    Icon: FaUtensils,
    gradient: ['#b91c1c', '#1c1917'],
  },
  {
    rank: 4,
    title: 'The Dark Knight',
    category: 'Comfort Movie',
    blurb: 'Rewatched more than any sane person should admit.',
    Icon: FaFilm,
    gradient: ['#1e293b', '#020617'],
  },
  {
    rank: 5,
    title: 'Back in Black',
    category: 'Hype Anthem',
    blurb: 'AC/DC. Deploy-day soundtrack of champions.',
    Icon: FaBolt,
    gradient: ['#111827', '#000000'],
  },
  {
    rank: 6,
    title: 'A Clean git status',
    category: 'Inner Peace',
    blurb: '“nothing to commit, working tree clean.” Bliss.',
    Icon: FaTerminal,
    gradient: ['#065f46', '#022c22'],
  },
  {
    rank: 7,
    title: 'Maggi Noodles',
    category: 'Emergency Cuisine',
    blurb: 'Two-minute promise, lifelong loyalty.',
    Icon: FaPizzaSlice,
    gradient: ['#ca8a04', '#1c1917'],
  },
  {
    rank: 8,
    title: 'Appetite for Destruction',
    category: 'Album on Repeat',
    blurb: "Guns N' Roses. That intro riff. Every single time.",
    Icon: FaGuitar,
    gradient: ['#9a3412', '#0a0a0a'],
  },
  {
    rank: 9,
    title: 'Long Drives, No Destination',
    category: 'Decompression',
    blurb: 'Windows down, playlist up, problems out.',
    Icon: FaCar,
    gradient: ['#334155', '#0a0a0a'],
  },
  {
    rank: 10,
    title: 'The Terminal, Dark Theme',
    category: 'Happy Place',
    blurb: 'Green text on black. Home, sweet shell.',
    Icon: FaCode,
    gradient: ['#1f2937', '#000000'],
  },
];

/* ───────────────────────── Hobbies ───────────────────────── */

export const hobbies: PosterItem[] = [
  {
    id: 'hobby-coffee',
    title: 'Coffee Brewing',
    synopsis: 'Amateur barista, professional addict. Grinds beans like deadlines.',
    genres: ['Ritual', 'Caffeinated', 'Daily'],
    matchPct: 97,
    Icon: FaMugHot,
    gradient: ['#92400e', '#1c1917'],
  },
  {
    id: 'hobby-travel',
    title: 'Travel & Hiking',
    synopsis: 'Will happily walk 12km for a view and a questionable trail snack.',
    genres: ['Adventure', 'Outdoors', 'Wanderlust'],
    matchPct: 95,
    Icon: FaMountain,
    gradient: ['#15803d', '#052e16'],
  },
  {
    id: 'hobby-homelab',
    title: 'Tinkering & Home Lab',
    synopsis: 'Breaking things on purpose, then fixing them for fun. It’s a lifestyle.',
    genres: ['Hands-On', 'Chaotic', 'Self-Hosted'],
    matchPct: 93,
    Icon: FaServer,
    gradient: ['#475569', '#0a0a0a'],
  },
  {
    id: 'hobby-guitar',
    title: 'Guitar',
    synopsis: 'Self-taught, crowd-untested. Currently fluent in four chords.',
    genres: ['Acoustic', 'Persistent', 'Slightly Off-Key'],
    matchPct: 92,
    Icon: FaGuitar,
    gradient: ['#b45309', '#1c1917'],
  },
  {
    id: 'hobby-reading',
    title: 'Reading',
    synopsis: 'Self-improvement by day, Telugu novels by night. No in-between.',
    genres: ['Non-Fiction', 'Telugu Lit', 'Late-Night'],
    matchPct: 90,
    Icon: FaBook,
    gradient: ['#0d9488', '#0a0a0a'],
  },
  {
    id: 'hobby-gaming',
    title: 'Gaming',
    synopsis: 'Competitive napping between matches. Will rage, will return.',
    genres: ['FPS', 'RPG', 'Rage-Quit'],
    matchPct: 88,
    Icon: FaGamepad,
    gradient: ['#6d28d9', '#1e1b4b'],
  },
  {
    id: 'hobby-photo',
    title: 'Photography',
    synopsis: 'Mostly skies, street dogs, and whatever is on the plate.',
    genres: ['Street', 'Golden Hour', 'Amateur'],
    matchPct: 85,
    Icon: FaCameraRetro,
    gradient: ['#0369a1', '#0c1e3a'],
  },
  {
    id: 'hobby-cooking',
    title: 'Late-Night Cooking',
    synopsis: 'Experimental kitchen sessions. Mostly edible. Occasionally great.',
    genres: ['Improv', 'Spicy', 'Risky'],
    matchPct: 80,
    Icon: FaUtensils,
    gradient: ['#b91c1c', '#1c1917'],
  },
];

/* ───────────────────────── Places (Filming Locations) ───────────────────────── */

export const places: PlaceItem[] = [
  {
    id: 'place-mumbai',
    city: 'Mumbai',
    country: 'India',
    blurb: 'The origin story. Trains, chai, and beautiful chaos.',
    stamp: 'S1 · PILOT',
    visited: true,
    year: '2020',
    Icon: FaCity,
    gradient: ['#b45309', '#1c1917'],
  },
  {
    id: 'place-nashik',
    city: 'Nashik',
    country: 'India',
    blurb: 'Current base of operations. Vineyards strictly optional.',
    stamp: 'HOME BASE',
    visited: true,
    Icon: FaMapMarkerAlt,
    gradient: ['#15803d', '#052e16'],
  },
  {
    id: 'place-goa',
    city: 'Goa',
    country: 'India',
    blurb: 'Beaches, basslines, and a hard zero meetings policy.',
    stamp: 'RECURRING',
    visited: true,
    Icon: FaSun,
    gradient: ['#0891b2', '#0c1e3a'],
  },
  {
    id: 'place-hyderabad',
    city: 'Hyderabad',
    country: 'India',
    blurb: 'Biryani field research. Strictly professional, obviously.',
    stamp: 'VISITED',
    visited: true,
    Icon: FaUtensils,
    gradient: ['#9a3412', '#0a0a0a'],
  },
  {
    id: 'place-manali',
    city: 'Manali',
    country: 'India',
    blurb: 'Altitude over attitude. The mountains always win.',
    stamp: 'VISITED',
    visited: true,
    Icon: FaMountain,
    gradient: ['#0e7490', '#082f49'],
  },
  {
    id: 'place-bangalore',
    city: 'Bengaluru',
    country: 'India',
    blurb: 'Traffic: the genre’s real final boss. Coffee redeems it.',
    stamp: 'VISITED',
    visited: true,
    Icon: FaCity,
    gradient: ['#7c3aed', '#1e1b4b'],
  },
  {
    id: 'place-tokyo',
    city: 'Tokyo',
    country: 'Japan',
    blurb: 'On the list. Neon dreams currently rendering.',
    stamp: 'COMING SOON',
    visited: false,
    Icon: FaGlobeAsia,
    gradient: ['#be123c', '#1c1917'],
  },
  {
    id: 'place-iceland',
    city: 'Iceland',
    country: 'Wishlist',
    blurb: 'For the northern lights and the gorgeous silence.',
    stamp: 'WISHLIST',
    visited: false,
    Icon: FaSnowflake,
    gradient: ['#0ea5e9', '#0c1e3a'],
  },
  {
    id: 'place-alps',
    city: 'Swiss Alps',
    country: 'Wishlist',
    blurb: 'Cabin, snow, no Wi-Fi. A man can dream.',
    stamp: 'WISHLIST',
    visited: false,
    Icon: FaPlaneDeparture,
    gradient: ['#334155', '#020617'],
  },
];

/* ───────────────────────── My List (Bucket List) ───────────────────────── */

export const myList: PosterItem[] = [
  {
    id: 'list-acb',
    title: 'Become an AWS Community Builder',
    synopsis: 'Done — and somehow still gets brought up at every dinner.',
    genres: ['Career', 'Cloud'],
    done: true,
    Icon: FaCloud,
    gradient: ['#ff9900', '#1c1917'],
  },
  {
    id: 'list-talk',
    title: 'Give a Tech Talk',
    synopsis: 'Survived the live demo. Mostly. The slides held.',
    genres: ['Public Speaking'],
    done: true,
    Icon: FaMicrophone,
    gradient: ['#0d9488', '#0a0a0a'],
  },
  {
    id: 'list-dish',
    title: 'Master One Signature Dish',
    synopsis: 'There is exactly one meal I can be trusted with. Progress.',
    genres: ['Cooking'],
    done: true,
    Icon: FaUtensils,
    gradient: ['#b91c1c', '#1c1917'],
  },
  {
    id: 'list-sap',
    title: 'AWS Solutions Architect — Pro',
    synopsis: 'The boss level. Currently grinding XP in the practice exams.',
    genres: ['Cloud', 'Certification'],
    done: false,
    Icon: FaTrophy,
    gradient: ['#ca8a04', '#1c1917'],
  },
  {
    id: 'list-openmic',
    title: 'Play Guitar at an Open Mic',
    synopsis: 'Pending two more chords and a sudden surge of courage.',
    genres: ['Music', 'Bravery'],
    done: false,
    Icon: FaGuitar,
    gradient: ['#b45309', '#1c1917'],
  },
  {
    id: 'list-japan',
    title: 'Visit Japan',
    synopsis: 'Trains, ramen, neon. The whole protagonist arc.',
    genres: ['Travel'],
    done: false,
    Icon: FaGlobeAsia,
    gradient: ['#be123c', '#1c1917'],
  },
  {
    id: 'list-skydive',
    title: 'Go Skydiving',
    synopsis: 'Jump out of a perfectly good plane. For the plot.',
    genres: ['Adrenaline'],
    done: false,
    Icon: FaParachuteBox,
    gradient: ['#0369a1', '#0c1e3a'],
  },
  {
    id: 'list-roadtrip',
    title: 'Road Trip Across India',
    synopsis: 'One map, no schedule, an absurdly good playlist.',
    genres: ['Adventure'],
    done: false,
    Icon: FaRoad,
    gradient: ['#475569', '#0a0a0a'],
  },
  {
    id: 'list-aurora',
    title: 'See the Northern Lights',
    synopsis: 'Stand in the cold, look up, lose the ability to speak.',
    genres: ['Wonder'],
    done: false,
    Icon: FaSnowflake,
    gradient: ['#0ea5e9', '#0c1e3a'],
  },
  {
    id: 'list-sideproject',
    title: 'Ship a Profitable Side Project',
    synopsis: 'Currently in the “great idea on a napkin” phase. Season 2 material.',
    genres: ['Build', 'Indie'],
    done: false,
    Icon: FaCode,
    gradient: ['#1f2937', '#000000'],
  },
];

/* ───────────────────────── Trending Now ───────────────────────── */

export const trendingNow: PosterItem[] = [
  {
    id: 'trend-acb',
    title: 'Officially an AWS Community Builder',
    synopsis: 'Joined the Serverless cohort. Will mention it again shortly.',
    genres: ['Cloud', 'Milestone'],
    isNew: true,
    Icon: FaCloud,
    gradient: ['#ff9900', '#1c1917'],
  },
  {
    id: 'trend-guitar',
    title: 'Started Learning Guitar',
    synopsis: 'Neighbours have been notified. They were not thrilled.',
    genres: ['Music', 'New Arc'],
    isNew: true,
    Icon: FaGuitar,
    gradient: ['#b45309', '#1c1917'],
  },
  {
    id: 'trend-k3s',
    title: 'Migrated the Home Lab to k3s',
    synopsis: 'Lightweight Kubernetes, heavyweight weekend.',
    genres: ['DevOps', 'Self-Hosted'],
    Icon: SiKubernetes,
    gradient: ['#326ce5', '#0c1e3a'],
  },
  {
    id: 'trend-streak',
    title: 'Hit a 100-Day Terminal Streak',
    synopsis: 'The shell and I are basically roommates now.',
    genres: ['Habits', 'Nerd'],
    Icon: FaTerminal,
    gradient: ['#065f46', '#022c22'],
  },
  {
    id: 'trend-friday',
    title: 'Survived a Friday Prod Deploy',
    synopsis: 'Pushed at 5 PM. Lived to tell the tale. Do not attempt.',
    genres: ['Thriller', 'True Story'],
    Icon: FaBolt,
    gradient: ['#b91c1c', '#1c1917'],
  },
  {
    id: 'trend-batman',
    title: 'Rewatched the Dark Knight Trilogy',
    synopsis: 'Again. For research. The research is just enjoying it.',
    genres: ['Comfort', 'Cinema'],
    Icon: FaFilm,
    gradient: ['#1e293b', '#020617'],
  },
];

/* ───────────────────────── Watch It Again ───────────────────────── */

export const watchItAgain: PosterItem[] = [
  {
    id: 'again-batman',
    title: 'The Dark Knight',
    synopsis: 'Some films you don’t rewatch. You revisit.',
    genres: ['Comfort Movie'],
    meta: 'Watched 40+×',
    Icon: FaFilm,
    gradient: ['#1e293b', '#020617'],
  },
  {
    id: 'again-hotelcalifornia',
    title: 'Hotel California (Live)',
    synopsis: 'The live version, where that solo goes on gloriously forever.',
    genres: ['On Repeat'],
    meta: 'Played ∞×',
    Icon: FaGuitar,
    gradient: ['#a16207', '#1c1917'],
  },
  {
    id: 'again-biryani',
    title: 'Biryani',
    synopsis: 'Some things you simply re-order. No notes.',
    genres: ['Comfort Food'],
    meta: 'Re-ordered weekly',
    Icon: FaUtensils,
    gradient: ['#b91c1c', '#1c1917'],
  },
  {
    id: 'again-goa',
    title: 'Goa',
    synopsis: 'The city I keep returning to. The sea remembers me.',
    genres: ['Re-Visit'],
    meta: 'Returned 5×',
    Icon: FaSun,
    gradient: ['#0891b2', '#0c1e3a'],
  },
  {
    id: 'again-atomic',
    title: 'Atomic Habits',
    synopsis: 'Re-read every January, ignored selectively by February.',
    genres: ['Re-Read'],
    meta: 'Read 3×',
    Icon: FaBook,
    gradient: ['#0d9488', '#0a0a0a'],
  },
  {
    id: 'again-vim',
    title: 'The Vim Tutorial',
    synopsis: 'Still here. Still can’t quit it. Literally.',
    genres: ['Eternal'],
    meta: ':q! pending',
    Icon: FaTerminal,
    gradient: ['#1f2937', '#000000'],
  },
];

/* ───────────────────────── The Soundtrack ───────────────────────── */

export const soundtrack: SoundtrackData = {
  intro:
    'Every series needs a soundtrack. Mine is 90% classic rock, 10% lo-fi while debugging, and 100% slightly too loud. (Stand-in playlist below until I export the real one.)',
  spotifyEmbed:
    'https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U?utm_source=generator&theme=0',
  tracks: [
    { track: 'Hotel California', artist: 'The Eagles', vibe: 'The 7-minute mood-setter' },
    { track: 'Back in Black', artist: 'AC/DC', vibe: 'Deploy-day anthem' },
    { track: "Sweet Child o' Mine", artist: "Guns N' Roses", vibe: 'That intro riff. Every time.' },
    { track: 'November Rain', artist: "Guns N' Roses", vibe: 'For the dramatic git reverts' },
    { track: 'Thunderstruck', artist: 'AC/DC', vibe: 'Pre-presentation hype' },
    { track: 'Stairway to Heaven', artist: 'Led Zeppelin', vibe: 'Long builds need long songs' },
    { track: 'Comfortably Numb', artist: 'Pink Floyd', vibe: '2 AM, one more bug' },
    { track: 'lo-fi beats to deploy to', artist: 'Some Algorithm', vibe: 'When the rock gets distracting' },
  ],
};

/* ───────────────────────── Cast & Crew (Recurring Characters) ───────────────────────── */

export const castAndCrew: CharacterItem[] = [
  {
    id: 'cast-lead',
    name: 'Tanseer Khan',
    role: 'Lead / Showrunner',
    blurb: 'Appears in every single episode. Contractually obligated to.',
    kind: 'person',
    Icon: FaUserTie,
    gradient: ['#e50914', '#1c1917'],
  },
  {
    id: 'cast-mug',
    name: 'The Coffee Mug',
    role: 'Supporting Lead',
    blurb: 'Never empty for long. The actual MVP of the production.',
    kind: 'prop',
    Icon: FaMugHot,
    gradient: ['#92400e', '#1c1917'],
  },
  {
    id: 'cast-parents',
    name: 'Mom & Dad',
    role: 'Executive Producers',
    blurb: 'Funded the pilot. Still giving notes. Still always right.',
    kind: 'person',
    Icon: FaHeart,
    gradient: ['#be123c', '#1c1917'],
  },
  {
    id: 'cast-squad',
    name: 'The Squad',
    role: 'Recurring Ensemble',
    blurb: 'Friends who double as unpaid QA and on-call therapists.',
    kind: 'person',
    Icon: FaUsers,
    gradient: ['#0d9488', '#0a0a0a'],
  },
  {
    id: 'cast-bruno',
    name: 'Bruno, a Street Dog',
    role: 'Comic Relief',
    blurb: 'Shows up uninvited, steals the scene, demands snacks. Worth it.',
    kind: 'pet',
    Icon: FaPaw,
    gradient: ['#a16207', '#1c1917'],
  },
  {
    id: 'cast-laptop',
    name: 'The Laptop',
    role: 'Co-Star',
    blurb: 'Thirteen hours of screen time a day and no complaints (yet).',
    kind: 'prop',
    Icon: FaLaptopCode,
    gradient: ['#334155', '#0a0a0a'],
  },
  {
    id: 'cast-duck',
    name: 'The Rubber Duck',
    role: 'Debugging Consultant',
    blurb: 'Solves more bugs than Stack Overflow. Never takes credit.',
    kind: 'prop',
    Icon: FaBug,
    gradient: ['#ca8a04', '#1c1917'],
  },
];

/* ───────────────────────── Behind the Scenes ───────────────────────── */

export const behindTheScenes: PosterItem[] = [
  {
    id: 'bts-prod',
    title: 'Deleted Production. Once.',
    synopsis: 'Ran the command in the wrong terminal tab. We don’t talk about that Tuesday.',
    genres: ['Blooper'],
    Icon: FaServer,
    gradient: ['#b91c1c', '#1c1917'],
  },
  {
    id: 'bts-comma',
    title: 'The Four-Hour Bug',
    synopsis: 'Turned out to be a single missing comma. The comma won the round.',
    genres: ['Blooper'],
    Icon: FaCode,
    gradient: ['#1f2937', '#000000'],
  },
  {
    id: 'bts-save',
    title: 'Forgot to Save',
    synopsis: 'Two hours of work, gone. Ctrl+S is now muscle memory and mild trauma.',
    genres: ['Outtake'],
    Icon: FaDesktop,
    gradient: ['#334155', '#0a0a0a'],
  },
  {
    id: 'bts-dns',
    title: 'It Was DNS. Again.',
    synopsis: 'It is always DNS. It was DNS. It will, forever, be DNS.',
    genres: ['Running Gag'],
    Icon: FaCloud,
    gradient: ['#0369a1', '#0c1e3a'],
  },
  {
    id: 'bts-friday',
    title: 'Pushed to main on a Friday',
    synopsis: 'Survived. Barely. The cast and crew strongly advise against it.',
    genres: ['Outtake'],
    Icon: FaBolt,
    gradient: ['#9a3412', '#0a0a0a'],
  },
  {
    id: 'bts-demo',
    title: 'The Live Demo Curse',
    synopsis: 'Worked flawlessly until exactly one important person was watching.',
    genres: ['Blooper'],
    Icon: FaBug,
    gradient: ['#6d28d9', '#1e1b4b'],
  },
];

/* ───────────────────────── Critic Reviews ───────────────────────── */

export const critics: CriticData = {
  freshScore: 98,
  audienceScore: 94,
  reviews: [
    {
      quote: 'Ships fast, breaks rarely, debugs everything. A rare 99.9%-uptime personality.',
      author: 'A Teammate, probably',
      stars: 5,
    },
    {
      quote: 'Will explain the cloud to you whether you asked or not — and somehow you’ll get it.',
      author: 'A Mildly Confused Friend',
      stars: 5,
    },
    {
      quote: 'Makes excellent coffee, tolerable jokes, and clean pull requests. Would deploy again.',
      author: 'Anonymous Code Reviewer',
      stars: 4,
    },
    {
      quote: 'Knows every lyric to every AC/DC song. This is both a strength and a warning.',
      author: 'The Roommate',
      stars: 4,
    },
    {
      quote: 'Replies in 3–5 business days, but the reply is always weirdly thoughtful.',
      author: 'The Group Chat',
      stars: 4,
    },
    {
      quote: '10/10 would let him pick the road-trip playlist. Trust him with nothing else.',
      author: 'The Co-Pilot',
      stars: 5,
    },
  ],
};

/* ───────────────────────── Because You Stalked My LinkedIn… ───────────────────────── */

export const becauseYouStalked: PosterItem[] = [
  {
    id: 'rec-certs',
    title: 'More AWS Certs You Didn’t Ask About',
    synopsis: 'If you liked the last badge, you’ll love watching me chase the next one.',
    genres: ['Cloud', 'Sequel'],
    Icon: FaCloud,
    gradient: ['#ff9900', '#1c1917'],
  },
  {
    id: 'rec-diagrams',
    title: 'Infra Diagrams: The Director’s Cut',
    synopsis: 'Now with 40% more boxes and arrows nobody else can read.',
    genres: ['DevOps', 'Visual'],
    Icon: FaServer,
    gradient: ['#475569', '#0a0a0a'],
  },
  {
    id: 'rec-oss',
    title: 'Open-Source Contributions',
    synopsis: 'A heartwarming saga of green squares and one very persistent PR.',
    genres: ['Code', 'Coming Soon'],
    Icon: FaCode,
    gradient: ['#1f2937', '#000000'],
  },
  {
    id: 'rec-sideprojects',
    title: 'A Suspicious Number of Side Projects',
    synopsis: 'An anthology series. Most episodes end at 80% completion.',
    genres: ['Indie', 'Anthology'],
    Icon: FaLaptopCode,
    gradient: ['#6d28d9', '#1e1b4b'],
  },
  {
    id: 'rec-terraform',
    title: 'Terraform Modules Nobody Requested',
    synopsis: 'Reusable, composable, and frankly over-engineered. For you.',
    genres: ['IaC', 'Niche'],
    Icon: FaWrench,
    gradient: ['#7b42bc', '#1e1b4b'],
  },
  {
    id: 'rec-blog',
    title: 'My Hashnode Blog',
    synopsis: 'Yes, I write too. The plot twist nobody saw coming.',
    genres: ['Writing', 'Bonus'],
    Icon: FaPenNib,
    gradient: ['#0d9488', '#0a0a0a'],
  },
];

/* ───────────────────────── Hot Takes (Mature Audiences Only) ───────────────────────── */

export const hotTakes: HotTake[] = [
  {
    id: 'take-tabs',
    take: 'Tabs over spaces. This is not a debate.',
    spicyGenre: 'Controversial',
    Icon: FaFire,
    gradient: ['#b91c1c', '#1c1917'],
  },
  {
    id: 'take-pineapple',
    take: 'Pineapple belongs on pizza. Fight me politely.',
    spicyGenre: 'Unhinged',
    Icon: FaPizzaSlice,
    gradient: ['#ca8a04', '#1c1917'],
  },
  {
    id: 'take-book',
    take: 'The book is always better than the movie. Always.',
    spicyGenre: 'Mild',
    Icon: FaBook,
    gradient: ['#0d9488', '#0a0a0a'],
  },
  {
    id: 'take-darkmode',
    take: 'Dark mode isn’t a preference, it’s a personality.',
    spicyGenre: 'Factual',
    Icon: FaMoon,
    gradient: ['#1f2937', '#000000'],
  },
  {
    id: 'take-meetings',
    take: 'That meeting could have been a Slack message.',
    spicyGenre: 'Brave',
    Icon: FaBolt,
    gradient: ['#9a3412', '#0a0a0a'],
  },
  {
    id: 'take-acdc',
    take: 'AC/DC beats most modern bands. Respectfully. Sorry.',
    spicyGenre: 'Boomer-Coded',
    Icon: FaGuitar,
    gradient: ['#a16207', '#1c1917'],
  },
  {
    id: 'take-microservice',
    take: 'You don’t need that microservice. You really don’t.',
    spicyGenre: 'Heretical',
    Icon: FaServer,
    gradient: ['#6d28d9', '#1e1b4b'],
  },
];

/* ───────────────────────── My Stats (Wrapped Energy) ───────────────────────── */

export const myStats: StatItem[] = [
  { label: 'Cities Explored', value: '14', Icon: FaPlane },
  { label: 'Cups of Coffee This Year', value: '1,200+', Icon: FaCoffee },
  { label: 'Hours Gaming', value: '∞', Icon: FaGamepad },
  { label: 'Git Commits', value: '4,300+', Icon: FaCode },
  { label: 'Servers Deployed', value: '200+', Icon: FaServer },
  { label: 'Books Finished', value: '27', Icon: FaBook },
  { label: 'Guitar Chords Mastered', value: '4', Icon: FaGuitar },
  { label: 'Prod Incidents Survived', value: 'All of them', Icon: FaBolt },
  { label: 'Longest Debug Session', value: '7 hrs (won)', Icon: FaBug },
  { label: 'Concerts Attended', value: '9', Icon: FaHeadphones },
];

/* ───────────────────────── The Setup (Props Department) ───────────────────────── */

export const theSetup: PosterItem[] = [
  {
    id: 'setup-laptop',
    title: 'The Laptop',
    synopsis: 'The main rig. Runs hot, runs everything, never gets a day off.',
    genres: ['Hardware'],
    Icon: FaLaptopCode,
    gradient: ['#334155', '#0a0a0a'],
  },
  {
    id: 'setup-keyboard',
    title: 'Mechanical Keyboard',
    synopsis: 'Brown switches. Loud enough to feel undeniably productive.',
    genres: ['Hardware'],
    Icon: FaKeyboard,
    gradient: ['#1f2937', '#000000'],
  },
  {
    id: 'setup-headphones',
    title: 'Noise-Cancelling Headphones',
    synopsis: 'For deep work, deeper focus, and considerably louder rock.',
    genres: ['Audio'],
    Icon: FaHeadphones,
    gradient: ['#6d28d9', '#1e1b4b'],
  },
  {
    id: 'setup-coffee',
    title: 'The Coffee Machine',
    synopsis: 'Arguably the most critical server in the entire house.',
    genres: ['Essential'],
    Icon: FaMugHot,
    gradient: ['#92400e', '#1c1917'],
  },
  {
    id: 'setup-monitor',
    title: 'External Monitor',
    synopsis: 'More pixels, more terminals, more places to lose a window.',
    genres: ['Hardware'],
    Icon: FaDesktop,
    gradient: ['#0369a1', '#0c1e3a'],
  },
  {
    id: 'setup-homelab',
    title: 'Home Lab Mini PC',
    synopsis: 'Where things get broken and un-broken purely for sport.',
    genres: ['Hardware'],
    Icon: FaServer,
    gradient: ['#475569', '#0a0a0a'],
  },
  {
    id: 'setup-notebook',
    title: 'A Notebook & Pen',
    synopsis: 'Still undefeated for actual thinking. No firmware updates needed.',
    genres: ['Analog'],
    Icon: FaPenNib,
    gradient: ['#0d9488', '#0a0a0a'],
  },
  {
    id: 'setup-vscode',
    title: 'VS Code · Dark Theme',
    synopsis: 'Home, sweet IDE. The light theme is for monsters.',
    genres: ['Software'],
    Icon: FaCode,
    gradient: ['#0c4a6e', '#020617'],
  },
];

/* ───────────────────────── A Day in the Life (Episodes) ───────────────────────── */

export const dayInLife: DayEpisode[] = [
  {
    ep: 1,
    time: '06:00',
    title: 'The Alarm Lie',
    description: 'Snoozes. Negotiates with self. Loses the negotiation decisively.',
    Icon: FaSun,
    gradient: ['#b45309', '#1c1917'],
  },
  {
    ep: 2,
    time: '09:00',
    title: 'Standup & Stand-down',
    description: 'Coffee #1 goes down. Pretends, convincingly, that the sprint is on track.',
    Icon: FaCloudSun,
    gradient: ['#0891b2', '#0c1e3a'],
  },
  {
    ep: 3,
    time: '13:00',
    title: 'The Deep Work Arc',
    description: 'Headphones on, world off. Terraform applies cleanly. A genuine miracle.',
    Icon: FaCode,
    gradient: ['#065f46', '#022c22'],
  },
  {
    ep: 4,
    time: '19:00',
    title: 'Guitar & Guilt',
    description: 'Three chords, one new bug idea, dinner heroically forgotten.',
    Icon: FaGuitar,
    gradient: ['#b45309', '#1c1917'],
  },
  {
    ep: 5,
    time: '02:00',
    title: 'Still Awake',
    description: '“One more fix” quietly becomes five. Classic season-finale energy.',
    Icon: FaMoon,
    gradient: ['#1e1b4b', '#020617'],
    current: true,
  },
];

/* ───────────────────────── Skip Intro easter egg ───────────────────────── */

export const skipIntro = {
  label: 'Skip Intro',
  message: 'Nice try — you don’t get to skip me that easily. 😏',
};

/* A couple of shared stats for the stats band header */
export const statsHeadline = {
  kicker: 'TANSEER WRAPPED',
  title: 'The Season So Far, By the Numbers',
  caption: 'Loosely audited. Generously rounded. Mostly true.',
};
