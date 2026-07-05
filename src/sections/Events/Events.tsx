import { events } from "@/data/events";

export default function Events() {
  return (
    <section id="events" className="bg-[#0B0B0F] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Upcoming Events
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500"
            >
              <p className="text-blue-400 font-semibold">{event.date}</p>

              <h3 className="mt-3 text-2xl font-bold">{event.title}</h3>

              <p className="mt-4 text-gray-400">{event.description}</p>

              <button className="mt-6 rounded-full bg-blue-600 px-5 py-2 hover:bg-blue-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
