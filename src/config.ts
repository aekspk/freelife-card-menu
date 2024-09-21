import Recommend1 from "./assets/recommendImage/recommend1.webp";
import Recommend2 from "./assets/recommendImage/recommend2.webp";
import Recommend3 from "./assets/recommendImage/recommend3.webp";
import Recommend4 from "./assets/recommendImage/recommend4.webp";
import Recommend5 from "./assets/recommendImage/recommend5.webp";
import MenuFood from "./assets/MenuFood.webp";

// 1.ใส่โลโก้
export const logo = "/src/assets/logo.png";

// export const promotionImages = [
//   "/src/assets/Promotion.png",
//   "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
// ];

// 2.ใส่รูปเมนูแนะนำ(ข้อมูลนี้จะนำไปใช้งานบนวงล้อด้วย)
export const recommendMenuItems = [
  {
    imgSrc: Recommend1,
    text: {
      TH: "ข้าวกระเพราหมูแดด",
    },
    segment: "🥶",
  },
  {
    imgSrc: Recommend2,
    text: {
      TH: "ข้าวหมูแดด",
    },
    segment: "🙊",
  },
  {
    imgSrc: Recommend3,
    text: {
      TH: "ข้าวผัดมันเนื้อริบอาย",
    },
    segment: "🤤",
  },
  {
    imgSrc: Recommend4,
    text: {
      TH: "ข้าวกระเพราหมูสับ",
    },
    segment: "🤩",
  },
  {
    imgSrc: Recommend5,
    text: {
      TH: "ข้าวกระเพราเนื้อสับ",
    },
    segment: "🤫",
  },
];

// 3.ใส่รูปเมนูอาหาร
export const menuImage = {
  TH: MenuFood,
};

// 4.ใส่ช่องทางการติดต่อ
export const contact = [
  {
    name: "Line",
    icon: "/src/assets/socialIcon/line.svg",
    link: "https://line.me/ti/p/JdHPoEJKGs",
  },
  {
    name: "Facebook",
    icon: "/src/assets/socialIcon/facebook.svg",
    link: "https://www.facebook.com/SoftCooking",
  },
];
