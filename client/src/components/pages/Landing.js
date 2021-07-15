import React from "react"
import {Tile} from 'react-bulma-components';
import {Box} from 'react-bulma-components';
import {Section} from 'react-bulma-components';

import Poster from "../Poster";
import Related from "../Related";
import Stats from "../Stats";
import Search from "../Search";
import API from "../utils/API";

searchMovies = query => {
  API.search(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
};

handleInputChange = event => {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
    [name]: value
  });
};

// When the form is submitted, search the OMDB API for the value of `this.state.search`
handleFormSubmit = event => {
  event.preventDefault();
  this.searchMovies(this.state.search);
};


export default function Landing() {
  return (
    <div>
      <Section>
        <Box id="box">
          <Tile kind="ancestor">
            <Tile size={8} vertical>
              <Tile>
                <Tile kind="parent" vertical>
                  <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                  />
                  <Related

                  />
                </Tile>
                <Tile kind="parent">
                  <Tile renderAs="article"
                    kind="child"
                    notification
                    color="info"
                    id="poster">
                    <article class="tile is-child notification is-link">
                      <figure id="result" class="image is-10by13"></figure>
                    </article>
                  </Tile>
                </Tile>
              </Tile>
              <Tile kind="parent">
                <Tile renderAs="article" kind="child" notification color="danger" id="streaming">
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
                  <div className="content" />
                </Tile>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Stats 
                title={this.state.result.Title}
              />
            </Tile>
          </Tile>
        </Box>
      </Section>
    </div>
  )}
