import './App.css';
import React from 'react';

function App() {
    return (
        <form action="http://localhost:4000/profile" enctype="multipart/form-data" method="post">
            <div class="form-group">
                <input type="file" name="avatar" />
                <input type="number" placeHolder="enter image required quality" />
                <select value="JPEG">
                    <option>JPEG</option>
                    <option>PNG</option>
                </select>
                <input type="submit" value="Get me the stats!" class="btn btn-default" />
            </div>
        </form>
    );
}
export default App;