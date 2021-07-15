
import { Tile } from 'react-bulma-components';

function Stats() {
    return (
        <Tile renderAs="article" kind="child" notification color="success" id="stats">
            <div className="content">
                <h1 id="movietitle" className="title has-text-white"></h1>
                <h4 id="titleyear"></h4>
                <h4 id="actors" className="is-family-monospace"></h4>
                <p
                    id="description"
                    className="subtitle has-text-weight-semibold"
                ></p>
                <div id="trailerBox">

                </div>
                <div className="content">
                    {/* <!-- Content --> */}
                </div>
            </div>

        </Tile>
    )
}
export default Stats;