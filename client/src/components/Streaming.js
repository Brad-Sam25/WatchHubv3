
import { Tile } from 'react-bulma-components';

function Streaming() {
    return (

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
    )
    }
export default Streaming