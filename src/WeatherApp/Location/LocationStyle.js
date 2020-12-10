import styled from "styled-components";
import {CategoryCard} from "../../common/CategoryCard";

export const LocationStyle = styled(CategoryCard)`
    grid-area: location;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    & > .region {
        font-size: 30px;
        padding-bottom: 5px;
    }
`