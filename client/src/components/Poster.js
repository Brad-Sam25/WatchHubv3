import { Tile } from 'react-bulma-components';

function Poster () {
    return(
        
        <Tile renderAs="article" kind="child" notification color="danger" id="post">
            <Heading>Wide tile</Heading>
            <Heading subtitle>Aligned with the right tile</Heading>
            <div className="content">
                <article class="tile is-child notification is-link">
                    <figure id="result" class="image is-10by13"></figure>
                </article>
            </div>
        </Tile>
        
    )
}
