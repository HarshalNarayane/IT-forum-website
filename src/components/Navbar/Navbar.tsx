import { siteConfig } from "@/config/site";

const links = [
  "Home",
  "About",
  "Committees",
  "Events",
  "Projects",
  "Gallery",
  "Contact",
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-blue-500">
          {siteConfig.forumName}
        </h1>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-300 transition hover:text-blue-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold hover:bg-blue-700">
          Join Us
        </button>
      </div>
    </nav>
  );
}
