import LeBronImg from '../images/lebron.png';
import KevinImg from '../images/kevin.png';
import KawhiImg from '../images/kawhi.png';
import StephImg from '../images/steph.png';
import TraeImg from '../images/trae.png';
import TatumImg from '../images/tatum.png';
import GiannisImg from '../images/giannis.png';
import HerroImg from '../images/herro.png';

export const initialPlayers = [
  { 
    id: 1,
    name: "LeBron James",
    height: "6 feet 9 inches",
    age: 36,
    currentTeam: "Los Angeles Lakers",
    CareerPoints: '35,367',
    CareerRebounds: '9,751',
    CareerAssists: '9,696',
    TotalSeasons: 18,
    Championships: 4,
    imgPath: LeBronImg,
    url: 'https://en.wikipedia.org/wiki/LeBron_James'
  },
  {
    id: 2,
    name: "Kevin Durant",
    height: '6 feet 10 inches',
    age: 32,
    currentTeam: "Brooklyn Nets",
    CareerPoints: '23,883',
    CareerRebounds: '6,239',
    CareerAssists: '3,681',
    TotalSeasons: 13,
    Championships: 2,
    imgPath: KevinImg,
    url: 'https://en.wikipedia.org/wiki/Kevin_Durant'
  },
  {
    id: 3,
    name: "Stephen Curry",
    height: '6 feet 3 inches',
    age: 33,
    currentTeam: "Golden State Warriors",
    CareerPoints: '18,434',
    CareerRebounds: '3,503',
    CareerAssists: '4,984',
    TotalSeasons: 12,
    Championships: 3,
    imgPath: StephImg,
    url: 'https://en.wikipedia.org/wiki/Stephen_Curry'
  },
  {
    id: 4,
    name: "Kawhi Leonard",
    height: '6 feet 7 inches',
    age: 30,
    currentTeam: "Los Angeles Clippers",
    CareerPoints: '11,085',
    CareerRebounds: '3,689',
    CareerAssists: '1,672',
    TotalSeasons: 10,
    Championships: 2,
    imgPath: KawhiImg,
    url: 'https://en.wikipedia.org/wiki/Kawhi_Leonard'
  },
  {
    id: 5,
    name: "Trae Young",
    height: '6 feet 1 inches',
    age: 22,
    currentTeam: "Atlanta Hawks",
    CareerPoints: '4,921',
    CareerRebounds: 801,
    CareerAssists: '1,807',
    TotalSeasons: 3,
    Championships: 0,
    imgPath: TraeImg,
    url: 'https://en.wikipedia.org/wiki/Trae_Young'
  },
  {
    id: 6,
    name: "Jayson Tatum",
    height: '6 feet 8 inches',
    age: 23,
    currentTeam: "Boston Celtics",
    CareerPoints: '5,594',
    CareerRebounds: '1,811',
    CareerAssists: 772,
    TotalSeasons: 4,
    Championships: 0,
    imgPath: TatumImg,
    url: 'https://en.wikipedia.org/wiki/Jayson_Tatum'
  },
  {
    id: 7,
    name: "Giannis Antetokounmpo",
    height: '6 feet 11 inches',
    age: 26,
    currentTeam: "Milwaukee Bucks",
    CareerPoints: '12,319',
    CareerRebounds: '5,371',
    CareerAssists: '2,632',
    TotalSeasons: 8,
    Championships: 1,
    imgPath: GiannisImg,
    url: 'https://en.wikipedia.org/wiki/Giannis_Antetokounmpo'
  },
  {
    id: 8,
    name: "Tyler Herro",
    height: '6 feet 5 inches',
    age: 21,
    currentTeam: "Miami Heat",
    CareerPoints: '1,558',
    CareerRebounds: '492',
    CareerAssists: '305',
    TotalSeasons: 2,
    Championships: 0,
    imgPath: HerroImg,
    url: 'https://en.wikipedia.org/wiki/Tyler_Herro'
  }
]

export default initialPlayers;