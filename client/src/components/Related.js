
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
            <p className="title">Related Searches</p>
            <p className="subtitle">Titles related to your search</p>
            <div className="columns">
                <div id="relatedsearch" className="column"></div>
                <div id="relatedsearch2" className="column"></div>
                <div id="relatedsearch3" className="column"></div>
            </div>

        </Tile>
    )
}
export default Related;