import styled from "styled-components";
import {CategoryCard} from "../../common/CategoryCard";

export const CurrentStyle = styled(CategoryCard)`
    grid-area: current;
    
    & > table {
        width: 100%;
    }
    & > table > tr {
        width: 100%;
    }
    & > table > tr > td {
        text-align: left;
    }
`