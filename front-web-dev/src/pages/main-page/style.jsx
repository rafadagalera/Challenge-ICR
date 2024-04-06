import { styled } from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    margin-top: 3.125rem;
    
`;
export const HomeContainer = styled.div`
    width:1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .titulo{

    }   
    .create_avatar {
        width: 400px;
        height: 3.5rem;
        border-radius: 5px;
        font-size: 1.3rem;
        font-weight: 500;
        letter-spacing: 0.15rem;

        color: #ffffff;
        background-color: #178922;
    }
    p{
        font-size: 2rem;
        text-align:justify;
        line-height:130%;
    }
    h1{
        font-size: 4rem;
    }
    
`;