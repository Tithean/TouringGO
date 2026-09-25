
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

} from "@fortawesome/free-solid-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons/faBus";
import getProvince from "@/services/getProvince";
import getProvinceByID from "@/services/getprovinceByID";

 async function HelpCenter() {
  const province = await getProvinceByID(1)
  
  
  
  return <div><>
  <meta charSet="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, viewport-fit=cover"
  />
  <title>Help Center — TouringGO</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  :root{\n    --ink:#152447;\n    --blue:#2454e8;\n    --blue-deep:#122a63;\n    --blue-tint:#e7eefd;\n    --paper:#ffffff;\n    --paper-dim:#f5f7fd;\n    --white:#ffffff;\n    --line:#e1e6f2;\n    box-sizing:border-box;\n    padding-top:env(safe-area-inset-top,0px);\n    padding-bottom:env(safe-area-inset-bottom,0px);\n  }\n  *{box-sizing:inherit;margin:0;padding:0;}\n  html{scroll-padding-top:env(safe-area-inset-top,0px);}\n  html,body{height:100%;}\n  body{background:var(--paper);color:var(--ink);font-family:'Work Sans',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;}\n  img,svg{max-width:100%;display:block;}\n  h1,h2,h3{font-family:'Fraunces',serif;font-weight:500;line-height:1.05;letter-spacing:-0.01em;}\n  a{color:inherit;}\n  .wrap{max-width:1080px;margin:0 auto;padding:0 28px;}\n\n  .imgslot{position:relative;width:100%;height:100%;background:repeating-linear-gradient(135deg,#eef1fb,#eef1fb 10px,#e4e9fa 10px,#e4e9fa 20px);display:flex;align-items:center;justify-content:center;overflow:hidden;}\n  .imgslot img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0;}\n  .imgslot .lbl{position:relative;z-index:2;font-size:0.72rem;font-weight:600;color:#8592b8;background:rgba(255,255,255,.85);padding:5px 10px;border-radius:999px;letter-spacing:.02em;}\n\n  .topnav{position:sticky;top:0;top:env(safe-area-inset-top,0px);z-index:50;background:var(--paper);border-bottom:1px solid var(--line);}\n  .topnav-inner{max-width:1080px;margin:0 auto;padding:16px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px;}\n  .brand{font-family:'Fraunces',serif;font-size:1.25rem;font-weight:600;letter-spacing:-0.01em;}\n  .brand span{color:var(--blue);}\n  .tabs{display:flex;gap:4px;background:var(--paper-dim);border:1px solid var(--line);padding:4px;border-radius:999px;}\n  .tab-btn{font-family:'Work Sans',sans-serif;font-size:0.88rem;font-weight:600;padding:8px 18px;border-radius:999px;border:none;background:transparent;color:var(--ink);cursor:pointer;text-decoration:none;display:inline-block;}\n  .tab-btn.active{background:var(--blue);color:var(--white);}\n\n  .help-hero{position:relative;overflow:hidden;}\n  .hero-bg{position:absolute;inset:0;z-index:0;}\n  .hero-scrim{position:absolute;inset:0;z-index:1;background:linear-gradient(100deg,rgba(18,42,99,.82) 0%,rgba(18,42,99,.55) 45%,rgba(18,42,99,.15) 75%);}\n  .help-hero-inner{max-width:1080px;margin:0 auto;padding:70px 28px 56px;position:relative;z-index:2;}\n  .help-hero .kicker{display:inline-block;color:var(--white);font-size:0.78rem;font-weight:600;background:rgba(255,255,255,.16);padding:6px 14px;border-radius:999px;margin-bottom:14px;}\n  .help-hero h1{color:var(--white);font-size:clamp(2rem,4.8vw,2.9rem);max-width:10em;}\n  .help-hero p{color:var(--white);opacity:.95;margin-top:14px;max-width:32em;line-height:1.6;}\n  .help-hero-area{min-height:340px;}\n  .search-box{margin-top:26px;display:flex;background:var(--white);border-radius:10px;overflow:hidden;max-width:560px;box-shadow:0 12px 30px rgba(0,0,0,.15);}\n  .search-box input{flex:1;border:none;padding:15px 18px;font-family:'Work Sans',sans-serif;font-size:0.95rem;outline:none;}\n  .search-box button{border:none;background:var(--blue);color:var(--white);font-weight:600;padding:0 24px;cursor:pointer;font-family:'Work Sans',sans-serif;font-size:0.92rem;}\n\n  .help-body{padding:64px 0 20px;}\n  .section-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:22px;}\n  .section-head h2{font-size:1.5rem;}\n  .section-head a{font-size:0.85rem;font-weight:600;color:var(--blue);text-decoration:none;border-bottom:1px solid currentColor;}\n\n  .topics-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:60px;}\n  .topic-card{border:1px solid var(--line);padding:20px 18px;border-radius:10px;background:var(--white);}\n  .topic-card .mark{width:32px;height:32px;border-radius:8px;background:var(--blue-tint);display:flex;align-items:center;justify-content:center;margin-bottom:14px;color:var(--blue);}\n  .topic-card h3{font-family:'Work Sans',sans-serif;font-weight:600;font-size:0.95rem;}\n  .topic-card p{font-size:0.82rem;color:#6b7391;margin-top:4px;}\n\n  .help-columns{display:grid;grid-template-columns:1.5fr 1fr;gap:48px;margin-bottom:64px;align-items:start;}\n  .faq-list{border-top:1px solid var(--line);}\n  .faq-item{border-bottom:1px solid var(--line);}\n  .faq-item summary{padding:16px 2px;cursor:pointer;font-weight:500;font-size:0.95rem;display:flex;justify-content:space-between;align-items:center;list-style:none;}\n  .faq-item summary::-webkit-details-marker{display:none;}\n  .faq-item summary::after{content:'+';font-size:1.2rem;color:var(--blue);transition:transform .2s ease;}\n  .faq-item[open] summary::after{content:'–';}\n  .faq-item p{padding:0 2px 16px;font-size:0.88rem;color:#6b7391;line-height:1.6;max-width:38em;}\n\n  .support-card{background:var(--blue-deep);color:var(--white);border-radius:10px;padding:26px 24px;}\n  .support-card h3{font-family:'Fraunces',serif;font-size:1.2rem;font-weight:500;margin-bottom:4px;}\n  .support-card > p{font-size:0.85rem;color:#c3d3fb;margin-bottom:18px;}\n  .support-row{display:flex;gap:12px;padding:13px 0;border-top:1px solid rgba(255,255,255,.16);align-items:flex-start;}\n  .support-row:first-of-type{border-top:none;}\n  .support-row .ic{color:#9bb7fb;font-size:1rem;margin-top:1px;}\n  .support-row .t{font-weight:600;font-size:0.9rem;}\n  .support-row .d{font-size:0.82rem;color:#c3d3fb;margin-top:2px;}\n\n  .articles-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:70px;}\n  .article-card{border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--white);}\n  .article-thumb{height:110px;}\n  .article-card .body{padding:16px 16px 18px;}\n  .article-card h4{font-size:0.92rem;font-weight:600;font-family:'Work Sans',sans-serif;line-height:1.35;}\n  .article-card .tag{font-size:0.75rem;color:var(--blue);font-weight:600;margin-top:8px;}\n\n  footer{padding:26px 0 50px;border-top:1px solid var(--line);}\n  footer .wrap{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}\n  footer p{font-size:0.8rem;color:#8a92b0;}\n\n  @media (max-width:860px){\n    .help-columns{grid-template-columns:1fr;}\n    .topics-grid{grid-template-columns:repeat(2,1fr);}\n    .articles-grid{grid-template-columns:repeat(2,1fr);}\n  }\n  @media (max-width:560px){\n    .topics-grid{grid-template-columns:1fr;}\n    .articles-grid{grid-template-columns:1fr;}\n    .topnav-inner{flex-direction:column;align-items:flex-start;gap:12px;}\n    .search-box{flex-direction:column;border-radius:10px;}\n    .search-box button{padding:13px;}\n  }\n\n  @media (prefers-color-scheme: dark){\n    :root:not([data-theme=\"light\"]){--paper:#0f1424;--paper-dim:#161d33;--ink:#e9edfb;--line:#2a3352;--white:#161d33;}\n    :root:not([data-theme=\"light\"]) .topic-card p,\n    :root:not([data-theme=\"light\"]) .faq-item p{color:#a6afd1;}\n  }"
    }}
  />
  <main>
    <section className="help-hero">
      <div className="hero-bg help-hero-area imgslot">
        
        <img
          src="https://imgs.search.brave.com/ZAaPECqlLSGTZwM9lgBpVFSZIxLzOlbAykyOxW8orVM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC84L2Yv/YS83Nzc0OTgtMTky/MHgxMDgwLWRlc2t0/b3AtMTA4MHAtYW5n/a29yLXdhdC1iYWNr/Z3JvdW5kLXBob3Rv/LmpwZw"
          alt="Help center hero photo"
          
        />
        
      </div>
      <div className="hero-scrim" />
      <div className="help-hero-inner">
        <div className="kicker">Help center</div>
        <h1>How can we help you?</h1>
        <p>
          Find answers, get support, and make the most of your journey with
          TouringGO.
        </p>
        <form className="search-box" onsubmit="return false;">
          <input
            type="text"
            placeholder="Search for help — booking, cancellation, payment..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
    <section className="help-body">
      <div className="wrap">
        <div className="section-head">
          <h2>Browse help topics</h2>
          <a href="#">View all topics</a>
        </div>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="mark"><FontAwesomeIcon icon={faCalendarDays} style={{color: "rgb(116, 192, 252)",}} /></div>
            <h3>Bookings</h3>
            <p>Manage your reservations</p>
          </div>
          <div className="topic-card">
            <div className="mark"><FontAwesomeIcon icon={faCreditCard} style={{color: "rgb(116, 192, 252)",}} /></div>
            <h3>Payments</h3>
            <p>Billing, refunds, promotions</p>
          </div>
          <div className="topic-card">
            <div className="mark"><FontAwesomeIcon icon={faPlaneUp} style={{color: "rgb(116, 192, 252)",}} /></div>
            <h3>Flights</h3>
            <p>Booking and changes</p>
          </div>
          <div className="topic-card">
            <div className="mark"><FontAwesomeIcon icon={faHotel} style={{color: "rgb(116, 192, 252)",}} /></div>
            <h3>Stays</h3>
            <p>Hotel booking and policies</p>
          </div>
          <div className="topic-card">
            <div className="mark"><FontAwesomeIcon icon={faMap} style={{color: "rgb(116, 192, 252)",}} /></div>
            <h3>Tours &amp; activities</h3>
            <p>Tickets and experiences</p>
          </div>
          <div className="topic-card">
            <div className="mark"><FontAwesomeIcon icon={faCar} style={{color: "rgb(116, 192, 252)",}} /></div>
            <h3>Car rental</h3>
            <p>Rental policies and requirements</p>
          </div>
          <div className="topic-card">
            <div className="mark"><FontAwesomeIcon icon={faBus} style={{color: "rgb(116, 192, 252)",}} /></div>
            <h3>Transport</h3>
            <p>Airport transfers and local travel</p>
          </div>
          <div className="topic-card">
            <div className="mark"><FontAwesomeIcon icon={faGear} style={{color: "rgb(116, 192, 252)",}} /></div>
            <h3>Account</h3>
            <p>Profile, settings, and security</p>
          </div>
        </div>
        <div className="help-columns">
          <div>
            <div className="section-head">
              <h2>Frequently asked questions</h2>
              <a href="#">View all FAQs</a>
            </div>
            <div className="faq-list">
              <details className="faq-item" open="">
                <summary>How do I make a booking on TouringGO?</summary>
                <p>
                  Search your destination, pick dates and travelers, then
                  confirm payment — you'll get an instant confirmation by email.
                </p>
              </details>
              <details className="faq-item">
                <summary>Can I cancel or modify my booking?</summary>
                <p>
                  Most bookings can be changed from "My trips" up to the policy
                  cutoff shown at checkout for that listing.
                </p>
              </details>
              <details className="faq-item">
                <summary>How do I get a refund?</summary>
                <p>
                  Eligible refunds are issued to your original payment method
                  within 5–10 business days of approval.
                </p>
              </details>
              <details className="faq-item">
                <summary>What payment methods are accepted?</summary>
                <p>
                  We accept major cards, popular local wallets, and bank
                  transfer in supported countries.
                </p>
              </details>
              <details className="faq-item">
                <summary>Will I receive a confirmation email?</summary>
                <p>
                  Yes — confirmations arrive within minutes and also appear in
                  your account's trip history.
                </p>
              </details>
              <details className="faq-item">
                <summary>How do I contact the hotel or tour operator?</summary>
                <p>
                  Operator contact details are listed on your booking
                  confirmation page under "Contact details."
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  What happens if my flight is delayed or cancelled?
                </summary>
                <p>
                  We monitor your flight automatically and notify you of
                  rebooking or refund options as soon as a change is confirmed.
                </p>
              </details>
            </div>
          </div>
          <div className="support-card">
            <h3>Still need help?</h3>
            <p>Our support team is here for you anytime.</p>
            <div className="support-row">
              <div className="ic"><FontAwesomeIcon icon={faMessage} style={{color: "rgb(116, 192, 252)",}} /></div>
              <div>
                <div className="t">Live chat</div>
                <div className="d">Online now — chat with our support team</div>
              </div>
            </div>
            <div className="support-row">
              <div className="ic"><FontAwesomeIcon icon={faEnvelope} style={{color: "rgb(116, 192, 252)",}} /></div>
              <div>
                <div className="t">Email us</div>
                <div className="d">
                  support@touringgo.com — replies within 24 hours
                </div>
              </div>
            </div>
            <div className="support-row">
              <div className="ic"><FontAwesomeIcon icon={faPhone} style={{color: "rgb(116, 192, 252)",}} /></div>
              <div>
                <div className="t">Call us</div>
                <div className="d">Daily 8:00 AM – 10:00 PM (GMT+7)</div>
              </div>
            </div>
            <div className="support-row">
              <div className="ic"><FontAwesomeIcon icon={faFile} style={{color: "rgb(116, 192, 252)",}} /></div>
              <div>
                <div className="t">Submit a request</div>
                <div className="d">Tell us your issue in detail</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-head">
          <h2>Popular articles</h2>
          <a href="#">View all articles</a>
        </div>
        <div className="articles-grid">
          <div className="article-card">
            <div className="article-thumb imgslot">
              <img src="" alt=""  />
              
            </div>
            <div className="body">
              <h4>How to change your flight booking</h4>
              <div className="tag">Flights</div>
            </div>
          </div>
          <div className="article-card">
            <div className="article-thumb imgslot">
              <img src="" alt=""  />
              
            </div>
            <div className="body">
              <h4>Hotel check-in &amp; check-out guide</h4>
              <div className="tag">Stays</div>
            </div>
          </div>
          <div className="article-card">
            <div className="article-thumb imgslot">
              <img src="" alt=""  />
              
            </div>
            <div className="body">
              <h4>Top things to do in Siem Reap</h4>
              <div className="tag">Tours &amp; activities</div>
            </div>
          </div>
          <div className="article-card">
            <div className="article-thumb imgslot">
              <img src="" alt=""/>
             
            </div>
            <div className="body">
              <h4>Accepted payment methods</h4>
              <div className="tag">Payments</div>
            </div>
          </div>
          <div className="article-card">
            <div className="article-thumb imgslot">
              <img src="" alt="" />
              
            </div>
            <div className="body">
              <h4>Car rental requirements and policies</h4>
              <div className="tag">Car rental</div>
            </div>
          </div>
          <div className="article-card">
            <div className="article-thumb imgslot">
                <div>
                  <h1>{province.nameKh}</h1>
                    <img
                    className="w-[200px] h-[200px]"
                      src={province.imageUrl}
                      alt={province.nameKh}
                      />
                </div>
              
            </div>
            <div className="body">
              <h4>Tips for a smooth travel experience</h4>
              <div className="tag">Travel tips</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
 
</>
</div>;
}

export default HelpCenter;
