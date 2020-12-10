import styled from "styled-components";

export const ForecastTableStyle = styled.div`
    flex: 0 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

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
        text-align: right;
    }
    @media only screen and (max-width: 600px)   {
        & {
                flex: 0 0 65px;
            }
    }
`