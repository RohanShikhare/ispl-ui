import React from "react";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Link } from "react-router-dom";

function BangaloreStrikers() {
  return (
    <section className="teamPage">
      <div
        className="about-page-main comon-sub-page-main d-inline-block w-100"
        style={{
          backgroundImage:
            "url(https://www.ispl-t10.com/assets/image/ispl-bg.jpg)",
        }}
      >
        <div className="about-club-top">
          <div className="container">
            <div className="row row-cols-3 row-cols-md-6 team-logos justify-content-center">
              <div className="col text-center">
                <Link to="/team-list/chennai-singams">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png"
                    alt=""
                    className=" img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/majhi-mumbai">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/tiigers-of-kolkata">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/srinagar-ke-veer">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/kvn-bangalore-strikers">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/jzVTaGm8x3sv0HJFsbDELFR0juXkWCKUdturAY7e.png"
                    alt=""
                    className="bg-info img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/falcon-risers-hyderabad">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="about-page-main custom-about comon-sub-page-main d-inline-block w-100">
          <div className="about-club-top">
            <div className="container">
              <div className="row g-3 d-flex justify-content-center">
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                  <div className="team-logo">
                    <a href="">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/jzVTaGm8x3sv0HJFsbDELFR0juXkWCKUdturAY7e.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="team-name align-text-center">
                    <h2>KVN BANGALORE STRIKERS</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="team-detail-text">
                    <p>
                      <span>Owner</span> <b>-</b> K Venkat Narayan / Hritik
                      Roshan
                    </p>
                    <p>
                      <span>Coach</span> <b>-</b> Ankur Singh
                    </p>
                    <p>
                      <span>Venue</span> <b>-</b> Bangalore
                    </p>
                    <p>
                      <span>Captain</span>
                      <b>-</b>Ankur Singh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="playerspage d-inline-block w-100">
        <div className="container">
          <div className="container">
            <SectionTitle titleText="Batters" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/FNKlagt87spg6q5iM2qdkZGC6U8gnTMt0sfNu7UI.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Parv Lamba</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/J3CAxAXUfwrFhXcwjPwxae9Xs7hRaJ09KlFkCen5.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Ajit Mohite</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/LNeMkn35WGp1AdK23kX7QiTKIqvLJKcSMZpqkW4k.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Sunil Chawri</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/N0h8xxOQ6EVY3jAXG1DZhVwZix4zXAGliwYRCP7w.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Thomas Dias</p>
                  </div>
                </div>
              </div>
            </div>

            <SectionTitle titleText="All Rounders" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/vD2gXfEoebgBvkXFg00AquimulTUhL7GIYa94XR0.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Rahul Baghel</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/ZBA0pPr9y6NbOeYYTpyDzkC4LCNT4bFW7r57BDi8.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Saroj Paramanik</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/SmL8ttEtgYsCJBIvILAtLfShj6Z2ToMVpaUy5uc7.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Prajjwal Somvanshi</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/PlNkya93jMYKVc3rxjqSdOT2rDgcZa697yrueYa4.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Sharik Yasir</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/FtYeaqVA8Udbweon4J3EbHzdqJqITHskIO0EoJgW.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Harishkumar Kk</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/stEPJ0xKwf91AucXy18EKWQL2b2JWOsuh3twWun9.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Mansoor Kl</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/UkltcA5eISctLm3AC6g8fUS5Ag4oCyYPT5lMcQlJ.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Ankur Singh</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/yiFLHe5Ol9W8EJECFWl9gv29qF51AApMPFVl9Eig.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Bilal Rajput</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/be03aBEBbNPxvkza2efmn9CPglnne0yeb3tlbPaG.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Bunty Patel</p>
                  </div>
                </div>
              </div>
            </div>

            <SectionTitle titleText="Bowlers" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/5P3UZkoLr5CjbJlRpyN5MREl6ybRGAO7Pgn6Q2AI.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>ASHIQ ALI SHAMSU</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/E87yV36Y22mBx6AUlWZ4FOfUuG3PE17Tow9vo1ly.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Akash Gautam</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/77hc8oALwdKk9b3w8B6B2s3KMDdYLYU53ufmVrDB.png"
                      alt="teams01"
                    />
                    <div className="bat-icon">
                      <i className="fas fa-baseball"></i>
                    </div>
                  </figure>
                  <div className="design">
                    <p>Kulwinder Singh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BangaloreStrikers;
