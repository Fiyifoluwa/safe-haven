import React from "react";

class Landing extends React.Component {
  render() {
    return (
      <div>
        {/* header */}
        <section className="header-container">
          <div className="wrapper">
            <header>
              <div className="header-content">
                <div>
                  <span>Home</span> is where your Wi-Fi connects automatically
                </div>
                <p>Let’s help you find a homely apartment! 🚀🔥</p>
              </div>

              <div className="filters">
                <ul>
                  <li>
                    <a href>Sale</a>
                    <img src="./images/icons/arrow-down.svg" alt="" />
                  </li>
                  <li>
                    <a href>Type</a>
                    <img src="./images/icons/arrow-down.svg" alt="" />
                  </li>
                  <li>
                    <a href>Bedrooms</a>
                    <img src="./images/icons/arrow-down.svg" alt="" />
                  </li>
                  <li>
                    <a href>Min Price</a>
                    <img src="./images/icons/arrow-down.svg" alt="" />
                  </li>
                  <li>
                    <a href>Max Price</a>
                    <img src="./images/icons/arrow-down.svg" alt="" />
                  </li>
                </ul>

                <div>
                  <h2 className="search-btn">SEARCH</h2>
                </div>
              </div>
            </header>
          </div>
        </section>
        {/* listings */}
        <section className="listings-container">
          <div className="wrapper">
            <div className="listings">
              <div className="listings-head">
                <h1>New Listings</h1>
                <a href>View all listings</a>
              </div>

              <div className="listings-grid">
                <div className="listing-card">
                  <img
                    src="./images/img/prop1.png"
                    className="listing-img"
                    alt=""
                  />
                  <img className="like" src="./images/icons/Heart.svg" alt="" />
                  <div className="tags">
                    <p>Premium plus</p>
                    <p>7 Toilets</p>
                    <p>6 Bathrooms</p>
                    <p>5 Parking lots</p>
                  </div>
                  <div className="listing-deets">
                    <div className="title">
                      <p>6 bedroom detached duplex</p>
                      <a href>View Details</a>
                    </div>
                    <div className="add-phone">
                      <div className="address">
                        <p>
                          <img src="./images/icons/Location.svg" alt="" />
                          9, Ugochukwu Duru Street, Lekki, Lagos
                        </p>
                      </div>
                      <div className="phone">
                        <p>
                          <img src="./images/icons/phone.svg" alt="" />
                          +234 701 906 8634
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-card">
                  <img
                    src="./images/img/prop2.png"
                    className="listing-img"
                    alt=""
                  />
                  <img className="like" src="./images/icons/Heart.svg" alt="" />
                  <div className="tags">
                    <p>Premium plus</p>
                    <p>7 Toilets</p>
                    <p>6 Bathrooms</p>
                    <p>5 Parking lots</p>
                  </div>
                  <div className="listing-deets">
                    <div className="title">
                      <p>6 bedroom detached duplex</p>
                      <a href>View Details</a>
                    </div>
                    <div className="add-phone">
                      <div className="address">
                        <p>
                          <img src="./images/icons/Location.svg" alt="" />
                          9, Ugochukwu Duru Street, Lekki, Lagos
                        </p>
                      </div>
                      <div className="phone">
                        <p>
                          <img src="./images/icons/phone.svg" alt="" />
                          +234 701 906 8634
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-card">
                  <img
                    src="./images/img/prop3.png"
                    className="listing-img"
                    alt=""
                  />
                  <img className="like" src="./images/icons/Heart.svg" alt="" />
                  <div className="tags">
                    <p>Premium plus</p>
                    <p>7 Toilets</p>
                    <p>6 Bathrooms</p>
                    <p>5 Parking lots</p>
                  </div>
                  <div className="listing-deets">
                    <div className="title">
                      <p>6 bedroom detached duplex</p>
                      <a href>View Details</a>
                    </div>
                    <div className="add-phone">
                      <div className="address">
                        <p>
                          <img src="./images/icons/Location.svg" alt="" />
                          9, Ugochukwu Duru Street, Lekki, Lagos
                        </p>
                      </div>
                      <div className="phone">
                        <p>
                          <img src="./images/icons/phone.svg" alt="" />
                          +234 701 906 8634
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-card">
                  <img
                    src="./images/img/prop4.png"
                    className="listing-img"
                    alt=""
                  />
                  <img className="like" src="./images/icons/Heart.svg" alt="" />
                  <div className="tags">
                    <p>Premium plus</p>
                    <p>7 Toilets</p>
                    <p>6 Bathrooms</p>
                    <p>5 Parking lots</p>
                  </div>
                  <div className="listing-deets">
                    <div className="title">
                      <p>6 bedroom detached duplex</p>
                      <a href>View Details</a>
                    </div>
                    <div className="add-phone">
                      <div className="address">
                        <p>
                          <img src="./images/icons/Location.svg" alt="" />
                          9, Ugochukwu Duru Street, Lekki, Lagos
                        </p>
                      </div>
                      <div className="phone">
                        <p>
                          <img src="./images/icons/phone.svg" alt="" />
                          +234 701 906 8634
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about */}
        <section className="about-container">
          <div className="wrapper">
            <div>
              <h1 className="about-head">About Safe Haven</h1>

              <div className="about">
                <div className="about-grid">
                  <div>
                    <img src="./images/img/grid1.png" alt="" />
                    <img src="./images/img/grid3.png" alt="" />
                  </div>
                  <div>
                    <img src="./images/img/grid2.png" alt="" />
                    <img src="./images/img/grid4.png" alt="" />
                  </div>
                </div>

                <div className="about-info">
                  <p className="first-p">
                    Safe Haven is a real estate and property website in Nigeria
                    with property listings for sale, rent and lease. We offer
                    Nigerian property seekers an easy way to find details of
                    property like homes, houses, lands, shops, office spaces and
                    other commercial properties to buy or rent. Safe Haven
                    provides a platform for advertising property from
                    organisations and Nigerian private property owners.
                  </p>
                  <p className="second-p">
                    Safe Haven is the clear leading property website with lots
                    of users, advertising members and properties. Our
                    advertisers are property professionals such as estate
                    agents, letting (rental) agents, new homes developers and
                    Nigerian private property owners who offer properties within
                    Nigeria for property hunters.
                  </p>
                  <div className="about-metrics">
                    <div>
                      <h1 className="numbers">345</h1>
                      <p>Areas covered</p>
                    </div>
                    <div>
                      <h1 className="numbers">4,656</h1>
                      <p>Property listings</p>
                    </div>
                    <div>
                      <h1 className="numbers">45</h1>
                      <p>Agents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonials */}
        <section className="test-container">
          <div>
            <h1 className="test-head wrapper">Word on the street</h1>
            <div className="test-group">
              <div className="test-purple">
                <div>
                  <div className="test-text">
                    <p>
                      Safe Haven has helped me find a good home, I have moved
                      <br /> in with my family and I can say we are so happy.{" "}
                      <br />
                      The process of finding a good home was so seamless and we{" "}
                      <br />
                      didn’t have to look too hard to get a a good place.
                    </p>
                    <h4>Jejelaye Surulere</h4>
                    <p>LAGOS, NIGERIA</p>
                  </div>
                  <a className="story-btn" href>
                    READ STORY
                  </a>
                </div>
                <div className="arrows">
                  <a href>
                    <img src="./images/icons/left-arrow.svg" alt="" />
                  </a>
                  <a href>
                    <img src="./images/icons/right-arrow-long.svg" alt="" />
                  </a>
                </div>
              </div>

              <div className="test-image">
                <img src="./images/img/testimonial.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* blog posts */}
        <section className="blog-container wrapper">
          <div className="blog-head">
            <h1>Blog posts</h1>
            <a href>View all blog posts</a>
          </div>

          <div className="blog-grid">
            <div className="blog-card">
              <img src="./images/img/property-img.png" alt="" />
              <div className="blog-deets">
                <p className="blog-title">
                  The big problems with Nigeria's small property tech market
                </p>
                <div>
                  <p className="tag-property">Property</p>
                  <p>November 30, 2020</p>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <img src="./images/img/housing-img.png" alt="" />
              <div className="blog-deets">
                <p className="blog-title">
                  Realtor unveils plans to tackle housing deficit in Nigeria
                </p>
                <div>
                  <p className="tag-housing">Housing</p>
                  <p>November 30, 2020</p>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <img src="./images/img/mortgage-img.png" alt="" />
              <div className="blog-deets">
                <p className="blog-title">
                  Freddie Mac: Mortgage Rates Hit a New Record Low the First
                  Week of 2021
                </p>
                <div>
                  <p className="tag-mortgage">Mortgage</p>
                  <p>November 30, 2020</p>
                </div>
              </div>
            </div>
            <div className="blog-card do-not-show-mob">
              <img src="./images/img/mortgage-img.png" alt="" />
              <div className="blog-deets">
                <p className="blog-title">
                  Freddie Mac: Mortgage Rates Hit a New Record Low the First
                  Week of 2021
                </p>
                <div>
                  <p className="tag-mortgage">Mortgage</p>
                  <p>November 30, 2020</p>
                </div>
              </div>
            </div>
            <div className="blog-card do-not-show-mob">
              <img src="./images/img/property-img.png" alt="" />
              <div className="blog-deets">
                <p className="blog-title">
                  The big problems with Nigeria's small property tech market
                </p>
                <div>
                  <p className="tag-property">Property</p>
                  <p>November 30, 2020</p>
                </div>
              </div>
            </div>
            <div className="blog-card do-not-show-mob">
              <img src="./images/img/housing-img.png" alt="" />
              <div className="blog-deets">
                <p className="blog-title">
                  Realtor unveils plans to tackle housing deficit in Nigeria
                </p>
                <div>
                  <p className="tag-housing">Housing</p>
                  <p>November 30, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* mobile download */}
        <section className="mobile wrapper">
          <div>
            <h1>We are on your mobile phones</h1>
            <p>Download the Safe Haven app!</p>
            <a href>
              <img src="./images/mobile/app-store.png" alt="" />
            </a>
            <a href>
              <img src="./images/mobile/google-play.png" alt="" />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
