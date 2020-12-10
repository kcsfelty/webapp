import styled from "styled-components";

export const WeatherAppStyle = styled.div`

    color: #AAAAAA;
    display: grid;
    gap: 8px;
    min-width: 300px;
    max-width: 900px;
    margin: auto;
    grid-template-columns: minmax(275px, 1fr) minmax(300px, 1fr);
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
        "location condition"
        "location temps"
        "current temps"
        "current settings"
        "forecast forecast"
    ;
    
    input, select {
        background-color: #505050;
        border-radius: 4px;
        font-size: 18px;
        color: white;
        border: none;
        height: 30px;
        width: 150px;
    }
    
    @media only screen and (max-width: 600px)   {
        max-width: 480px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, auto);
        grid-template-areas:
            "location"
            "condition"
            "temps"
            "current"
            "settings"
            "forecast";
    }
`