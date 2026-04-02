import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  hi: {
    translation: {
      home: 'होम', about: 'परिचय', shops: 'दुकानें', order: 'ऑर्डर', map: 'नक्शा',
      'home·home': 'होम · Home', 'about·about': 'परिचय · About',
      'shops·shops': 'दुकानें · Shops', 'order·order': 'ऑर्डर · Order', 'map·map': 'नक्शा · Map',
      order_now: 'अभी ऑर्डर करें', order_now_sub: 'Order Now',
      find_us: 'हमें खोजें', find_us_sub: 'Find Us on Map',
      our_legacy: 'हमारी विरासत · Our Legacy',
      office: 'कार्यालय · Office',
      read_more: 'पूरी जीवनी पढ़ें · Read Full Story →',
      daily_shops: 'स्थायी दुकानें (रोज़ खुली) · Permanent Shops',
      weekly_stalls: 'साप्ताहिक स्टॉल · Weekly Stalls (Tue & Sat)',
      order_title: 'ऑर्डर और डिलीवरी · Order & Delivery',
      map_title: 'स्थान और आसपास · Location & Nearby',
      about_title: 'परिचय और विरासत · About & Legacy',
      send_order: 'WhatsApp पर ऑर्डर भेजें',
      contact: 'संपर्क · Contact',
    }
  },
  en: {
    translation: {
      home: 'Home', about: 'About', shops: 'Shops', order: 'Order', map: 'Map',
      'home·home': 'Home · होम', 'about·about': 'About · परिचय',
      'shops·shops': 'Shops · दुकानें', 'order·order': 'Order · ऑर्डर', 'map·map': 'Map · नक्शा',
      order_now: 'Order Now', order_now_sub: 'अभी ऑर्डर करें',
      find_us: 'Find Us', find_us_sub: 'हमें खोजें',
      our_legacy: 'Our Legacy · हमारी विरासत',
      office: 'Office · कार्यालय',
      read_more: 'Read Full Story · पूरी जीवनी →',
      daily_shops: 'Permanent Shops (Daily) · स्थायी दुकानें',
      weekly_stalls: 'Weekly Stalls (Tue & Sat) · साप्ताहिक स्टॉल',
      order_title: 'Order & Delivery · ऑर्डर और डिलीवरी',
      map_title: 'Location & Nearby · स्थान और आसपास',
      about_title: 'About & Legacy · परिचय और विरासत',
      send_order: 'Send Order on WhatsApp',
      contact: 'Contact · संपर्क',
    }
  }
};

i18n.use(initReactI18next).init({
  resources, lng: 'hi', fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
