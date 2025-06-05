import Icons from "./icons";

const NAVBAR_ITEMS = [
  { name: "Home", link: "/" },
  { name: "Tracking", link: "/tracking" },
  { name: "Services", link: "/services" },
  { name: "About us", link: "/aboutus" },
  { name: "Contact us", link: "/contactus" },
  { name: "EN", link: "/en" },
];

const FOOTER_OTHER_ITEMS = [{ name: "Terms & Conditions" }, { name: "Privacy" }, { name: "Cookies" }];

const SERVICES = [
  { name: "Transport", icon: Icons.TRUCK },
  { name: "Manpower", icon: Icons.ELECTRICITY },
  { name: "Fulfillment", icon: Icons.OUTLINE },
  { name: "Storage", icon: Icons.STORAGE },
  { name: "Last Mile Solution", icon: Icons.PACKING_BOX },
  { name: "Contracting", icon: Icons.CONTRACT },
];

const ABOUT_US_FIGURES = [
  { label: "Delivered Packages", value: <h1>1255+</h1> },
  {
    label: "Years of Experience",
    value: (
      <h1>
        <span>10+</span>
      </h1>
    ),
  },
  { label: "Happy Clients", value: <h1>5467+</h1> },
];

const CLIENTS_REVIEWS = [
  {
    name: "Sienna Hewitt",
    description:
      "I've been using this transport service for over a year, and they've never let me down. Whether it's a local delivery or long-",
  },
  {
    name: "Kari Rasmussen",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
  {
    name: "Amélie Laurent",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
  {
    name: "Aliah Lane",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
  {
    name: "Eduard Franz",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
  {
    name: "Lily-Rose Chedjou",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
];

const MISSION = [
  { label: "Reliable and Efficient Service" },
  { label: "Innovation and Excellence" },
  { label: "Integrity and Safety First" },
];

const VISION = [
  { label: "Industry Leadership" },
  { label: "Sustainable Growth" },
  { label: "Community & Business Impact" },
];

const Enums = {
  NAVBAR_ITEMS,
  FOOTER_OTHER_ITEMS,
  SERVICES,
  ABOUT_US_FIGURES,
  CLIENTS_REVIEWS,
  MISSION,
  VISION,
};

export default Enums;
