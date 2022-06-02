import "./App.css";
import { Actions } from "./components/actions";
import { Keyboard } from "./components/keyboard";

function App() {
    return (
        <div className="container">
            <span className="message">Calling...</span>
            <main className="phone">
                <Keyboard></Keyboard>
                <Actions></Actions>
            </main>
        </div>
    );
}

export default App;
