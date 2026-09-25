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
import banner from '../assets/banner.jpg';
import story from '../assets/story.jpg';

function AboutUs() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  :root{\n    --ink:#152447;\n    --blue:#2454e8;\n    --blue-deep:#122a63;\n    --blue-tint:#e7eefd;\n    --paper:#ffffff;\n    --paper-dim:#f5f7fd;\n    --white:#ffffff;\n    --line:#e1e6f2;\n    box-sizing:border-box;\n    padding-top:env(safe-area-inset-top,0px);\n    padding-bottom:env(safe-area-inset-bottom,0px);\n  }\n  *{box-sizing:inherit;margin:0;padding:0;}\n  html{scroll-padding-top:env(safe-area-inset-top,0px);}\n  html,body{height:100%;}\n  body{background:var(--paper);color:var(--ink);font-family:'Work Sans',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;}\n  img,svg{max-width:100%;display:block;}\n  h1,h2,h3{font-family:'Fraunces',serif;font-weight:500;line-height:1.05;letter-spacing:-0.01em;}\n  a{color:inherit;}\n  .wrap{max-width:1080px;margin:0 auto;padding:0 28px;}\n\n  /* placeholder image slot — swap the <img src> for your own photo */\n  .imgslot{position:relative;width:100%;height:100%;background:repeating-linear-gradient(135deg,#eef1fb,#eef1fb 10px,#e4e9fa 10px,#e4e9fa 20px);display:flex;align-items:center;justify-content:center;overflow:hidden;}\n  .imgslot img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0;}\n  .imgslot .lbl{position:relative;z-index:2;font-size:0.72rem;font-weight:600;color:#8592b8;background:rgba(255,255,255,.85);padding:5px 10px;border-radius:999px;letter-spacing:.02em;}\n\n  /* ---- Top nav ---- */\n  .topnav{position:sticky;top:0;top:env(safe-area-inset-top,0px);z-index:50;background:var(--paper);border-bottom:1px solid var(--line);}\n  .topnav-inner{max-width:1080px;margin:0 auto;padding:16px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px;}\n  .brand{font-family:'Fraunces',serif;font-size:1.25rem;font-weight:600;letter-spacing:-0.01em;}\n  .brand span{color:var(--blue);}\n  .tabs{display:flex;gap:4px;background:var(--paper-dim);border:1px solid var(--line);padding:4px;border-radius:999px;}\n  .tab-btn{font-family:'Work Sans',sans-serif;font-size:0.88rem;font-weight:600;padding:8px 18px;border-radius:999px;border:none;background:transparent;color:var(--ink);cursor:pointer;text-decoration:none;display:inline-block;}\n  .tab-btn.active{background:var(--blue);color:var(--white);}\n\n  /* ---- Hero ---- */\n  .hero{position:relative;padding:78px 0 64px;overflow:hidden;}\n  .hero-bg{position:absolute;inset:0;z-index:0;}\n  .hero-scrim{position:absolute;inset:0;z-index:1;background:linear-gradient(100deg,rgba(18,42,99,.82) 0%,rgba(18,42,99,.55) 45%,rgba(18,42,99,.15) 75%);}\n  .hero-inner{max-width:1080px;margin:0 auto;padding:0 28px;position:relative;z-index:2;}\n  .hero .kicker{display:inline-block;font-size:0.78rem;font-weight:600;color:var(--white);background:rgba(255,255,255,.16);padding:6px 14px;border-radius:999px;margin-bottom:16px;letter-spacing:.02em;}\n  .hero h1{font-size:clamp(2.4rem,5.6vw,3.6rem);color:var(--white);max-width:9.5em;}\n  .hero p{margin-top:18px;max-width:34em;color:var(--white);font-size:1.05rem;line-height:1.6;opacity:.95;}\n  .hero .cta{margin-top:26px;display:inline-flex;align-items:center;gap:8px;background:var(--white);color:var(--blue-deep);padding:13px 26px;font-weight:600;font-size:0.95rem;border-radius:999px;text-decoration:none;}\n  .hero-area{min-height:420px;}\n\n  /* ---- Stats strip ---- */\n  .stats{background:var(--white);padding:36px 0;border-bottom:1px solid var(--line);}\n  .stats-row{display:flex;flex-wrap:wrap;gap:28px;max-width:1080px;margin:0 auto;padding:0 28px;justify-content:space-between;}\n  .stat{display:flex;align-items:center;gap:12px;min-width:150px;}\n  .stat .ic{width:38px;height:38px;border-radius:50%;background:var(--blue-tint);display:flex;align-items:center;justify-content:center;color:var(--blue);font-size:1.05rem;flex-shrink:0;}\n  .stat .num{font-family:'Fraunces',serif;font-size:1.4rem;font-weight:500;color:var(--ink);}\n  .stat .lbl{font-size:0.8rem;color:#6b7391;margin-top:1px;}\n\n  /* ---- Story section ---- */\n  .story{padding:76px 0;}\n  .story-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}\n  .eyebrow-line{display:flex;align-items:center;gap:10px;margin-bottom:14px;}\n  .eyebrow-line .rule{width:32px;height:2px;background:var(--blue);}\n  .eyebrow-line span{font-size:0.82rem;font-weight:600;color:var(--blue);}\n  .story h2{font-size:2.1rem;}\n  .story p{margin-top:16px;line-height:1.7;color:#525a78;max-width:32em;}\n  .story .learn{margin-top:22px;display:inline-flex;align-items:center;gap:8px;background:var(--blue);color:var(--white);padding:12px 24px;font-weight:600;font-size:0.92rem;border-radius:999px;text-decoration:none;}\n  .story-art{aspect-ratio:4/5;border-radius:10px;position:relative;overflow:hidden;box-shadow:0 16px 40px rgba(18,42,99,.14);}\n  .story-badge{position:absolute;left:16px;bottom:16px;z-index:2;background:var(--white);padding:16px 18px;border-radius:10px;box-shadow:0 10px 30px rgba(18,42,99,.18);max-width:190px;display:flex;gap:10px;align-items:center;}\n  .story-badge .dot{width:34px;height:34px;border-radius:8px;background:var(--blue-tint);color:var(--blue);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem;}\n  .story-badge .line1{font-size:0.82rem;font-weight:600;line-height:1.3;}\n\n  /* ---- Why choose ---- */\n  .why{background:var(--paper-dim);padding:76px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);}\n  .why h2{font-size:2.1rem;max-width:14em;}\n  .why-grid{margin-top:40px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}\n  .why-card{background:var(--white);padding:28px 22px;border-radius:10px;border:1px solid var(--line);}\n  .why-card .mark{width:36px;height:36px;border-radius:8px;background:var(--blue-tint);display:flex;align-items:center;justify-content:center;margin-bottom:16px;color:var(--blue);font-size:1.1rem;}\n  .why-card h3{font-size:1.02rem;font-weight:600;font-family:'Work Sans',sans-serif;}\n  .why-card p{margin-top:8px;font-size:0.88rem;color:#6b7391;line-height:1.55;}\n\n  /* ---- Values ---- */\n  .values{padding:76px 0;}\n  .values-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:56px;align-items:start;}\n  .values h2{font-size:2.1rem;}\n  .values p{margin-top:16px;color:#525a78;line-height:1.7;max-width:30em;}\n  .value-rows{border-top:1px solid var(--line);}\n  .value-row{display:flex;gap:18px;padding:20px 0;border-bottom:1px solid var(--line);align-items:flex-start;}\n  .value-row .dot{width:30px;height:30px;border-radius:50%;background:var(--blue-tint);color:var(--blue);display:flex;align-items:center;justify-content:center;font-size:0.85rem;flex-shrink:0;}\n  .value-row h3{font-size:1rem;font-weight:600;font-family:'Work Sans',sans-serif;}\n  .value-row p{font-size:0.88rem;color:#6b7391;margin-top:4px;}\n\n  /* ---- Closing banner ---- */\n  .closing{position:relative;overflow:hidden;}\n  .closing-bg{position:absolute;inset:0;z-index:0;}\n  .closing-scrim{position:absolute;inset:0;z-index:1;background:linear-gradient(100deg,rgba(10,20,54,.88) 0%,rgba(18,42,99,.6) 55%,rgba(18,42,99,.25) 100%);}\n  .closing-inner{position:relative;z-index:2;max-width:520px;padding:64px 0;}\n  .closing .kicker{color:#bcd0ff;font-size:0.8rem;font-weight:600;margin-bottom:12px;}\n  .closing h2{color:var(--white);font-size:2rem;}\n  .closing p{color:#d6e0fb;margin-top:14px;line-height:1.6;max-width:28em;}\n  .closing .cta{margin-top:22px;display:inline-flex;align-items:center;gap:8px;background:var(--white);color:var(--blue-deep);padding:13px 26px;font-weight:600;border-radius:999px;text-decoration:none;font-size:0.95rem;}\n  .closing-area{min-height:280px;}\n\n  footer{padding:26px 0 50px;border-top:1px solid var(--line);}\n  footer .wrap{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}\n  footer p{font-size:0.8rem;color:#8a92b0;}\n\n  @media (max-width:860px){\n    .story-grid,.values-grid{grid-template-columns:1fr;}\n    .why-grid{grid-template-columns:repeat(2,1fr);}\n    .stats-row{justify-content:flex-start;}\n    .story-art{aspect-ratio:16/10;}\n  }\n  @media (max-width:560px){\n    .why-grid{grid-template-columns:1fr;}\n    .topnav-inner{flex-direction:column;align-items:flex-start;gap:12px;}\n  }\n\n  @media (prefers-color-scheme: dark){\n    :root:not([data-theme=\"light\"]){--paper:#0f1424;--paper-dim:#161d33;--ink:#e9edfb;--line:#2a3352;--white:#161d33;}\n    :root:not([data-theme=\"light\"]) .story p,\n    :root:not([data-theme=\"light\"]) .why-card p,\n    :root:not([data-theme=\"light\"]) .values p,\n    :root:not([data-theme=\"light\"]) .value-row p{color:#a6afd1;}\n  }"
    }}
  />
        <main>
          <section className="hero">
            <div className="hero-bg hero-area imgslot">
              <img
                src="https://imgs.search.brave.com/WdJWXbihlnz2MMrPdbwvS5u5lV7rOdkKseBCWIyn9r4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MzQyNDg3My9waG90/by9hbmdrb3Itd2F0/LXRlbXBsZS1pbi1j/YW1ib2RpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9V045/ZnA5RTZyT3U1eVk4/UDBpUzV4aHNOY3BR/RGVtTDE0U1dYanlj/T2hhYz0"
                alt="Hero destination photo"
                
              />
            </div>
            <div className="hero-scrim" />
            <div className="hero-inner">
              <div className="kicker">About us</div>
              <h1>Travel more, live brighter</h1>
              <p>
                We believe travel opens minds and brings people closer together.
                TouringGO exists to make every journey — from first search to
                final photo — simpler, smoother, and a little more inspiring.
              </p>
              <a className="cta" href="#story">
                Read our story ↓
              </a>
            </div>
          </section>
          <section className="stats">
            <div className="stats-row">
              <div className="stat">
                <FontAwesomeIcon icon={faUsers} style={{color: "rgb(116, 192, 252)",}} />
                <div>
                  <div className="num">500K+</div>
                  <div className="lbl">Happy travelers</div>
                </div>
              </div>
              <div className="stat">
                <FontAwesomeIcon icon={faLocationDot} style={{color: "rgb(116, 192, 252)",}} />
                <div>
                  <div className="num">1,200+</div>
                  <div className="lbl">Destinations</div>
                </div>
              </div>
              <div className="stat">
                <FontAwesomeIcon icon={faSuitcase} style={{color: "rgb(116, 192, 252)",}} />
                <div>
                  <div className="num">10,000+</div>
                  <div className="lbl">Travel experiences</div>
                </div>
              </div>
              <div className="stat">
                <FontAwesomeIcon icon={faStar} style={{color: "rgb(116, 192, 252)",}} />
                <div>
                  <div className="num">4.8 / 5</div>
                  <div className="lbl">Customer rating</div>
                </div>
              </div>
            </div>
          </section>
          <section className="story" id="story">
            <div className="wrap story-grid">
              <div>
                <div className="eyebrow-line">
                  <div className="rule" />
                  <span>Our story</span>
                </div>
                <h2>From a local idea to a global journey</h2>
                <p>
                  TouringGO started in Phnom Penh with a simple question: why
                  should planning a trip be harder than the trip itself? We
                  built a platform that pairs local know-how with the tools of
                  modern travel — real-time booking, honest pricing, and support
                  that actually picks up.
                </p>
                <p>
                  Today travelers across the region use TouringGO to find their
                  way to a sunrise, a homestay, or a weekend flight booked in
                  minutes.
                </p>
                <a className="learn" href="#">
                  Learn more about us
                </a>
              </div>
              <div className="story-art imgslot">
                {/* replace with your story photo */}
                <img
                  src={story.src}
                  alt="Story photo"
                  
                />
                <div className="story-badge">
                  <div className="dot">✈</div>
                  <div className="line1">
                    Explore. Dream. Discover. Together.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="why">
            <div className="wrap">
              <div className="eyebrow-line">
                <div className="rule" />
                <span>Why choose TouringGO</span>
              </div>
              <h2>Your trusted travel companion</h2>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <div className="mark">
                  <FontAwesomeIcon icon={faCheck} style={{color: "rgb(116, 192, 252)",}} />
                </div>
                <h3>Trusted &amp; reliable</h3>
                <p>
                  Secure booking, verified partners, and prices that hold from
                  cart to confirmation.
                </p>
              </div>
              <div className="why-card">
                <div className="mark">
                  <FontAwesomeIcon icon={faPlane} style={{color: "rgb(116, 192, 252)",}} />
                  </div>
                <h3>Wide selection</h3>
                <p>
                  Stays, tours, flights, and transport, all bookable from a
                  single itinerary.
                </p>
              </div>
              <div className="why-card">
                <div className="mark">
                  <FontAwesomeIcon icon={faPhone} style={{color: "rgb(116, 192, 252)",}} />
                  </div>
                <h3>24/7 support</h3>
                <p>
                  Real people on live chat, email, and phone, wherever your trip
                  takes you.
                </p>
              </div>
              <div className="why-card">
                <div className="mark"><FontAwesomeIcon icon={faHeart} style={{color: "rgb(116, 192, 252)",}} /></div>
                <h3>Travel with purpose</h3>
                <p>
                  We route more bookings toward local guides and community-run
                  stays each year.
                </p>
              </div>
            </div>
          </section>
          <section className="values">
            <div className="wrap values-grid">
              <div>
                <div className="eyebrow-line">
                  <div className="rule" />
                  <span>Our values</span>
                </div>
                <h2>Guided by a brighter tomorrow</h2>
                <p>
                  Growth only matters if it leaves places better than we found
                  them. These three commitments shape every partnership we sign
                  and every itinerary we recommend.
                </p>
              </div>
              <div className="value-rows">
                <div className="value-row">
                  <div className="dot">1</div>
                  <div>
                    <h3>Sustainable travel</h3>
                    <p>
                      Lower-impact routes and operators, and carbon-conscious
                      defaults at checkout.
                    </p>
                  </div>
                </div>
                <div className="value-row">
                  <div className="dot">2</div>
                  <div>
                    <h3>People first</h3>
                    <p>
                      Travel that connects visitors with the people and cultures
                      of each destination.
                    </p>
                  </div>
                </div>
                <div className="value-row">
                  <div className="dot">3</div>
                  <div>
                    <h3>Inspiring experiences</h3>
                    <p>
                      We curate for moments worth remembering, not just boxes
                      worth checking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="closing">
            <div className="closing-bg closing-area imgslot">
              {/* replace with your closing/banner photo */}
              <img
                src={banner.src}
                alt="Closing banner photo"
              />
            </div>
            <div className="closing-scrim" />
            <div className="wrap closing-inner">
              <div className="kicker">Join our journey</div>
              <h2>Be part of a brighter way to travel</h2>
              <p>
                Join a growing community of explorers who share tips, discover
                new places, and make the world a little brighter together.
              </p>
              <a className="cta" href="#">
                Get started today →
              </a>
            </div>
            
          </section>
        </main>
      </>
    </div>
  );
}

export default AboutUs;
