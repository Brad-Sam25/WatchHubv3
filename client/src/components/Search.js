import {Tile} from 'react-bulma-components';
function Search() {
    return (
        
            <Tile
                renderAs="article"
                kind="child"
                notification
                color="link"
                id="querybox"
            >
                <div class="card column is-vertical is-4">
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
                        
                        <button id="searchBtn" class="button">
                            Search
                        </button>
                        <datalist id="searchinfo"></datalist>
                    </div>
                </div>
            </div>
            </Tile>
            )
}

export default Search;