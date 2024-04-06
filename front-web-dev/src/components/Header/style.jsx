import { styled } from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    height: 150px;

    background-color: #288568;

    ul {
        display: flex;
        align-items: center;
        gap: 1rem;

        height: 100%;
    }

    li {
        display: flex;
        justify-content: center;

        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
    }
    
    li:hover {
        cursor: pointer;
        font-weight: 600;
        text-decoration: underline;
    }

    img {
        width: 100px;
    }

    .icone_div {
        display: none;
    }

    @media (max-width: 800px) {
        .icone_div {
            display: block;
        }
    }
`;
