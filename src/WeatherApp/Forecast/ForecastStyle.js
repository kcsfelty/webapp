import styled from "styled-components";
import {CategoryCard} from "../../common/CategoryCard";

export const ForecastStyle = styled(CategoryCard)`
    grid-area: forecast;

    & > ul {
        list-style-type: none;
        padding: 0;
    }
    & > ul > li + li{
        list-style-type: none;

    }
    & > ul > li + li:before{
        margin: 20px;
        display: block;
        content: "";
        width: calc(100% - 40px);
        border-style: solid;
        border-color: #454545;
        border-width: 0 0 1px 0;
    }
`