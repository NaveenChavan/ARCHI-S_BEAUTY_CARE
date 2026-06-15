import { BusinessInfo, NavLink, WhyChooseUsItem } from "@/types";

export const businessInfo: BusinessInfo = {
  name: "Archies Beauty Clinic",
  owner: "Archana",
  phone: "+91 97314 90728",
  whatsapp: "917619621584",
  email: "archuarchi2006@gmail.com",
  instagram:
    "https://www.instagram.com/archies_beauty_clinic?igsh=MTNibThlaXZ5djE3MQ==",
  address: "Raichur, Karnataka, India",
  city: "Raichur",
  state: "Karnataka",
  businessHours: [
    { day: "Monday - Saturday", hours: "10:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "By Appointment Only" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: "💆‍♀️",
    title: "Personalized Consultations",
    description:
      "Every treatment begins with a thorough consultation to understand your unique skin and beauty goals.",
  },
  {
    icon: "✨",
    title: "Advanced Techniques",
    description:
      "We use modern beauty treatments and advanced techniques to deliver visible, lasting results.",
  },
  {
    icon: "👩‍⚕️",
    title: "Expert Professionals",
    description:
      "Our team brings years of experience and a passion for helping you look and feel your best.",
  },
  {
    icon: "🌸",
    title: "Women-Focused Environment",
    description:
      "A comfortable, private, and welcoming space designed exclusively for women.",
  },
  {
    icon: "⭐",
    title: "Result-Driven Approach",
    description:
      "Every service is designed with your desired outcome in mind — because your confidence matters.",
  },
  {
    icon: "🎓",
    title: "Beauty Academy",
    description:
      "Learn professional grooming and beauty skills through our academy programs led by experienced trainers.",
  },
];
