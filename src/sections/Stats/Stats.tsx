"use client";

import { Trophy, CalendarDays, Users, FolderKanban } from "lucide-react";

const stats = [
  {
    title: "Students",
    value: "500+",
    icon: Users,
  },
  {
    title: "Events",
    value: "50+",
    icon: CalendarDays,
  },
  {
    title: "Projects",
    value: "120+",
    icon: FolderKanban,
  },
  {
    title: "Achievements",
    value: "80+",
    icon: Trophy,
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0B0B0F] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-5xl font-bold text-white">
          Our Impact
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon className="mx-auto mb-5 h-12 w-12 text-blue-500" />

                <h3 className="text-5xl font-black text-white">{item.value}</h3>

                <p className="mt-3 text-gray-400">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
