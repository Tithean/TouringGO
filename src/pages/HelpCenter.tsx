import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCreditCard,
  faPlaneUp,
  faHotel,
  faMap,
  faCar,
  faGear,
  faEnvelope,
  faMessage,
  faPhone,
  faFile,
  faBus,
} from "@fortawesome/free-solid-svg-icons";

const helpTopics = [
  { icon: faCalendarDays, title: "Bookings", text: "Manage your reservations" },
  { icon: faCreditCard, title: "Payments", text: "Billing, refunds, promotions" },
  { icon: faPlaneUp, title: "Flights", text: "Booking and changes" },
  { icon: faHotel, title: "Stays", text: "Hotel booking and policies" },
  { icon: faMap, title: "Tours & activities", text: "Tickets and experiences" },
  { icon: faCar, title: "Car rental", text: "Rental policies and requirements" },
  { icon: faBus, title: "Transport", text: "Airport transfers and local travel" },
  { icon: faGear, title: "Account", text: "Profile, settings, and security" },
];

const faqs = [
  {
    q: "How do I make a booking on TouringGO?",
    a: "Search your destination, select travel details, and confirm your payment. You will receive an instant confirmation by email.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Most bookings can be changed from your trip dashboard before the policy cutoff shown at checkout.",
  },
  {
    q: "How do I get a refund?",
    a: "Eligible refunds are issued to your original payment method within 5–10 business days after approval.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept major cards, popular local wallets, and bank transfers in supported countries.",
  },
];

export default function HelpCenter() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white shadow-[0_20px_60px_rgba(59,130,246,0.25)]">
        <div className="grid gap-8 px-6 py-10 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:py-16">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-50">
              Help center
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">How can we help you?</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-50/90">
              Find answers, get support, and make the most of your journey with TouringGO.
            </p>
            <form className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-sm sm:flex-row">
              <input
                type="text"
                placeholder="Search for help..."
                className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100 focus:outline-none"
              />
              <button type="submit" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700">
                Search
              </button>
            </form>
          </div>

          <div className="rounded-[28px] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <div className="text-sm text-blue-50/80">Need a quick answer?</div>
            <div className="mt-4 text-3xl font-black">24/7 support</div>
            <div className="mt-6 space-y-3 text-sm text-blue-50/90">
              <div className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-white" /> Live chat with our team</div>
              <div className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-white" /> response within 24 hours</div>
              <div className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-white" /> daily from 8:00 AM to 10:00 PM</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-black text-slate-900">Browse help topics</h2>
          <a href="#" className="text-sm font-semibold text-blue-700">View all topics</a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {helpTopics.map((topic) => (
            <div key={topic.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FontAwesomeIcon icon={topic.icon} className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{topic.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{topic.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
            <a href="#" className="text-sm font-semibold text-blue-700">View all FAQs</a>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4" open={faq.q === "How do I make a booking on TouringGO?"}>
                <summary className="cursor-pointer list-none font-semibold text-slate-900">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <h3 className="text-2xl font-black text-slate-900">Still need help?</h3>
          <p className="mt-3 text-slate-600">Our support team is here for you anytime.</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><FontAwesomeIcon icon={faMessage} /></div>
              <div><div className="font-semibold text-slate-900">Live chat</div><div className="text-sm text-slate-600">Online now — chat with our support team</div></div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><FontAwesomeIcon icon={faEnvelope} /></div>
              <div><div className="font-semibold text-slate-900">Email us</div><div className="text-sm text-slate-600">support@touringgo.com — replies within 24 hours</div></div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><FontAwesomeIcon icon={faPhone} /></div>
              <div><div className="font-semibold text-slate-900">Call us</div><div className="text-sm text-slate-600">Daily 8:00 AM – 10:00 PM (GMT+7)</div></div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><FontAwesomeIcon icon={faFile} /></div>
              <div><div className="font-semibold text-slate-900">Submit a request</div><div className="text-sm text-slate-600">Tell us your issue in detail</div></div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
