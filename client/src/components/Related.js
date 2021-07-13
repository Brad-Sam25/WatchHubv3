import "bulma/css/bulma.min.css"
import {Tile} from 'react-bulma-components';

function Related() {
    return (
        <Tile
            renderAs="article"
            kind="child"
            notification
            color="warning"
            id="related"
        >
            <p class="title">Related Searches</p>
            <p class="subtitle">Titles related to your search</p>
            <div class="columns">
                <div id="relatedsearch" class="column"></div>
                <div id="relatedsearch2" class="column"></div>
                <div id="relatedsearch3" class="column"></div>
            </div>

        </Tile>
    )
}
export default Related;