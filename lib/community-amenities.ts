/**
 * Hyperlocal amenity map configuration — Centennial Hills, Las Vegas (89135, 89138, 89144).
 * Map center: Centennial Hills Park (City of Las Vegas), a documented community anchor.
 */

export const communityAmenitiesConfig = {
  communityName: "Centennial Hills",
  city: "Las Vegas",
  state: "NV",
  regionLabel: "Northwest Las Vegas",
  zipCodes: ["89135", "89138", "89144"],
  /**
   * Center for map search — Centennial Hills Park (City of Las Vegas).
   * @see https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Centennial-hills-park
   */
  center: {
    lat: 36.28694,
    lng: -115.26278,
    label: "Centennial Hills Park",
    address: "7101 N Buffalo Dr, Las Vegas, NV 89131",
  },
  communityMarker: {
    title: "Centennial Hills",
    subtitle: "Northwest Las Vegas · ZIP 89135, 89138, 89144",
  },
  amenitiesPagePath: "/amenities",
  legacyAmenitiesPath: "/centennial-hills-amenities",
  mapEmbedZoom: 14,
  searchRadiusMeters: 8000,
};

export type AmenityCategoryId =
  | "parks"
  | "grocery"
  | "restaurants"
  | "healthcare"
  | "schools"
  | "golf"
  | "shopping"
  | "fitness"
  | "cafes"
  | "pharmacies"
  | "parking";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  placeTypes: string[];
};

/** Move-up suburban community — parks and daily essentials first. */
export const amenityCategories: AmenityCategory[] = [
  { id: "parks", label: "Parks", placeTypes: ["park", "national_park"] },
  { id: "grocery", label: "Grocery", placeTypes: ["grocery_store", "supermarket"] },
  { id: "restaurants", label: "Restaurants", placeTypes: ["restaurant"] },
  { id: "healthcare", label: "Healthcare", placeTypes: ["hospital", "doctor"] },
  { id: "schools", label: "Schools", placeTypes: ["school", "primary_school", "secondary_school"] },
  { id: "golf", label: "Golf", placeTypes: ["golf_course"] },
  { id: "shopping", label: "Shopping", placeTypes: ["shopping_mall", "department_store"] },
  { id: "fitness", label: "Fitness", placeTypes: ["gym", "fitness_center"] },
  { id: "cafes", label: "Cafes", placeTypes: ["cafe", "coffee_shop"] },
  { id: "pharmacies", label: "Pharmacies", placeTypes: ["pharmacy", "drugstore"] },
  { id: "parking", label: "Parking", placeTypes: ["parking"] },
];

export type CuratedPlace = {
  name: string;
  /** Omit from JSON-LD when empty — only verified street addresses */
  address: string;
  category: AmenityCategoryId;
  schemaType: string;
  note?: string;
  /** Official source used to verify name and address */
  sourceUrl: string;
};

/** Verified public places — used for static HTML, fallback list, and ItemList schema. */
export const curatedPlaces: CuratedPlace[] = [
  {
    name: "Centennial Hills Park",
    address: "7101 N Buffalo Dr, Las Vegas, NV 89131",
    category: "parks",
    schemaType: "Park",
    note: "City of Las Vegas regional park with sports fields, splash pads, and trails.",
    sourceUrl: "https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Centennial-hills-park",
  },
  {
    name: "Lone Mountain Regional Park",
    address: "9825 W Lone Mountain Rd, Las Vegas, NV 89129",
    category: "parks",
    schemaType: "Park",
    note: "Clark County regional park with trails and picnic areas.",
    sourceUrl:
      "https://www.clarkcountynv.gov/government/departments/parks___recreation/services/area_reservations/",
  },
  {
    name: "Red Rock Canyon National Conservation Area",
    address: "1000 Scenic Loop Dr, Las Vegas, NV 89161",
    category: "parks",
    schemaType: "Park",
    note: "BLM scenic loop and visitor center west of Centennial Hills.",
    sourceUrl: "https://www.blm.gov/visit/red-rock-canyon-national-conservation-area",
  },
  {
    name: "Centennial Hills Active Adult Center",
    address: "6601 N Buffalo Dr, Las Vegas, NV 89131",
    category: "fitness",
    schemaType: "ExerciseGym",
    note: "Clark County recreation programs for adults 50+.",
    sourceUrl: "https://www.clarkcountynv.gov/government/departments/parks___recreation/",
  },
  {
    name: "Centennial Hills Library",
    address: "6711 N Buffalo Dr, Las Vegas, NV 89131",
    category: "shopping",
    schemaType: "Library",
    note: "Las Vegas-Clark County Library District branch.",
    sourceUrl: "https://lvccld.org/locations/CH/",
  },
  {
    name: "Smith's Food and Drug",
    address: "7130 N Durango Dr, Las Vegas, NV 89149",
    category: "grocery",
    schemaType: "GroceryStore",
    sourceUrl: "https://www.kroger.com/stores/grocery/nv/las-vegas/smiths-food-and-drug-montecito-marketplace/70600320",
  },
  {
    name: "Downtown Summerlin",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "shopping",
    schemaType: "ShoppingCenter",
    note: "Dining and retail west of the Strip.",
    sourceUrl: "https://summerlin.com/experience/downtown-summerlin/",
  },
  {
    name: "MountainView Hospital",
    address: "3100 N Tenaya Way, Las Vegas, NV 89128",
    category: "healthcare",
    schemaType: "Hospital",
    sourceUrl: "https://www.sunrisehealthinfo.com/locations/mountainview-hospital",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    address: "6900 N Durango Dr, Las Vegas, NV 89149",
    category: "healthcare",
    schemaType: "Hospital",
    sourceUrl: "https://www.centennialhillshospital.com/about",
  },
  {
    name: "Dean Lamar Allen Elementary School",
    address: "6641 N Buffalo Dr, Las Vegas, NV 89131",
    category: "schools",
    schemaType: "School",
    note: "Verify assigned schools for each listing on the CCSD Zoning Search.",
    sourceUrl: "https://www.ccsd.net/schools/dean-lamar-allen-elementary-school",
  },
  {
    name: "Centennial High School",
    address: "7111 W Azure Dr, Las Vegas, NV 89131",
    category: "schools",
    schemaType: "School",
    note: "Verify assigned schools for each listing on the CCSD Zoning Search.",
    sourceUrl: "https://www.ccsd.net/schools/centennial-high-school",
  },
  {
    name: "Badlands Golf Club",
    address: "911 Alta Dr, Las Vegas, NV 89128",
    category: "golf",
    schemaType: "GolfCourse",
    sourceUrl: "https://www.badlandsgc.com/",
  },
];

export type AmenityContentSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const amenityWrittenSections: AmenityContentSection[] = [
  {
    id: "dining",
    title: "Dining near Centennial Hills",
    paragraphs: [
      "Centennial Hills buyers often shop and dine along the Centennial Center corridor and at nearby Aliante, then head to Downtown Summerlin for additional restaurant options. Chain and local spots cluster near Durango Drive and the 215 Beltway for quick weeknight meals.",
      "Dr. Jan Duffy tours buyers through these corridors during neighborhood drives so you can judge commute, parking, and walkability before you write an offer.",
    ],
  },
  {
    id: "parks-recreation",
    title: "Parks and recreation",
    paragraphs: [
      "Centennial Hills Park anchors outdoor life with fields, playgrounds, and paths. Lone Mountain Regional Park adds desert trails and open views minutes north. Red Rock Canyon is the signature weekend escape for hiking and scenic drives.",
      "Clark County recreation centers, including the Centennial Hills Active Adult Center on Buffalo Drive, host fitness and community programs that many northwest Las Vegas households use year-round.",
    ],
  },
  {
    id: "golf",
    title: "Golf",
    paragraphs: [
      "Public and private golf options sit within a short drive, including Badlands Golf Club and guard-gated courses toward Summerlin West and Red Rock Country Club. Tee times and membership rules vary by club; Dr. Jan Duffy can point you to communities that match your golf lifestyle.",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    paragraphs: [
      "MountainView Hospital on Tenaya Way and Centennial Hills Hospital on Durango Drive are two full-service hospitals northwest residents reference for emergency and specialty care. Urgent care and physician offices line Durango and Rainbow corridors.",
      "Buyers relocating from out of state often ask about hospital proximity; both facilities are reachable by surface streets without crossing the Strip.",
    ],
  },
  {
    id: "shopping",
    title: "Shopping and errands",
    paragraphs: [
      "Grocery runs typically hit Smith's and other chains along Durango. Larger retail trips often go to Downtown Summerlin or the Centennial Hills / Aliante shopping nodes. IKEA and big-box options sit along the northern 215 corridor for furniture and home projects.",
    ],
  },
  {
    id: "schools",
    title: "Schools",
    paragraphs: [
      "Centennial Hills sits in the Clark County School District. Dean Lamar Allen Elementary and Centennial High School are well-known anchors in the 89131 / 89144 area. Which CCSD schools are assigned to a specific address? Verify with the CCSD Zoning Search before you buy.",
    ],
  },
  {
    id: "commute",
    title: "Commute and regional access",
    paragraphs: [
      "US-95 and the 215 Beltway link Centennial Hills to the Las Vegas Strip, Harry Reid International Airport, and Downtown Summerlin. Approximate midday driving times vary with traffic: many residents plan roughly 25–35 minutes to the Strip or airport and about 15–25 minutes to Downtown Summerlin — always verify with your own drive during your typical commute hours.",
    ],
  },
];

export const amenitiesFaqs = [
  {
    question: "What grocery stores are near Centennial Hills?",
    answer:
      "Smith's Food and Drug on Durango Drive and additional grocers along the Centennial Center and Aliante corridors serve Centennial Hills; most residents reach a full-service store within about 10 minutes by car.",
  },
  {
    question: "How far is Centennial Hills from the Las Vegas Strip?",
    answer:
      "Centennial Hills is northwest of the Strip; approximate midday driving time is often 25–35 minutes via US-95 or the 215 Beltway, depending on traffic and your starting subdivision.",
  },
  {
    question: "Are there hospitals near Centennial Hills?",
    answer:
      "Yes. MountainView Hospital (Tenaya Way) and Centennial Hills Hospital (Durango Drive) are the two major hospitals northwest buyers ask about, with urgent care and medical offices along Durango and Rainbow.",
  },
  {
    question: "What parks does Centennial Hills have?",
    answer:
      "Centennial Hills Park on Buffalo Drive is the flagship community park with sports fields and playgrounds; Lone Mountain Regional Park and Red Rock Canyon add trails and desert recreation within a short drive.",
  },
  {
    question: "Which CCSD schools are assigned to Centennial Hills addresses?",
    answer:
      "Centennial Hills is in the Clark County School District. Assigned schools depend on the street address — use the CCSD Zoning Search to confirm elementary, middle, and high school assignments before you buy.",
  },
  {
    question: "Where do Centennial Hills residents shop?",
    answer:
      "Daily errands use grocers and services along Durango and Centennial Center; larger retail and dining trips often go to Downtown Summerlin or Aliante.",
  },
  {
    question: "How do I explore homes near these amenities?",
    answer:
      "Call Dr. Jan Duffy at (702) 903-1952 for same-day showings in ZIP codes 89135, 89138, and 89144, or browse live listings and pair a tour with this amenity map.",
  },
];

export function googleMapsEmbedUrl(lat: number, lng: number, zoom = communityAmenitiesConfig.mapEmbedZoom): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

export function directionsUrlForPlace(name: string, address: string): string {
  const query = encodeURIComponent(`${name}, ${address}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}

export function curatedPlacesForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return curatedPlaces.filter((place) => place.category === category);
}

/** Places with verified street addresses — safe for ItemList JSON-LD */
export function curatedPlacesForSchema(): CuratedPlace[] {
  return curatedPlaces.filter((place) => place.address.trim().length > 0);
}
