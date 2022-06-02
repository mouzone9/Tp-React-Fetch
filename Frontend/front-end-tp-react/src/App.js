import React                 from "react";
import FormularConnection    from "./components/formularConnection.js";
import FormularSubscription  from "./components/formularSubscription.js";
import Post                  from "./components/post.js";
import './styles/setting.css'

function App() {
    return (
        <div>
            <h1>Tp React</h1>

            <FormularConnection />
            <FormularSubscription />
            <Post />
        </div>
    )
}

export default App;
