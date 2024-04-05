import { styled } from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1.5rem;
    }

    label {
        cursor: pointer;
    }

    input {
        width: 100%;
        border: 1px solid;
        border-radius: 5px;

        height: 45px;

        padding: 0.625rem;
    }

    button {
        width: 100%;
        height: 3.5rem;
        border-radius: 5px;

        font-size: 1.3rem;
        font-weight: 500;
        letter-spacing: 0.15rem;

        color: #ffffff;
        background-color: #178922;
    }

    .p_recovery_password > span {
        color: #282fda;
        cursor: pointer;
    }

    .register_div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .register_div > p {
        font-size: 1.2rem;
    }

    .register_div > button {
        background: none;
        border: 1px solid black;
        color: black;
    }
`;

