import { Tile } from 'react-bulma-components';
import React from 'react';


function Search(props) {
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
                                onChange={props.handleInputChange}
                                value={props.value}
                            />
                        </div>

                        <button id="searchBtn" class="button" type="submit" onClick={props.handleFormSubmit}>
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