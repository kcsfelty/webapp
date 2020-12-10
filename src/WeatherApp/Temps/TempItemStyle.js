import styled from "styled-components";

export const TempItemStyle = styled.div`
    flex: 1 0 auto;
    font-size: 75px;
    padding: 10px 20px 0 20px;
    position: relative;
    color: #FFFFFF;
    &:after{
        font-size: 20px;
        color: #999999;
        content: "${({units}) => units}";
    }
    &:before{
        position: absolute;
        color: #AAAAAA;
        top: 0px;
        left: -30px;
        padding-top: 5px;
        font-size: 15px;
        content: "${({label}) => label}";
    }
`