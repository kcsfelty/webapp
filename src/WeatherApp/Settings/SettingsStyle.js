import styled from "styled-components";
import {CategoryCard} from "../../common/CategoryCard";

export const SettingsStyle = styled(CategoryCard)`
    grid-area: settings;
    
    & > table {
        width: 100%;
    }
    & > table > tr {
        width: 100%;
    }
    & > table > tr > td + td {
        text-align: left;
    }
    & > table > tr > td + td {
        text-align: center;
    }
`