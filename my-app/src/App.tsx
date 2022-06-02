import "./App.css";
import { Actions } from "./components/actions";
import { Info } from "./components/info";
import { Keyboard } from "./components/keyboard";

function App() {
    return (
        <div className="container">
            <Info></Info>
            <main className="phone">
                <Keyboard></Keyboard>
                <Actions></Actions>
            </main>
        </div>
    );
}

export default App;
