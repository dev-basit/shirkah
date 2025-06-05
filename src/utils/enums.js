import Icons from "./icons";

const NAVBAR_ITEMS = [
  { name: "Home" },
  { name: "Tracking" },
  { name: "Services" },
  { name: "About us" },
  { name: "Contact us" },
  { name: "EN" },
];

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

const Enums = { NAVBAR_ITEMS, SERVICES, ABOUT_US_FIGURES };

export default Enums;
