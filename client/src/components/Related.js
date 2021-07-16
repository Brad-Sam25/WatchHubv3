
import {Tile} from 'react-bulma-components';

function Related(props) {
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
                <div id="relatedsearch" class="column">{img</div>
                <div id="relatedsearch2" class="column"></div>
                <div id="relatedsearch3" class="column"></div>
            </div>

        </Tile>
    )
}
export default Related;