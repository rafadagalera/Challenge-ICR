import { styled } from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    margin-top: 5rem;
    margin-bottom: 5rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
        width: 800px;
    }

    li {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li h2 {
        font-size: 1.8rem;
    }

    li p {
        font-size: 1.3rem;
    }

    @media (max-width: 1200px) {
        ul {
            width: 90%;
        }
    }
`;
