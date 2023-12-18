import { AiOutlineCalendar } from "react-icons/ai"
import { TfiRulerPencil } from "react-icons/tfi"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiUser } from "react-icons/bi"
import Link from "next/link"
import Tallah from "@/sections/Tallah"

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "10+ years of market experience",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Unique technologies & modern approach ",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "100+ cuccessful cases in portfolio",
  },
  {
    icon: <BiUser size={25} />,
    title: "Customer satisfaction is our top priority",
  },
]
export const expertise = [
  {
    id: 1,
    title: "Web Design & Development",
    cover: "../images/e1.jpg",
    desc: [{ text: "Web design" }, { text: "Web development" }, { text: "Custom icons & illustrations" }, { text: "Hosting" }, { text: "Website audit" }],
  },
  {
    id: 2,
    title: "Graphic Designer",
    cover: "../images/e2.jpg",
    desc: [{ text: "Graphic Designer" }, { text: "Graphic Designer" }, { text: "Graphic Designer" }, { text: "Designer" }],
  },
  {
    id: 3,
    title: "A Front-End Developer ",
    cover: "../images/e3.jpg",
    desc: [{ text: "A Front-End Developer" },{ text: "WooCommerce" }, { text: "Content management" }, { text: "Hosting" }],
  },
  {
    id: 4,
    title: "Graphic Designer",
    cover: "../images/e4.jpg",
    desc: [{ text: "Graphic Designer" }, { text: "Graphic Designer" }, { text: "Graphic Designer" }],
  },
]
export const testimonial = [
  {
    id: 1,
    name: "Tallah Rana Rajput",
    cover: "../images/e1.jpg",
    post: "FOUNDER, CEO",
    desc: "Meet Our Visionary Founder And Ceo,A Trailblazer Shaping The Future Of Our Agency.With Unparalleled Expertise And Leadership,They Drive Innovation,Cultivate Success,And Inspire Our Team To Deliver Exceptional Results.Discover The Driving Force Behind Our Agency's Success",
  },
  {
    id: 2,
    name: "Muhammad Qasim",
    cover: "../images/e2.jpg",
    post: "FINANCE DIRECTOR",
    desc: "Guiding Financial Success,Our Finance Director Leads With Strategic Acumen And Fiscal Expertise.With A Keen Eye For Numbers And A Commitment To Financial Health,They Ensure Stability And Growth, Steering Our Organization Towards Prosperity.",
  },
  {
    id: 3,
    name: "Jai Kumar Arya",
    cover: "../images/e3.jpg",
    post: "CREATIVE DIRECTOR",
    desc: "At the helm of creativity, our Creative Director is a visionary force shaping our artistic landscape. With a passion for innovation and an eye for design, they lead our talented team, crafting compelling narratives and visually stunning experiences that captivate and inspire",
  },
  {
    id: 4,
    name: "Muhammad Nabeel",
    cover: "../images/e4.jpg",
    post: "PROJECT MANAGER",
    desc: "Efficiency meets excellence with our dedicated Project Manager. Meticulous in planning, organizing, and executing, they are the driving force behind successful project delivery. From conception to completion, our Project Manager ensures seamless coordination, on-time milestones, and client satisfaction.",
  },
]
export const showcase = [
  {
    id: 1,
    title: "Neon Lights",
    cover: "../images/s1.jpg",
    catgeory: "DIGITAL MARKETING",
  },
  {
    id: 2,
    title: "Futuristic Furniture",
    catgeory: "WEBSITES",
    cover: "../images/s2.jpg",
  },
  {
    id: 3,
    title: "Smart Living",
    cover: "../images/s3.jpg",
    catgeory: "WEBSITES",
  },
  {
    id: 4,
    title: "Light Painting",
    cover: "../images/s4.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 5,
    title: "Ideabox",
    cover: "../images/s5.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 5,
    title: "VR Experience",
    cover: "../images/s6.jpg",
    catgeory: "WEBSITES	",
  },
]
export const brand = [
  {
    id: 1,
    cover: "../images/l1.svg",
  },
  {
    id: 2,
    cover: "../images/l2.svg",
  },
  {
    id: 3,
    cover: "../images/l3.svg",
  },
  {
    id: 4,
    cover: "../images/l4.svg",
  },
  {
    id: 5,
    cover: "../images/l5.svg",
  },
  {
    id: 6,
    cover: "../images/l6.svg",
  },
]
export const blogdata = [
  {
    id: 1,
    title: "Ligula vel urna accumsan placerat",
    cover: "../images/b1.webp",
    catgeory: "INDUSTRY",
    date: "JANUARY 12, 2023",
  },
  {
    id: 2,
    title: "Don’t underestimate the lorem ipsum dolor amet",
    cover: "../images/b2.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 20, 2023",
  },
  {
    id: 3,
    title: "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
    cover: "../images/b3.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 9, 2023",
  },
  {
    id: 4,
    title: "What eleifend posuere tincidunt",
    cover: "../images/b4.jpg",
    catgeory: "EVENTS",
    date: "OCTOBER 8, 2023",
  },
]
export const teamdata = [
  {
    id: 1,
    title: "Tallah Rana Rajput",
    cover: "../images/t1.jpg",
    post: "FOUNDER, CEO",
  },
  {
    id: 2,
    title: "Muhammad Qasim",
    cover: "../images/t2.jpg",
    post: "FINANCE DIRECTOR",
  },
  {
    id: 3,
    title: "Jai Kumar Aarya",
    cover: "../images/t3.jpg",
    post: "CREATIVE DIRECTOR",
  },
  {
    id: 4,
    title: "Muhammad Nabeel",
    cover: "../images/t4.jpg",
    post: "ACCOUNTING MANAGER",
  },
  {
    id: 5,
    title: "Rana Hammad",
    cover: "../images/t5.jpg",
    post: "MARKETING DIRECTOR",
  },
  {
    id: 6,
    title: "Muhammad Zeeshan",
    cover: "../images/t6.jpg",
    post: "PROGRAMER",
  },
  {
    id: 7,
    title: "Muhammad Asim",
    cover: "../images/t7.jpg",
    post: "PROJECT MANAGER",
  },
  {
    id: 8,
    title: "Join our team!",
    cover: "../images/t8.jpg",
    post: "",
  },
]
