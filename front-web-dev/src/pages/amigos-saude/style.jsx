import { styled } from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 3.125rem;

    h1 {
        color: black;
    }

    .p_description {
        width: 45%;

        font-size: 2rem;
        text-align: center;
    }

    p {
        font-size: 2rem;
    }

    p > span {
        font-weight: 600;
        font-size: 2.2rem;
        color: #288568;
    }

    @media (max-width: 1200px) {
        .p_description {
            width: 80%;
        }
    }

    @media (max-width: 800px) {
        .p_description {
            width: 90%;
            text-align: justify;
        }
    }
`;
