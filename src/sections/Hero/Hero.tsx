import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0B0F] text-white">
      
      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-blue-400 uppercase tracking-[8px]">
          JD College of Engineering and Management
        </p>

        <h1 className="text-6xl font-black md:text-8xl">
          {siteConfig.forumName}
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          {siteConfig.department}
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          A community where innovation, leadership, creativity and technology
          come together to shape the future.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
            Explore
          </button>

          <button className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 transition hover:border-blue-500">
            Join Us
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}