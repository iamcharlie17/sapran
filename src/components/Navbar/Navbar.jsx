'use client';

import { useLang } from "@/providers/LangProvider";
import Link from "next/link";

const navItems = [
    {
      id: 1,
      title: { EN: "HOME", BN: "হোম" },
      link: "#",
      sublinks: [
        { id: 101, title: { EN: "Sub Home 1", BN: "সাব হোম ১" }, link: "#" },
        { id: 102, title: { EN: "Sub Home 2", BN: "সাব হোম ২" }, link: "#" },
      ],
    },
    {
      id: 2,
      title: { EN: "WHO WE ARE", BN: "আমরা কারা" },
      link: "#",
      sublinks: [
        { id: 201, title: { EN: "Our Team", BN: "আমাদের টিম" }, link: "#" },
        { id: 202, title: { EN: "Mission", BN: "মিশন" }, link: "#" },
        { id: 203, title: { EN: "Vision", BN: "ভিশন" }, link: "#" },
      ],
    },
    {
      id: 3,
      title: { EN: "WHAT WE DO", BN: "আমরা কি করি" },
      link: "#",
      sublinks: [
        { id: 301, title: { EN: "Projects", BN: "প্রজেক্ট" }, link: "#" },
        { id: 302, title: { EN: "Services", BN: "সার্ভিস" }, link: "#" },
      ],
    },
    {
      id: 4,
      title: { EN: "PUBLICATIONS", BN: "প্রকাশনা" },
      link: "#",
      sublinks: [
        { id: 401, title: { EN: "Reports", BN: "রিপোর্ট" }, link: "#" },
        { id: 402, title: { EN: "Research Papers", BN: "গবেষণা পেপার" }, link: "#" },
      ],
    },
    {
      id: 5,
      title: { EN: "NEWS & EVENTS", BN: "খবর ও ইভেন্ট" },
      link: "#",
      sublinks: [
        { id: 501, title: { EN: "News", BN: "খবর" }, link: "#" },
        { id: 502, title: { EN: "Events", BN: "ইভেন্ট" }, link: "#" },
      ],
    },
    {
      id: 6,
      title: { EN: "BLOG & COMMENTARY", BN: "ব্লগ ও মন্তব্য" },
      link: "#",
      sublinks: [
        { id: 601, title: { EN: "Blog 1", BN: "ব্লগ ১" }, link: "#" },
        { id: 602, title: { EN: "Blog 2", BN: "ব্লগ ২" }, link: "#" },
      ],
    },
    {
      id: 7,
      title: { EN: "HUMAN RIGHTS TRACKER", BN: "মানবাধিকার ট্র্যাকার" },
      link: "#",
      sublinks: [
        { id: 701, title: { EN: "Tracker 1", BN: "ট্র্যাকার ১" }, link: "#" },
        { id: 702, title: { EN: "Tracker 2", BN: "ট্র্যাকার ২" }, link: "#" },
      ],
    },
    {
      id: 8,
      title: { EN: "GET INVOLVED", BN: "যুক্ত হোন" },
      link: "#",
      sublinks: [
        { id: 801, title: { EN: "Volunteer", BN: "স্বেচ্ছাসেবক" }, link: "#" },
        { id: 802, title: { EN: "Donate", BN: "দান করুন" }, link: "#" },
        { id: 803, title: { EN: "Join Us", BN: "আমাদের সাথে যোগ দিন" }, link: "#" },
      ],
    },
  ];

const Navbar = () => {
  const {lang} = useLang();
  return (
    <nav>
      <ul className="flex justify-between gap-8 text-primary py-2 px-32 text-sm font-bold">
        {navItems.map((item) => (
          <li key={item.id}>
            {/* Main link */}
            <Link href={item.link}>{item.title[lang]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
