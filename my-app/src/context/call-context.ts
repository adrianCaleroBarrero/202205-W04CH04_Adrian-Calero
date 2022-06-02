import { createContext } from "react";

const initaialContext: {
    handlerClick: (click: string) => void;
} = {
    handlerClick: () => {},
};

export const CallContext = createContext(initaialContext);
