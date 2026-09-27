import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faLocationDot,
  faSuitcase,
  faStar,
  faCheck,
  faPlane,
  faPhone,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  { icon: faUsers, value: "500K+", label: "Happy travelers" },
  { icon: faLocationDot, value: "1,200+", label: "Destinations" },
  { icon: faSuitcase, value: "10,000+", label: "Travel experiences" },
  { icon: faStar, value: "4.8 / 5", label: "Customer rating" },
];

const reasons = [
  {
    icon: faCheck,
    title: "Trusted & reliable",
    text: "Secure booking, verified partners, and prices that hold from cart to confirmation.",
  },
  {
    icon: faPlane,
    title: "Wide selection",
    text: "Stays, tours, flights, and transport, all bookable from a single itinerary.",
  },
  {
    icon: faPhone,
    title: "24/7 support",
    text: "Real people on live chat, email, and phone, wherever your trip takes you.",
  },
  {
    icon: faHeart,
    title: "Travel with purpose",
    text: "We route more bookings toward local guides and community-run stays each year.",
  },
];

export default function AboutUs() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-50 via-white to-blue-50 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <div className="grid items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-2 lg:px-16 lg:py-16">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              About us
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Travel more, live brighter.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              We believe travel opens minds and brings people closer together. TouringGO makes every journey simpler, smoother, and more inspiring.
            </p>
            <a
              href="#story"
              className="mt-7 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
            >
              Read our story
            </a>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
              alt="Travel destination"
              className="h-[420px] w-full rounded-[22px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
            </div>
            <div className="text-3xl font-black text-slate-900">{item.value}</div>
            <div className="mt-2 text-sm text-slate-600">{item.label}</div>
          </div>
        ))}
      </section>

      <section id="story" className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Our story</p>
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">From a local idea to a global journey.</h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            <p>
              TouringGO started in Phnom Penh with a simple question: why should planning a trip be harder than the trip itself?
            </p>
            <p>
              We built a platform that pairs local know-how with modern travel tools, honest pricing, and support that actually helps.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80"
            alt="Story photo"
            className="h-[420px] w-full rounded-[24px] object-cover"
          />
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Why choose TouringGO</p>
        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Your trusted travel companion.</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={item.icon} className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
