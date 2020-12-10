import {unmountComponentAtNode} from "react-dom";
import {render} from "@testing-library/react";
import {WeatherProvider} from "./src/Context/Context";
import React from "react";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const mockDispatch = (action) => console.log(action)



export const renderComponent = (component, state) => {
    return render(
        <WeatherProvider mockInitialState={state} mockDispatch={mockDispatch}>
            {component}
        </WeatherProvider>
        , container);
}