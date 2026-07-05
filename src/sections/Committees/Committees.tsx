import { committeeMembers } from "@/data/committee";

export default function Committees() {
  return (
    <section
      id="committees"
      className="bg-[#111827] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Meet Our Team
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {committeeMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="mx-auto mb-5 h-32 w-32 rounded-full bg-gray-700"></div>

              <h3 className="text-2xl font-semibold">
                {member.name}
              </h3>

              <p className="mt-2 text-blue-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}