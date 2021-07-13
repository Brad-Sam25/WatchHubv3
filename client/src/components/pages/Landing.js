import React from "react"
export default function Landing() {
    return (
        <div>
          <section id="emptyhero" class="hero">
          <div class="hero-body">
            <div class=""></div>
          </div>
        </section>
        <div class="hero has-text-centered">
          <div id="search" class="hero-body">
            <div id="container">
              <div class="tile is-ancestor">
                <div class="tile is-vertical">
                  <div class="tile">
                    <Tile kind="parent" vertical>
                      <article
                        id="querybox"
                        class="tile is-child notification is-link"
                      >
                        <div class="columns is-centered">
                          <div class="column is-8">
                            <label class="label">Title Search</label>
                            <div class="control">
                              <input
                                id="userQuery"
                                class="input"
                                type="text"
                                placeholder="Search for your title here!"
                                list="searchinfo"
                              />
                            </div>
                            <br />
                            <button id="searchBtn" class="button">
                              Search
                            </button>
                            <datalist id="searchinfo"></datalist>
                          </div>
                        </div>
                      </article>
                      <article
                        id="related"
                        class="tile is-child notification is-link"
                      >
                        <p class="title">Related Searches</p>
                        <p class="subtitle">Titles related to your search</p>
                        <div class="columns">
                          <div id="relatedsearch" class="column"></div>
                          <div id="relatedsearch2" class="column"></div>
                          <div id="relatedsearch3" class="column"></div>
                        </div>
                      </article>
                    </div>
                    <div id="poster" class="tile is-parent">
                      <article class="tile is-child notification is-link">
                        <figure id="result" class="image is-10by13"></figure>
                      </article>
                    </div>
                  </div>
                  <div id="streaming" class="tile is-parent">
                    <article class="tile is-child notification is-link">
                      <div id="streaming-section" class="content is-centered">
                        <nav class="columns is-centered is-vcentered">
                          <div class="level-item has-text-centered">
                            <div class="column">
                              <p class="heading">Critic Score</p>
                              <p class="title" id="critic-score"></p>
                            </div>
                          </div>
                          <div class="level-item has-text-centered">
                            <div class="column">
                              <p class="heading">Ratings</p>
                              <p class="title" id="rating"></p>
                            </div>
                          </div>
                          <div class="level-item has-text-centered">
                            <div class="column">
                              <p class="heading">Runtime</p>
                              <p class="title" id="run-time"></p>
                            </div>
                          </div>
                          <div class="level-item has-text-centered">
                            <div class="column is-vcentered">
                              <p class="heading">Release Date</p>
                              <p class="title" id="release-date"></p>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </article>
                  </div>
                </div>
                <div id="stats" class="tile is-parent">
                  <article class="tile is-child notification is-link">
                    <div class="content">
                      <h1 id="movietitle" class="title has-text-white"></h1>
                      <h4 id="titleyear"></h4>
                      <h4 id="actors" class="is-family-monospace"></h4>
                      <p
                        id="description"
                        class="subtitle has-text-weight-semibold"
                      ></p>
                      <div id="trailerBox">
                      
                      </div>
                      <div class="content">
                        {/* <!-- Content --> */}
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div id="result"></div>
            </div>
          </div>
        </div>
    </div>
    )
}