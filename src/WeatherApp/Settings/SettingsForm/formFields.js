import {ZipCodeInput} from "./ZipCodeInput";
import {ForecastedDaysSelector} from "./ForecastedDaysSelector";
import {GraphCriteriaSelector} from "./GraphCriteriaSelector";
import {UnitsSelector} from "./UnitsSelector";
import React from "react";

export const formFields = [
    {
        label: `Zip Code`,
        component: <ZipCodeInput />
    },
    {
        label: `Forecasted Days `,
        component: <ForecastedDaysSelector />
    },
    {
        label: `Graph Criteria`,
        component: <GraphCriteriaSelector />
    },
    {
        label: `Metric Units`,
        component: <UnitsSelector />
    },
]