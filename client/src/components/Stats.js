
import { Tile } from 'react-bulma-components';

function Stats() {
    return (
        <Tile renderAs="article" kind="child" notification color="success" id="stats">
            <div class="content">
                <h1 id="movietitle" class="title has-text-white">{props.title}</h1>
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

        </Tile>
    )
}
export default Stats;