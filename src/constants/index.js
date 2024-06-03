import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
  macroImg,
  mm13Img,
  mm24Img,
  mm28Img,
  mm35Img,
  mm48Img,
  mm120Img,
  silentImg,
  focusImg,
  cameraImg,
  flashlightImg,
  voiceMemoImg,
  translateImg,
  magnifierImg,
  shortcutImg,
  accessibilityImg,
  ringIconImg,
  focusIconImg,
  cameraIconImg,
  flashlightIconImg,
  voiceMemoIconImg,
  translateIconImg,
  magnifierIconImg,
  shortcutIconImg,
  accessibilityIconImg,
  tradeInImg,
  appleCardImg,
  carrierDealsImg,
  deliveryImg,
  specialistAltImg,
  personalImg,
  shoppingImg,
  iphone15ProImg,
  iphone15Img,
  a17Img,
  camera3Img,
  batteryImg,
  a16Img,
  camera2Img,
  allColorsImg,
  swatchAllColorsImg,
  naturalTitaniumImg,
  blueTitaniumImg,
  whiteTitaniumImg,
  blackTitaniumImg,
} from "../utils";

export const navLists = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "Airpods",
  "TV & Home",
  "Entertainment",
  "Accesories",
  "Support",
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const modelsExpanded = [
  {
    id: 1,
    title: '6.1" iPhone 15 Pro in four colors',
    img: allColorsImg,
    icon: swatchAllColorsImg,
  },
  {
    id: 2,
    title:
      '6.7" iPhone 15 Pro max and \n 6.1" iPhone 15 Pro in Natural Titanium',
    color: "#8F8A81",
    img: naturalTitaniumImg,
  },
  {
    id: 3,
    title: '6.7" iPhone 15 Pro max and \n 6.1" iPhone 15 Pro in Blue Titanium',
    color: "#53596E",
    img: blueTitaniumImg,
  },
  {
    id: 4,
    title: '6.7" iPhone 15 Pro max and \n 6.1" iPhone 15 Pro in White Titanium',
    color: "#C9C8C2",
    img: whiteTitaniumImg,
  },
  {
    id: 5,
    title: '6.7" iPhone 15 Pro max and \n 6.1" iPhone 15 Pro in Black Titanium',
    color: "#454749",
    img: blackTitaniumImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const cameraSlider = [
  {
    id: 1,
    time: "0.5x",
    text: "Ultra Wide | Macro",
    image: macroImg,
  },
  {
    id: 2,
    time: "0.5x",
    text: "Ultra Wide | 13 mm",
    image: mm13Img,
  },
  {
    id: 3,
    time: "1x",
    text: "Main | 24 mm",
    image: mm24Img,
  },
  {
    id: 4,
    time: "1x",
    text: "Main | 28 mm",
    image: mm28Img,
  },
  {
    id: 5,
    time: "1x",
    text: "Main | 35 mm",
    image: mm35Img,
  },
  {
    id: 6,
    time: "2x",
    text: "Telephoto | 48 mm",
    image: mm48Img,
  },
  {
    id: 7,
    time: "New 5x",
    text: "Telephoto | 120 mm",
    image: mm120Img,
  },
];

export const actionButtons = [
  { id: 1, text: "Silent mode", image: silentImg, icon: ringIconImg },
  { id: 2, text: "Focus", image: focusImg, icon: focusIconImg },
  { id: 3, text: "Camera", image: cameraImg, icon: cameraIconImg },
  { id: 4, text: "Flashlight", image: flashlightImg, icon: flashlightIconImg },
  { id: 5, text: "Voice Memo", image: voiceMemoImg, icon: voiceMemoIconImg },
  { id: 6, text: "Translate", image: translateImg, icon: translateIconImg },
  { id: 7, text: "Magnifier", image: magnifierImg, icon: magnifierIconImg },
  { id: 8, text: "Shortcut", image: shortcutImg, icon: shortcutIconImg },
  {
    id: 9,
    text: "Accessibility",
    image: accessibilityImg,
    icon: accessibilityIconImg,
  },
];

export const shopSlides = [
  {
    id: 1,
    img: tradeInImg,
    title: "Save with Apple\n Trade In.",
    description:
      "Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.",
  },
  {
    id: 2,
    img: appleCardImg,
    title: "Pay over time,\n interest‑free.",
    description:
      "When you choose to check out with Apple Card Monthly Installments.",
  },
  {
    id: 3,
    img: carrierDealsImg,
    title: "iPhone carrier deals.\n Right here at Apple.\n For as low as $0.",
    description:
      "Includes trade‑in and carrier credits. AT&T: up to $1000. T‑Mobile: up to $800. Verizon: up to $830.",
  },
  {
    id: 4,
    img: deliveryImg,
    title: "Get flexible delivery and\n easy pickup.",
    description:
      "Choose two‑hour delivery from an Apple Store, free delivery, or easy pickup options.",
  },
  {
    id: 5,
    img: specialistAltImg,
    title: "Shop live with\n a Specialist.",
    description:
      "Let us guide you live over video and answer all of your questions.",
  },
  {
    id: 6,
    img: personalImg,
    title: "Get to know your\n new iPhone.",
    description:
      "Learn how to get the most out of your new iPhone with a free one‑on‑one Personal Session.",
  },
  {
    id: 7,
    img: shoppingImg,
    title: "Explore a shopping\n experience designed\n around you.",
    description: "When you shop in the Apple Store app.",
  },
];

export const iphoneSlides = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    img: iphone15ProImg,
    colors: [
      "finish-natural-titanium",
      "finish-blue-titanium",
      "finish-white-titanium",
      "finish-black-titanium",
    ],
    price: "From $999 or $41.62/mo. for 24 mo.",
    content: [
      { img: a17Img, name: "A17 Pro chip\n with 6-core GPU" },
      {
        img: camera3Img,
        name: "Pro camera system",
        description:
          "Our most advanced 48MP Main camera\n 3x or 5x Telephoto camera\n Ultra Wide camera",
      },
      { img: batteryImg, name: "Up to 29 hours video\n playback" },
    ],
  },
  {
    id: 2,
    name: "iPhone 15",
    img: iphone15Img,
    colors: [
      "finish-iphone-15-pink",
      "finish-iphone-15-yellow",
      "finish-iphone-15-green",
      "finish-iphone-15-blue",
      "finish-black",
    ],
    price: "From $799 or $33.29/mo. for 24 mo.",
    content: [
      { img: a16Img, name: "A16 Bionic chip\n with 5-core GPU" },
      {
        img: camera2Img,
        name: "Advanced dual-camera\n system",
        description: "48MP Main camera\n 2x Telephoto\n Ultra Wide camera",
      },
      { img: batteryImg, name: "Up to 26 hours video\n playback" },
    ],
  },
];

export const furtherSlides = [
  {
    id: 1,
    name: "Explore iPhone",
    links: [
      "Explore All iPhone",
      "iPhone 15 Pro",
      "iPhone 15",
      "iPhone 14",
      "iPhone 13",
      "iPhone SE",
    ],
    second: ["Compare iPhone", "Switch from Android"],
  },
  {
    id: 2,
    name: "Shop iPhone",
    links: [
      "Shop iPhone",
      "iPhone Accesories",
      "Apple Trade In",
      "Carrier Deals at Apple",
      "Financing",
    ],
  },
  {
    id: 3,
    name: "Go Further",
    links: [
      "iPhone Support",
      "AppleCare+ for iPhone",
      "iOS 17",
      "Apps by Apple",
      "iPhone Privacy",
      "iCloud+",
      "Wallet, Pay, Card",
      "Siri",
    ],
  },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
