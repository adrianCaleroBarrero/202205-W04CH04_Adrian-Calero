import { keys } from "../data/keys";
import { Key } from "./key";

export function Keyboard() {
    return (
        <div className="keyboard-container">
            <ol className="keyboard">
                {keys.map((item) => (
                    <li key={item.key}>
                        <Key className={item.className} nkey={item.key}></Key>
                    </li>
                ))}
            </ol>
        </div>
    );
}
