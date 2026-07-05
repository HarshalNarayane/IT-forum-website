import { GraduationCap, Users, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0d1117] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <p className="uppercase tracking-[0.4em] text-blue-400 font-semibold mb-3">
          About Pragyan
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Empowering Future Innovators
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl leading-8 mb-14">
          Pragyan is the official Information Technology Department forum of JD
          College of Engineering and Management. Our goal is to help students
          grow through technical events, workshops, hackathons, leadership
          opportunities and real-world projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-[#161b22] p-8 border border-gray-800 hover:border-blue-500 transition">
            <GraduationCap className="w-10 h-10 text-blue-500 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">Learning</h3>

            <p className="text-gray-400">
              Hands-on workshops, seminars and technical sessions to build
              practical skills.
            </p>
          </div>

          <div className="rounded-2xl bg-[#161b22] p-8 border border-gray-800 hover:border-blue-500 transition">
            <Users className="w-10 h-10 text-blue-500 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">Community</h3>

            <p className="text-gray-400">
              Bringing together students, mentors and alumni to create lasting
              connections.
            </p>
          </div>

          <div className="rounded-2xl bg-[#161b22] p-8 border border-gray-800 hover:border-blue-500 transition">
            <Lightbulb className="w-10 h-10 text-blue-500 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">Innovation</h3>

            <p className="text-gray-400">
              Encouraging creative thinking through projects, competitions and
              collaborative development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
