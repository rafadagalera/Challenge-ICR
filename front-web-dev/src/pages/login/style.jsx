import { styled } from "styled-components";

export const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;

    .main_container {
        display: flex;
        flex-grow: 1;
    }

    .left_box {
        height: 100%;
        width: 50%;

        display: flex;
        justify-content: end;

        padding: 180px 230px;

        letter-spacing: 0.1rem;

        background-color: #288568;
    }

    h1 {
        font-size: 2.5rem;
        width: 18rem;
        text-align: center;
        color: #ffffff;
    }

    .right_box {
        height: 100%;
        width: 50%;

        padding: 7.5rem 20vw 0 8rem;
    }
`;

