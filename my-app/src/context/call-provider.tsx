import { ReactElement } from "react";
import { CallContext } from "./call-context";

export function CallContextProvider({ children }: { children: ReactElement }) {
    const handlerClick = (click: string) => {
        console.log(click);
    };
    const context = {
        handlerClick,
    };
    return (
        <CallContext.Provider value={context}>{children}</CallContext.Provider>
    );
}
