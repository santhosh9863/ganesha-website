export const siteConfig = {
  name: "Sri Gowri Ganesha Geleyara Balaga",
  shortName: "SGGB",
  tagline: "14 Years of Devotion, Culture & Unity",
  badge: "Since 2012",
  yearsOfLegacy: 14,
  foundedYear: 2012,
  location: "Bangalore, India",
  locationUrl: "https://maps.app.goo.gl/PoBQ9Cox3QwsQjes8",
  email: "hello@sggb.in",
  phone: "+91 XXXXX XXXXX",
  festivalDate: "September 16, 2026",
  social: {
    instagram: "https://www.instagram.com/srigowriganesha_2012?igsh=bW5zMDVwZzBjajgy",
    facebook: "#",
    youtube: "#",
    twitter: "#",
    whatsapp: "#",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "14+", label: "Years of Legacy" },
  { value: "1000+", label: "Volunteers" },
  { value: "50K+", label: "Devotees Served" },
  { value: "100+", label: "Cultural Programs" },
];

export const statCards = [
  {
    value: "14+",
    label: "Years of Legacy",
    icon: "🕉",
    backTitle: "14 Years of Legacy",
    backDescription:
      "Since 2012 we have celebrated Gowri Ganesha with devotion, cultural programs and community service.",
  },
  {
    value: "5",
    label: "Days of Celebration",
    icon: "❤️",
    backTitle: "5 Days of Devotion",
    backDescription:
      "Uniting thousands through faith, culture and tradition every year.",
  },
  {
    value: "25K+",
    label: "Devotees Served",
    icon: "🙏",
    backTitle: "25,000+ Devotees",
    backDescription:
      "Every year thousands of devotees visit our celebration for darshan, annadanam and cultural events.",
  },
  {
    value: "100+",
    label: "Dedicated Volunteers",
    icon: "🤝",
    backTitle: "100+ Dedicated Volunteers",
    backDescription:
      "More than 100 volunteers have selflessly contributed over the years to make every Ganeshotsava a grand success.",
  },
];

export const legacyTimeline = [
  { year: 2012, title: "The Vision", description: "Founding vision took shape as community elders discussed starting an annual Ganesh Chaturthi celebration." },
  { year: 2013, title: "First Gathering", description: "An intimate gathering of families marked the beginning of what would become a grand tradition." },
  { year: 2014, title: "Formal Establishment", description: "The festival was officially organized with a small gathering of devoted families coming together to celebrate." },
  { year: 2015, title: "Growing Community", description: "The celebration expanded with more families joining. First community feast organized." },
  { year: 2016, title: "First Street Festival", description: "Moved to the streets to accommodate the growing crowd. 3-day celebration began." },
  { year: 2017, title: "Cultural Programs", description: "Introduced traditional music, dance performances, and community games." },
  { year: 2018, title: "Annadanam Launch", description: "Started the food donation drive, serving thousands of devotees." },
  { year: 2019, title: "5-Day Festival", description: "Expanded to a full 5-day celebration with daily themed events." },
  { year: 2020, title: "Resilience", description: "Adapted to challenges with intimate ceremonies while keeping the spirit alive." },
  { year: 2021, title: "Community Strong", description: "Returned stronger with enhanced safety measures and renewed community bonds." },
  { year: 2022, title: "Grand Revival", description: "The biggest celebration yet with thousands participating in every event." },
  { year: 2023, title: "10 Year Milestone", description: "Celebrated a decade of devotion with a spectacular 10-year anniversary event." },
  { year: 2024, title: "Expanding Impact", description: "Launched new community initiatives and expanded our donation programs." },
  { year: 2025, title: "Record Participation", description: "Our largest celebration to date with unprecedented community participation." },
  { year: 2026, title: "14 Years of Legacy", description: "Continuing the tradition with even greater grandeur and community spirit." },
];

export const highlights = [
  { title: "Decoration", icon: "✨", description: "Breathtaking temple-style decorations that transform the streets into a divine space." },
  { title: "Ganesha Idol", icon: "🕉", description: "Magnificent handcrafted idol of Lord Ganesha, the centerpiece of our celebration." },
  { title: "Aarti", icon: "🔥", description: "Soul-stirring evening aartis that fill the air with devotion and divine energy." },
  { title: "Procession", icon: "🎶", description: "Grand immersion procession with drum beats, dance, and thousands of devotees." },
  { title: "Cultural Programs", icon: "🎭", description: "Traditional dance, music, and theatrical performances showcasing our heritage." },
  { title: "Prasada Distribution", icon: "🍛", description: "Blessed food offerings distributed to all devotees throughout the festival." },
  { title: "Community Games", icon: "🎯", description: "Fun-filled games and competitions for all ages, strengthening community bonds." },
  { title: "Donation Drive", icon: "❤️", description: "Annual donation campaigns supporting community welfare and social causes." },
];

export const galleryImages = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery-${i + 1}.jpg`,
  alt: [
    "Ganesha Idol Decoration", "Evening Aarti Ceremony", "Grand Procession", "Community Feast",
    "Cultural Dance Performance", "Temple Lighting", "Flower Decorations", "Devotees Gathering",
    "Dhol Performance", "Visarjan Ceremony", "Volunteer Team", "Night Aarti",
    "Rangoli Art", "Prasada Distribution", "Kids Competition", "Finale Celebration"
  ][i],
  category: ["Decoration", "Ceremony", "Procession", "Events", "Culture", "Decoration", "Decoration", "Devotees", "Culture", "Procession", "Team", "Ceremony", "Decoration", "Events", "Events", "Procession"][i],
}));

export const events = [
  { day: 1, title: "Grand Inauguration & Ganesha Idol Arrival", time: "6:00 AM", description: "The celebration begins with the ceremonial arrival of Lord Ganesha. Traditional chants, flower showers, and a vibrant procession mark the start.", highlights: ["Idol Arrival", "Vedic Chants", "Flower Shower", "Inauguration"] },
  { day: 2, title: "Cultural Performances & Community Games", time: "4:00 PM - 10:00 PM", description: "An evening filled with traditional music, dance performances by local artists, and fun community games for all ages.", highlights: ["Folk Dances", "Live Music", "Community Games", "Prize Distribution"] },
  { day: 3, title: "Food Festival & Annadanam", time: "10:00 AM - 10:00 PM", description: "A grand feast featuring traditional delicacies. Food donation drive to support community causes. Everyone is welcome.", highlights: ["Traditional Feast", "Annadanam", "Food Stalls", "Community Lunch"] },
  { day: 4, title: "Aarti Night & Spiritual Discourse", time: "6:00 PM - 11:00 PM", description: "A deeply spiritual evening with grand aartis, bhajans, and an inspiring discourse on the teachings of Lord Ganesha.", highlights: ["Grand Aarti", "Bhajan Session", "Spiritual Talk", "Midnight Aarti"] },
  { day: 5, title: "Ganesha Visarjan & Grand Finale", time: "8:00 AM", description: "The grand conclusion with the immersion procession. Thousands gather to bid farewell with chants, dance, and devotion.", highlights: ["Grand Procession", "Drums & Dance", "Visarjan", "Finale"] },
];

export const testimonials = [
  { name: "Ramesh Kumar", role: "Community Elder, 8-year Participant", quote: "Being part of this celebration for 8 years has been a spiritual journey. The energy, the unity, and the devotion grow stronger every year." },
  { name: "Priya Sharma", role: "Volunteer Coordinator", quote: "The 5-day celebration transforms our streets into a divine sanctuary. Every moment — from the aartis to the feasts — is pure magic." },
  { name: "Anand Rao", role: "Local Business Owner & Sponsor", quote: "I've supported this team since day one. Their dedication to community service and preserving our traditions is truly inspiring." },
  { name: "Lakshmi Devi", role: "Devotee", quote: "The aarti on the 4th night brings tears to my eyes. This celebration is the highlight of my year, every single year." },
];

export const faqs = [
  { q: "When does the festival take place?", a: "The 5-day celebration typically begins a few days before Ganesh Chaturthi and culminates on the day of the immersion procession." },
  { q: "Is the event open to everyone?", a: "Absolutely! Our celebration is open to people of all ages, backgrounds, and faiths. Everyone is welcome to join the festivities." },
  { q: "Can I make a donation?", a: "Yes! Your contributions help us organize this grand celebration. Donate online via our website or reach out to our team members." },
  { q: "What should I wear?", a: "Traditional attire is appreciated but not mandatory. Please dress modestly and respectfully." },
  { q: "Is parking available?", a: "Yes, we arrange designated parking areas near the festival venue. Details will be shared closer to the event date." },
  { q: "Can I take photographs?", a: "We encourage you to capture and share your experience! Tag us on social media so we can feature your photos." },
  { q: "How can my business sponsor the event?", a: "We offer various sponsorship tiers. Please contact us to discuss partnership opportunities." },
];

export const blogPosts = [
  { id: 1, title: "14 Years of Devotion: Our Journey So Far", excerpt: "From a small gathering to a grand street festival — the story of how our community came together to celebrate Lord Ganesha.", date: "June 15, 2026", author: "SGGB Team", category: "Legacy" },
  { id: 2, title: "The Significance of Ganesh Chaturthi", excerpt: "Exploring the rich history and spiritual importance of the 10-day festival dedicated to the elephant-headed god of wisdom.", date: "June 10, 2026", author: "SGGB Team", category: "Spirituality" },
  { id: 3, title: "Annadanam: Feeding the Community", excerpt: "Our annual food donation drive serves thousands. Learn about the spirit of giving that defines our celebration.", date: "May 28, 2026", author: "SGGB Team", category: "Community" },
  { id: 4, title: "Meet the Volunteers Behind the Magic", excerpt: "Behind every successful celebration are hundreds of selfless volunteers. Here are some of their inspiring stories.", date: "May 20, 2026", author: "SGGB Team", category: "Team" },
];

export const sponsors = [
  { name: "Luminary Corp", tier: "Platinum" },
  { name: "Goldcrest Industries", tier: "Platinum" },
  { name: "Divine Enterprises", tier: "Gold" },
  { name: "Sacred Motors", tier: "Gold" },
  { name: "Prasad Foods", tier: "Silver" },
  { name: "Bhakti Media", tier: "Silver" },
  { name: "Swasthya Pharmacy", tier: "Bronze" },
  { name: "Ananda Travels", tier: "Bronze" },
];
