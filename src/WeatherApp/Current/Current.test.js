import {act, render, screen} from '@testing-library/react';
import {Current} from "./Current";
import React from "react";
import {unmountComponentAtNode} from "react-dom";
import {InitialState} from "../../Context/InitialState";
import {WeatherProvider} from "../../Context/Context";
import {renderComponent} from "../../../JestContextEnviroment";

const units = ({metric, wind_kph, wind_mph}) => ({
    ...InitialState,
    metric,
    weatherData: {
        current: {
            wind_kph,
            wind_mph,
        }
    }
})

describe('Current Component', () => {
    const metric = true
    const wind_kph = 1337
    const wind_mph = 9001

    const testMetric = units({metric, wind_kph, wind_mph})
    const metricUnits = "kph"
    const metricResult = `${wind_kph.toString()} ${metricUnits}`

    const testImperial = units({metric: !metric, wind_kph, wind_mph})
    const imperialUnits = "mph"
    const imperialResult = `${wind_mph.toString()} ${imperialUnits}`

    const testNoData = units({metric})
    const noDataResult = "6.1 kph"

    it('displays metric units', () => {
        act(() => {
            renderComponent(<Current />, testMetric)
        });

        expect(screen.queryByText(metricResult)).toBeInTheDocument();
        expect(screen.queryByText(imperialResult)).not.toBeInTheDocument();
    });

    it('displays imperial units', () => {
        act(() => {
            renderComponent(<Current />, testImperial)
        });

        expect(screen.queryByText(imperialResult)).toBeInTheDocument();
        expect(screen.queryByText(metricResult)).not.toBeInTheDocument();
    });
    it('displays placeholder data', () => {
        act(() => {
            renderComponent(<Current />, testNoData)
        });

        expect(screen.queryByText(noDataResult)).toBeInTheDocument();
        expect(screen.queryByText("0 kph")).not.toBeInTheDocument();
    });
})


