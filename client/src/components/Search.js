import {Tile} from 'react-bulma-components';
import "bulma/css/bulma.min.css"
function Search() {
    return (
        
            <Tile
                renderAs="article"
                kind="child"
                notification
                color="link"
                id="querybox"
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
            </Tile>
            )
}

export default Search;