import { styled } from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 50px;
    margin-bottom: 100px;
`;

export const AvatarDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 40%;
    }

    form div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    form div input {
        width: 100%;
        border: 1px solid;
        border-radius: 5px;

        height: 25px;

        padding: 0.625rem;
    }

    button {
        width: 100%;
        height: 3.5rem;
        border: 1px solid black;
        border-radius: 5px;

        font-size: 1.3rem;
        font-weight: 500;
        letter-spacing: 0.15rem;

        background: none;
    }

    button:hover{
        background-color: lightgray;
    }

    @media (max-width: 1200px) {
        flex-direction: column;

        form {
            width: 100%;
        }
    }
`;
