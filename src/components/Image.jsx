import React  from 'react';



export default function Image(props) {

    return (
        <div className="Image">
            <h1>Search for a Photo!</h1>
            <form action="/.netlify/functions/search" method="POST">
                <label for="query">Search</label>
                <input type="text" id="query" name="query" />
                <button>Submit</button>
            </form>
        </div>
    );
}
