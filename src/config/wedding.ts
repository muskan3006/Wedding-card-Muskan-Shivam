import type { WeddingConfig } from '../types/wedding';

/**
 * =========================================================================
 * WEDDING CONFIGURATION (CENTRALIZED DATA REPOSITORY)
 * =========================================================================
 * Images are organized by section:
 * - /assets/images/hero/
 * - /assets/images/story/
 * - /assets/images/events/
 * - /assets/images/venue/
 * - /assets/images/gallery/
 * 
 * Replace images in those folders with the same filename to update instantly.
 */
export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      name: "Shivam",
      fullName: "Shivam Rathore",
      title: "Groom",
      photo: "assets/images/story/groom-M.jpg",
      bio: "",
      father: "Mr. Sunil Rathore",
      mother: "Mrs. Shashi Rathore"
    },
    bride: {
      name: "Muskan",
      fullName: "Muskan Gupta",
      title: "Bride",
      photo: "assets/images/story/bride.png",
      bio: "",
      father: "Mr. Prashant Gupta",
      mother: "Mrs. Nisha Gupta"
    },
    hashtag: "#ShivamKiMuskan",
    initials: "S & M",
    quote: "In the gentle rhythm of fate, two souls found their sanctuary in each other."
  },

  weddingDate: {
    iso: "2026-12-12T18:30:00+05:30",
    displayDate: "12 December 2026",
    dayOfWeek: "Saturday",
    timeDisplay: "06:30 PM Onwards",
    city: "Faridabad, Delhi NCR",
    country: "India"
  },

  invitationNote: {
    intro: "Together with their loving families",
    familyGreeting: "The Gupta & Rathore Families",
    message: "Cordially invite you to celebrate the holy union of love, laughter, and lifelong friendship as their children embark on their sacred journey together.",
    shlokaSanskrit: "मंगलम् भगवान विष्णुः, मंगलम् गरुडध्वजः। मंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरिः॥",
    shlokaTranslation: "May the divine presence bless this sacred journey with auspicious joy, eternal harmony, and boundless light."
  },

  venue: {
    name: "Klyde Banqueting Suite",
    tagline: "A Luxurious Sanctuary of Elegance & Grand Celebrations",
    address: "14/7, NH-19, Parmeshwari Colony, Sector 31",
    cityStateZip: "Faridabad, Haryana — 121003, India",
    // Direct Google Maps location link provided by RIOT
    googleMapsDirectionsUrl: "https://maps.app.goo.gl/6aRMAMyPZx2QpvSH8",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Klyde+Banqueting+Suite+Faridabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      lat: 28.4428525,
      lng: 77.3091045
    },
    nearby: [
      {
        title: "Sector 28 & 31 Metro Stations",
        distance: "1.2 km (approx. 4 mins)",
        category: "Metro Transit"
      },
      {
        title: "Crown Plaza & NH-19 Corridor",
        distance: "0.8 km (approx. 3 mins)",
        category: "City Access"
      },
      {
        title: "Radisson Blu & Premium Hotels",
        distance: "2.5 km (approx. 7 mins)",
        category: "Accommodations"
      }
    ],
    image: "assets/images/venue/venue-main.jpg"
  },

  residence: {
    name: "The Gupta Residence",
    tagline: "The Warm & Auspicious Abode for Pre-Wedding Festivities",
    address: "79, Pocket B, Block D, Sanjay Gandhi Memorial Nagar, New Industrial Township",
    cityStateZip: "Faridabad, Haryana — 121001, India",
    googleMapsDirectionsUrl: "https://www.google.com/maps/place/79,+Pocket+B,+Block+D,+Sanjay+Gandhi+Memorial+Nagar,+New+Industrial+Township,+Faridabad,+Haryana+121001/@28.4107369,77.2908966,17z/data=!3m1!4b1!4m6!3m5!1s0x390cddd73fbfac2b:0x4ac78c4b3908aa83!8m2!3d28.4107369!4d77.2908966!16s%2Fg%2F11f54799ty?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=28.4107369,77.2908966&t=&z=16&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      lat: 28.4107369,
      lng: 77.2908966
    },
    nearby: [
      {
        title: "BK Chowk & NIT Commercial Market",
        distance: "1.8 km (approx. 6 mins)",
        category: "City Landmark"
      },
      {
        title: "Bata Chowk / Neelam Flyover",
        distance: "2.5 km (approx. 8 mins)",
        category: "Metro & Transit"
      },
      {
        title: "Badkhal Mor Metro Station",
        distance: "3.2 km (approx. 10 mins)",
        category: "Violet Line Metro"
      }
    ],
    eventsHosted: [
      "Tel-Baan",
      "Auspicious Haldi",
      "Mehendi Magic",
      "Ladies Sangeet",
      "Chaak Bhaat"
    ]
  },

  events: [
    {
      id: "tel-baan",
      title: "Tel-Baan",
      subtitle: "Sacred Oil & Turmeric Rituals of Purification",
      date: "Wednesday, 9 December 2026",
      time: "10:00 AM Onwards",
      venue: "Our Residence",
      dressCode: "Traditional Attire",
      description: "An auspicious morning steeped in sacred customs, where elders bless the bride with holy oil, herbal pastes, and prayers for purity and prosperity as the wedding celebrations commence.",
      iconName: "Sparkles",
      image: "assets/images/events/tel-baan.jpg",
      accentColor: "#6c2c3e"
    },
    {
      id: "haldi",
      title: "Auspicious Haldi",
      subtitle: "Sunshine Blessings, Turmeric & Floral Rain",
      date: "Thursday, 10 December 2026",
      time: "11:00 AM Onwards",
      venue: "Our Residence",
      dressCode: "Sunshine Yellow, Ochre & Warm Ivory",
      description: "A joyful traditional morning bathed in marigolds, holy turmeric paste blessings, rose petal showers, and traditional wedding melodies to bless the bride with a radiant glow.",
      iconName: "Sun",
      image: "assets/images/events/auspicious_haldi.jpg",
      accentColor: "#b2781a"
    },
    {
      id: "mehendi",
      title: "Mehendi Magic",
      subtitle: "Intricate Henna Motifs & Festive Merriment",
      date: "Thursday, 10 December 2026",
      time: "6 PM Onwards",
      venue: "Our Residence",
      dressCode: "Vibrant and Colourful Ethnics",
      description: "An enchanting evening celebrating the rich art of henna adorning palms, accompanied by soulful folk melodies, delicious culinary treats, and celebratory laughter.",
      iconName: "Palette",
      image: "assets/images/events/mehndi-magic.jpg",
      accentColor: "#3d5a45"
    },
    {
      id: "sangeet",
      title: "Ladies Sangeet",
      subtitle: "Melodies, Dholak Beats & Joyful Dance",
      date: "Friday, 11 December 2026",
      time: "3 PM Onwards",
      venue: "Our Residence",
      dressCode: "Comfy Ethnics",
      description: "An electrifying musical gathering filled with traditional folk boliyan, rhythmic dholak beats, heartfelt dance performances, and boundless celebration.",
      iconName: "Music",
      image: "assets/images/events/ladies-sangeet.jpg",
      accentColor: "#7a285d"
    },
    {
      id: "chaakbhaat",
      title: "Chaak Bhaat",
      subtitle: "Sacred Earthen Vessels & Maternal Blessings",
      date: "Friday, 11 December 2026",
      time: "6 PM Onwards",
      venue: "Our Residence",
      dressCode: "Traditional Attire",
      description: "A revered family tradition honoring sacred earthen vessels at the Chaak, followed by the loving arrival of maternal uncles bearing auspicious gifts, dry fruits, and heartfelt blessings.",
      iconName: "Sparkles",
      image: "assets/images/events/chaak-bhaat.jpg",
      accentColor: "#582664"
    },
    {
      id: "wedding",
      title: "The Royal Wedding & Varmala",
      subtitle: "Baraat Welcome & Sacred Garland Exchange",
      date: "Saturday, 12 December 2026",
      time: "8 PM Onwards",
      venue: "Klyde Banqueting Suite",
      dressCode: "Traditional Attire",
      description: "With the divine blessings of Shiv–Parvati and Radha–Krishna, join us as we welcome the Baraat and celebrate Muskan & Shivam beginning their sacred journey together amidst love, warmth, and joy.",
      iconName: "Crown",
      image: "assets/images/events/wedding.png",
      accentColor: "#8f3434"
    }
  ],

  story: [
    {
      id: "story-1",
      year: "The Beginning",
      title: "A Serendipitous Encounter",
      subtitle: "When paths aligned softly",
      quote: "Some conversations feel like finding a corner of the world you didn't know was missing.",
      description: "We started as friends, finding comfort in each other's conversations, sharing childhood memories, thoughts, and everything life had to offer. Even on our busiest days, we made time for each other, whether it was half an hour in the morning or a few stolen moments on metro calls. We slowly became each other's safe space, understanding, trusting, and standing by one another in ways no one else could. And somewhere between all those little moments, friendship quietly turned into love. Perhaps that's how we fell in love, not all at once, but gradually, through a thousand little moments that made us choose each other ❤️",
      image: "assets/images/story/story-1MW.jpeg",
      reverse: false
    },
    {
      id: "story-2",
      year: "The Journey",
      title: "Growing Together Through Every Season",
      subtitle: "From quiet glances to unwavering support",
      quote: "In each other, we discovered our truest companion and greatest cheerleader.",
      description: "Through every high and low, laughter and tears, and days that tested us, we kept choosing each other. We turned some dreams into reality and dreamed of many more together, until his dreams became mine, mine became his, and all of them became ours. We grew, held on through every storm, celebrated every little victory, and built a life where we both belonged. And after countless memories and a million little moments, we finally got engaged, turning all those dreams of forever into a promise ❤️",
      image: "assets/images/story/story-2.jpg",
      reverse: true
    },
    {
      id: "story-3",
      year: "The Promise",
      title: "Stepping Into Forever",
      subtitle: "With our hearts full of gratitude",
      quote: "Love is not just looking at each other, but walking side-by-side in the same direction.",
      description: "And now, surrounded by the love and blessings of our families, we’re ready to begin the next chapter of our story. With hearts full of love, we promise to keep choosing each other through every season of life, cherishing this bond and all that lies ahead. A promise of love, togetherness, and forever ❤️",
      image: "assets/images/story/story-3.jpg",
      reverse: false
    }
  ],

  gallery: [
    {
      id: "g2",
      // title: "Quiet Radiance",
       title: "Eternal Moments",
      aspect: "portrait",
      src: "assets/images/gallery/gallery-2.jpg",
      // caption: "Laughter caught unawares — the purest kind of happiness."
      caption: ""
    },
    {
      id: "g8",
      // title: "The Serenade",
      title: "Eternal Moments",
      aspect: "portrait",
      src: "assets/images/gallery/gallery-8.jpg",
      // caption: "Melodies that echo through the corridors of memory."
      caption: ""
    },
    {
      id: "g3",
      // title: "The Regal Sanctum",
      title: "Eternal Moments",
      aspect: "portrait",
      src: "assets/images/gallery/gallery-3.jpg",
      // caption: "The majestic arched colonnades that will bear witness to our vows."
      caption: ""
    },
    {
      id: "g9",
      // title: "The Serenade",
      title: "Eternal Moments",
      aspect: "portrait",
      src: "assets/images/gallery/gallery-9.jpg",
      // caption: "Melodies that echo through the corridors of memory."
      caption: ""
    },
    {
      id: "g1",
      title: "Eternal Moments",
      aspect: "portrait",
      src: "assets/images/gallery/gallery-1.jpg",
      // caption: "Framed in the serene evening warmth of the royal courtyard."
      caption: ""
    },
    {
      id: "g4",
      // title: "Sacred Intricacies",
      title: "Eternal Moments",
      aspect: "portrait",
      src: "assets/images/gallery/gallery-4.jpg",
      // caption: "The delicate touch of henna carrying ancient blessings of love."
      caption: ""
    },
    {
      id: "g5",
      // title: "Golden Hour Solitude",
       title: "Eternal Moments",
      aspect: "portrait",
      src: "assets/images/gallery/gallery-5.jpg",
      // caption: "Bathed in the amber twilight glow before the festivities begin."
      caption: ""
    },
    {
      id: "g7",
      // title: "Festive Joy",
       title: "Eternal Moments",
      aspect: "portrait",
      src: "assets/images/gallery/gallery-7.jpg",
      // caption: "A shower of fragrant marigold and rose petals blessing the couple."
      caption: ""
    },
    {
      id: "g10",
      title: "Eternal Moments",
      aspect: "portrait",
      src: "assets/images/gallery/gallery-10.jpg",
      // caption: "Melodies that echo through the corridors of memory."
      caption: ""
    }
  ],

  audio: {
    src: "assets/audio/wedding-ambient3.mp3",
    title: "Sacred Harmony & Sitar Serenade",
    artist: "Acoustic Wedding Ensemble"
  },

  rsvp: {
    title: "Guest Assistance & Contact",
    subtitle: "We Want Your Experience To Be Effortless & Joyful",
    note: "For directions, venue navigation, stay, event timings, or any assistance needed during the celebrations, please feel free to reach out to Sparsh Gupta:",
    contacts: [
      {
        name: "Sparsh Gupta",
        relation: "Brother of the Bride",
        phone: "+91 9315764244",
        whatsapp: "919315764244"
      }
    ]
  }
};
