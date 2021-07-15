
import { Tile } from 'react-bulma-components';

function Streaming() {
    return (

        <Tile renderAs="article" kind="child" notification color="danger" id="streaming">
            <div id="streaming-section" className="content is-centered">
                <nav className="columns is-centered is-vcentered">
                    <div className="level-item has-text-centered">
                        <div className="column">
                            <p className="heading">Critic Score</p>
                            <p className="title" id="critic-score"></p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div className="column">
                            <p className="heading">Ratings</p>
                            <p className="title" id="rating"></p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div className="column">
                            <p className="heading">Runtime</p>
                            <p className="title" id="run-time"></p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div className="column is-vcentered">
                            <p className="heading">Release Date</p>
                            <p className="title" id="release-date"></p>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="content" />
        </Tile>
    )
    }
export default Streaming