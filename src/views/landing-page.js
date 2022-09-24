import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import OutlineButton from '../components/outline-button'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Kevin Jumarang - Travel</title>
        <meta property="og:title" content="Kevin Jumarang - Travel" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <h1 className="landing-page-logo">Travel</h1>
          <div className="landing-page-right-side">
            <div className="landing-page-links-container">
              <span className="landing-page-text">Home</span>
              <span className="landing-page-text01">About</span>
              <span className="landing-page-text02">Contact</span>
            </div>
          </div>
          <div data-type="BurgerMenu" className="landing-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Travel</h1>
                <div
                  data-type="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side1">
                <div className="landing-page-links-container1">
                  <span className="landing-page-text03">Home</span>
                  <span className="landing-page-text04">About</span>
                  <span className="landing-page-text05">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="landing-page-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="landing-page-follow-container">
              <span className="landing-page-text07">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <h1 className="landing-page-text08">
            <br></br>
            <br></br>
            <br></br>
            <span>Kevin I. Jumarang </span>
          </h1>
          <div className="landing-page-container01">
            <h2 className="landing-page-subheading">
              Cycling Enthusiast since 2014
            </h2>
            <div className="landing-page-content-container"></div>
          </div>
          <span className="landing-page-text13">
            <span>   </span>
            <span>
              “Life is like riding a bicycle. To keep your balance you must keep
              moving”
            </span>
          </span>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1>Most famous places</h1>
        <div className="landing-page-cards-container">
          <div className="landing-page-container02">
            <img
              alt="image"
              src="/playground_assets/picsart_12-26-06.35.04-min-300w.jpg"
              loading="lazy"
              className="landing-page-image"
            />
            <div className="landing-page-container03">
              <span className="landing-page-text17">
                <span>Mabini, Batangas</span>
                <br></br>
                <span> (Mt. Gulugod Baboy)</span>
              </span>
              <span className="landing-page-text21">
                Mabini, officially the Municipality of Mabini, is a 1st class
                municipality in the province of Batangas, Philippines. According
                to the 2020 census, it has a population of 50,858 people. Mabini
                is known for its diving and snorkeling sites. It is named after
                Apolinario Mabini, a Filipino revolutionary hero
              </span>
              <OutlineButton button1="Discover place"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container04">
            <img
              alt="image"
              src="/playground_assets/img-3609-min-300w.jpg"
              className="landing-page-image1"
            />
            <div className="landing-page-container05">
              <span className="landing-page-text22">
                <span>
                  Taal, Batangas
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>(Minor Basilica of St. Martin of Tours)</span>
              </span>
              <span className="landing-page-text26">
                Taal is famous for its old ancestral houses, one particular
                ancestral house (now a museum) where Marcela Coronel Mariño de
                Agoncillo grew up in Taal, Batangas built in the 1770s by her
                grandparents, Don Andres Sauza Mariño and Doña Eugenia Diokno
                Mariño, (added by Slavstan Mariño). Its poblacion (central
                business district) is designated as a National Historical
                Landmark.[5] The municipality is known as the Balisong and
                Barong Tagalog Capital of the Philippines.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <OutlineButton button1="Discover place"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container06">
            <img
              alt="image"
              src="/playground_assets/img-5651-min-300w.jpg"
              className="landing-page-image2"
            />
            <div className="landing-page-container07">
              <span className="landing-page-text27">
                Cuenca, Batangas (Lumampao Don Juan)
              </span>
              <span className="landing-page-text28">
                <span>
                  Cuenca, at the foot of Mount Maculot, formed part of nearby
                  San Jose during the Spanish era until it was separated in
                  1872. It gets its name from the Spanish word for watershed.
                </span>
                <br></br>
                <span>
                  The town&apos;s major tourist draw is Mount Maculot, a
                  700-meter (2,300 ft) high mountain beside Taal Lake, also a
                  sacred site to ancient Tagalog religion and Christianity.
                  Cuenca has a growing number of private resorts, mostly
                  mid-range to splurge.
                </span>
              </span>
              <OutlineButton button1="Discover place"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container08">
            <img
              alt="image"
              src="/playground_assets/img-5786-min-300w.jpg"
              className="landing-page-image3"
            />
            <div className="landing-page-container09">
              <span className="landing-page-text32">
                San Nicolas, Batangas (San Nicolas Baywalk)
              </span>
              <span className="landing-page-text33">
                The place of San Nicolas is such the smallestplace here in
                Batangas.It has a measurement of 14.37 square km (55sqm) (2)
                land area includes southero half of Taal Volcano.Thisplace is
                really blessed because it contains beautiful places and also
                this is a historical place.This is the only place that you can
                find the real beauty of nature and besides,the San Nicolas
                beauty will not be accomplished without the trust worthy people
                that has a wonderful mission to make San Nicolas to be one of
                tourist spots here in Batangas.
              </span>
              <OutlineButton button1="Discover place"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container10">
            <img
              alt="image"
              src="/playground_assets/img-4845-min-300w.jpg"
              className="landing-page-image4"
            />
            <div className="landing-page-container11">
              <span className="landing-page-text34">
                Talisay, Batangas (Talisay - Laurel Road)
              </span>
              <span className="landing-page-text35">
                Being one of the towns closest to Taal Volcano, Talisay has
                fertile soil that is used to cultivate seedlings of a variety of
                trees, vegetables and flowering plants
              </span>
              <OutlineButton button1="Discover place"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container12">
            <img
              alt="image"
              src="/playground_assets/picsart_02-20-08.08.26-min-500h.jpg"
              className="landing-page-image5"
            />
            <div className="landing-page-container13">
              <span className="landing-page-text36">
                Lemery, Batangas (Fantasy World)
              </span>
              <span className="landing-page-text37">
                Fantasy World was never completed, but it has become a famous
                landmark in Batangas. Yep, Batangas. Contrary to a popular
                misconception, Fantasy World is NOT in Tagaytay. It rises in the
                middle of the rolling hills of Barangay Mayasang in Lemery,
                Batangas. I know this for sure because I live nearby. I pass by
                this castle going to or coming from Manila.
              </span>
              <OutlineButton button1="Discover place"></OutlineButton>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>
            <span>Eat - Unwind - Travel</span>
            <br></br>
          </h1>
          <div className="landing-page-follow-container1">
            <span className="landing-page-text40">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="landing-page-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link4"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link5"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link6"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
