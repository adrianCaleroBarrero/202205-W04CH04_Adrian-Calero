import { useContext } from "react";
import { CallContext } from "../context/call-context";

export function Key({ className, nkey }: { className: string; nkey: string }) {
    const { handlerClick } = useContext(CallContext);
    return (
        <button className={className} onClick={() => handlerClick(nkey)}>
            {nkey}
        </button>
    );
}
