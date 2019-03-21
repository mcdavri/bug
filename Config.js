/** @format */

import Images from "./Images";
import Constants from "./Constants";
import Icons from "./Icons";

export default {
  /**
   * Step 1: change to your website URL and the wooCommerce API consumeKey
   * Moved to AppConfig.json
   */

  /**
     Step 2: Setting Product Images
     - ProductSize: Explode the guide from: update the product display size: https://mstore.gitbooks.io/mstore-manual/content/chapter5.html
     The default config for ProductSize is disable due to some problem config for most of users.
     If you have success config it from the Wordpress site, please enable to speed up the app performance
     - HorizonLayout: Change the HomePage horizontal layout - https://mstore.gitbooks.io/mstore-manual/content/chapter6.html
       Update Oct 06 2018: add new type of categories
       NOTE: name is define value --> change field in Language.js
       Moved to AppConfig.json
     */
  ProductSize: {
    enable: false,
  },

  HomeCategories: [
    {
      category: 18,
      image: require("@images/categories_icon/ic_shorts.png"),
      //colors: ["#4facfe", "#00f2fe"],
      colors: "",
    },
    {
      category: 21,
      image: require("@images/categories_icon/ic_tshirt.png"),
      //colors: ["#43e97b", "#38f9d7"],
      colors: "",
    },
    {
      category: 31,
      image: require("@images/categories_icon/ic_panties.png"),
      // colors: ["#fa709a", "#fee140"],
      colors: "",
    },
    {
      category: 26,
      image: require("@images/categories_icon/ic_dress.png"),
      // colors: ["#7F00FF", "#E100FF"],
      colors: "",
    },
    {
      category: 25,
      image: require("@images/categories_icon/ic_glasses.png"),
      // colors: ["#30cfd0", "#330867"],
      colors: "",
    },
    {
      category: 27,
      image: require("@images/categories_icon/ic_socks.png"),
      // colors: ["#c471f5", "#fa71cd"],
      colors: "",
    },
    {
      category: 23,
      image: require("@images/categories_icon/ic_shoes.png"),
      // colors: ["#2af598", "#009efd"],
      colors: "",
    },
    {
      category: 30,
      image: require("@images/categories_icon/ic_woman_shoes.png"),
      // colors: ["#f43b47", "#453a94"],
      colors: "",
    },
  ],
  /**
     step 3: Config image for the Payment Gateway
     Notes:
     - Only the image list here will be shown on the app but it should match with the key id from the WooCommerce Website config
     - It's flexible way to control list of your payment as well
     Ex. if you would like to show only cod then just put one cod image in the list
     * */
  Payments: {
    cod: require("@images/payment_logo/cash_on_delivery.png"),
    // paypal: require("@images/payment_logo/PayPal.png"),
    // stripe: require("@images/payment_logo/stripe.png"),
  },

  /**
     Step 4: Advance config:
     - showShipping: option to show the list of shipping method
     - showStatusBar: option to show the status bar, it always show iPhoneX
     - LogoImage: The header logo
     - LogoWithText: The Logo use for sign up form
     - LogoLoading: The loading icon logo
     - appFacebookId: The app facebook ID, use for Facebook login
     - CustomPages: Update the custom page which can be shown from the left side bar (Components/Drawer/index.js)
     - WebPages: This could be the id of your blog post or the full URL which point to any Webpage (responsive mobile is required on the web page)
     - CategoryListView: default layout for category (true/false)
     - intro: The on boarding intro slider for your app
     - menu: config for left menu side items (isMultiChild: This is new feature from 3.4.5 that show the sub products categories)
     * */
  shipping: {
    visible: true,
    zoneId: 1, // depend on your woocommerce
    time: {
      //free_shipping: "4 - 7 Days",
      flat_rate: "1 - 4 Days",
      local_pickup: "1 - 4 Days",
    },
  },
  showStatusBar: true,
  LogoImage: require("@images/logo-main.png"),
  LogoWithText: require("@images/logo_with_text.png"),
  LogoLoading: require("@images/logo.png"),

  showAdmobAds: false,
  AdMob: {
    deviceID: "pub-2101182411274198",
    unitID: "ca-app-pub-2101182411274198/4100506392",
    unitInterstitial: "ca-app-pub-2101182411274198/8930161243",
    isShowInterstital: true,
  },
  appFacebookId: "813377535663770",
  CustomPages: { contact_id: 10941 },
  WebPages: { marketing: "https://kitchenstuffs.org" },

  intro: [
    {
      key: "page1",
      title: "WHO WE ARE?",
      text:
        "KitchenStuffs is an online retail platform of FRONTCAS NIGERIA LIMITED (FNL) that specializes in sales of foodstuffs",
      icon: "ios-basket-outline",
      colors: ["#0FF0B3", "#036ED9"],
    },
    {
      key: "page2",
      title: "Our Aim...",
      text:
        "Our aim is to be a leading online foodstuff retailer (brand) committed towards the supply of safe and fresh products at affordable prices. ",
      icon: "ios-finger-print-outline",
      colors: ["#13f1fc", "#0470dc"],
    },
    {
      key: "page3",
      title: "RETURNS AND EXCHANGE ",
      text: "In situations whereby a damaged or wrong items are delivered and the error is on our part, we shall replace the item(s) immediately at no cost to the customer. However, the delivery officer should be notified in case of any observations at the point of delivery. Once customers have taken delivery of an item(s) and signed in confirmation, he or she is deemed to have taken ownership of the item(s) and Kitchenstuffs will not accept such returns.",
      icon: "ios-card-outline",
      colors: ["#b1ea4d", "#459522"],
    },
  ],

  /**
   * Config For Left Menu Side Drawer
   * @param goToScreen 3 Params (routeName, params, isReset = false)
   * BUG: Language can not change when set default value in Config.js ==> pass string to change Languages
   */
  menu: {
    // has child categories
    isMultiChild: true,
    // Unlogged
    listMenuUnlogged: [
      {
        text: "Login",
        routeName: "LoginScreen",
        params: {
          isLogout: false,
        },
        icon: Icons.MaterialCommunityIcons.SignIn,
      },
    ],
    // user logged in
    listMenuLogged: [
      {
        text: "Logout",
        routeName: "LoginScreen",
        params: {
          isLogout: true,
        },
        icon: Icons.MaterialCommunityIcons.SignOut,
      },
    ],
    // Default List
    listMenu: [
      {
        text: "Shop",
        routeName: "Home",
        icon: Icons.MaterialCommunityIcons.Home,
      },
      {
        text: "News",
        routeName: "NewsScreen",
        icon: Icons.MaterialCommunityIcons.News,
      },
      // {
      //   text: "contactus",
      //   routeName: "CustomPage",
      //   params: {
      //     id: 10941,
      //     title: "contactus",
      //   },
      //   icon: Icons.MaterialCommunityIcons.Pin,
      // },
      {
        text: "Blog",
        routeName: "CustomPage",
        params: {
          url: "https://kitchenstuffs.org/blog/",
        },
        icon: Icons.MaterialCommunityIcons.Email,
      },
      {
        text: "Setting",
        routeName: "SettingScreen",
        icon: Icons.MaterialCommunityIcons.Setting,
      },
    ],
  },

  // define menu for profile tab
  ProfileSettings: [
    {
      label: "WishList",
      routeName: "WishListScreen",
    },
    {
      label: "MyOrder",
      routeName: "MyOrders",
    },
    {
      label: "Address",
      routeName: "Address",
    },
    {
      label: "Currency",
      isActionSheet: true,
    },
    // only support mstore pro
    //   {
    //     label: Languages.Languages,
    //     routeName: 'SettingScreen',
    //     value: language.lang,
    //   },
    // {
    //   label: "PushNotification",
    // },
    {
      label: "DarkTheme",
    },
    {
      label: "contactus",
      routeName: "CustomPage",
      params: {
        url: "https://kitchenstuffs.org/contact-us/",
      },
    },
    {
      label: "F.A.Q.S",
      routeName: "CustomPage",
      params: {
        url: "https://kitchenstuffs.org/f-a-q-s/",
      },
    },
    {
      label: "Terms & Condition",
      routeName: "CustomPage",
      params: {
        url: "https://kitchenstuffs.org/welcome/terms-and-conditions/",
      },
    },
    {
      label: "About",
      routeName: "CustomPage",
      params: {
        url: "https://kitchenstuffs.org/about-us/",
      },
    },
  ],

  // Layout select
  layouts: [
    {
      layout: Constants.Layout.card,
      image: Images.icons.iconCard,
      text: "cardView",
    },
    {
      layout: Constants.Layout.simple,
      image: Images.icons.iconRight,
      text: "simpleView",
    },
    {
      layout: Constants.Layout.twoColumn,
      image: Images.icons.iconColumn,
      text: "twoColumnView",
    },
    {
      layout: Constants.Layout.threeColumn,
      image: Images.icons.iconThree,
      text: "threeColumnView",
    },
    {
      layout: Constants.Layout.horizon,
      image: Images.icons.iconHorizal,
      text: "horizontal",
    },
    {
      layout: Constants.Layout.advance,
      image: Images.icons.iconAdvance,
      text: "advanceView",
    },
  ],

  // Default theme loading, this could able to change from the user profile (reserve feature)
  Theme: {
    isDark: false,
  },

  // new list category design
  CategoryListView: true,

  DefaultCurrency: {
    symbol: "₦",
    name: "Naira",
    code: "NGN",
    name_plural: "Naira",
    decimal: ".",
    thousand: ",",
    precision: 2,
    format: "%s%v", // %s is the symbol and %v is the value
  },

  DefaultCountry: {
    code: "en",
    RTL: false,
    language: "English",
    countryCode: "US",
    hideCountryList: false, // when this option is try we will hide the country list from the checkout page, default select by the above 'countryCode'
  },
  HideCartAndCheckout: false,

  /**
   * Config notification onesignal, only effect for the Pro version
   */
  OneSignal: {
    appId: "43948a3d-da03-4e1a-aaf4-cb38f0d9ca51",
  },
  /**
   * Login required
   */
  Login: {
    RequiredLogin: false, // required before using the app
    AnonymousCheckout: false, // required before checkout or checkout anonymous
  },

  Layout: {
    HideHomeLogo: false,
    HideLayoutModal: false
  }
};
