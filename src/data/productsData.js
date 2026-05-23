
import sherwaniData from "./productData/sherwaniData";
import coatPantData from "./productData/coatPantData";
import kurtaData from "./productData/kurtaData";
import kurtaSetData from "./productData/kurtaSetData";
import indoWesternData from "./productData/indoWesternData";
import nagraData from "./productData/nagraData";
import shawlSetData from "./productData/shawlSetData";
import jodhpuriData from "./productData/jodhpuriData";
import malaData from "./productData/malaData";

const products = [
  {
    id: "sherwani",

    title: "Sherwani Collection",

    items: sherwaniData.map((item) => ({
      ...item,

      category: "Sherwani",

      variants: item.variants || [
        {
          articleNo: item.articleNo || "SH-101",

          image:
            item.image ||
            "/images/sherwani/s1.jpg",

          price: item.price || 3999,

          color: item.color || "Black",

          size: item.size || "M",
        },
      ],
    })),
  },

  {
    id: "coatpant",

    title: "Coat Pant Collection",

    items: coatPantData.map((item) => ({
      ...item,

      category: "Coat Pant",

      variants: item.variants || [
        {
          articleNo: item.articleNo || "CP-101",

          image:
            item.image ||
            "/images/coatpant/cp1.jpg",

          price: item.price || 4999,

          color: item.color || "Black",

          size: item.size || "L",
        },
      ],
    })),
  },

  {
    id: "kurta",

    title: "Kurta Collection",

    items: kurtaData.map((item) => ({
      ...item,

      category: "Kurta",

      variants: item.variants || [
        {
          articleNo: item.articleNo || "KU-101",

          image:
            item.image ||
            "/images/kurta/k1.jpg",

          price: item.price || 1999,

          color: item.color || "White",

          size: item.size || "M",
        },
      ],
    })),
  },

  {
    id: "kurtaset",

    title: "Kurta Set Collection",

    items: kurtaSetData.map((item) => ({
      ...item,

      category: "Kurta Set",

      variants: item.variants || [
        {
          articleNo: item.articleNo || "KS-101",

          image:
            item.image ||
            "/images/kurtaset/ks1.jpg",

          price: item.price || 2499,

          color: item.color || "Cream",

          size: item.size || "L",
        },
      ],
    })),
  },

  {
    id: "indowestern",

    title: "Indo Western Collection",

    items: indoWesternData.map((item) => ({
      ...item,

      category: "Indo Western",

      variants: item.variants || [
        {
          articleNo: item.articleNo || "IW-101",

          image:
            item.image ||
            "/images/indowestern/iw1.jpg",

          price: item.price || 5999,

          color: item.color || "Blue",

          size: item.size || "XL",
        },
      ],
    })),
  },

  {
    id: "jodhpuri",

    title: "Jodhpuri Suit Collection",

    items: jodhpuriData.map((item) => ({
      ...item,

      category: "Jodhpuri Suit",

      variants: item.variants || [
        {
          articleNo: item.articleNo || "JS-101",

          image:
            item.image ||
            "/images/jodhpuri/j1.jpg",

          price: item.price || 5499,

          color: item.color || "Black",

          size: item.size || "L",
        },
      ],
    })),
  },

  {
    id: "nagra",

    title: "Nagra Collection",

    items: nagraData.map((item) => ({
      ...item,

      category: "Nagra",

      variants: item.variants || [
        {
          articleNo: item.articleNo || "NG-101",

          image:
            item.image ||
            "/images/nagra/n1.jpg",

          price: item.price || 1499,

          color: item.color || "Brown",

          size: item.size || "8",
        },
      ],
    })),
  },

  {
    id: "shawl",

    title: "Shawl Set Collection",

    items: shawlSetData.map((item) => ({
      ...item,

      category: "Shawl Set",

      variants: item.variants || [
        {
          articleNo: item.articleNo || "SS-101",

          image:
            item.image ||
            "/images/shawlset/ss1.jpg",

          price: item.price || 1999,

          color: item.color || "Maroon",

          size: item.size || "Free",
        },
      ],
    })),
  },
  {
  id: "mala",

  title: "Mala Collection",

  items: malaData.map((item) => ({
    ...item,

    category: "Mala",

    variants: item.variants || [
      {
        articleNo: item.articleNo || "ML-101",

        image:
          item.image ||
          "/images/mala/m1.jpg",

        price: item.price || 999,

        color: item.color || "Golden",

        size: item.size || "Free",
      },
    ],
  })),
},
];

export default products;