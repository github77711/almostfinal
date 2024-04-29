import styled from 'styled-components';

export const NewsEventPressSection = styled.section`
    @media (min-width: 900px) {
        display: flex;
        justify-content: space-around;
        max-width: 930px;
        margin: 0 auto;
        gap: 45px;
    }
`;

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 15%;

    @media (min-width: 900px) {
        margin: 0;
        width: 270px;
        min-height: 425px;
        position: relative;
        padding-top: 20px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
`;

export const Icon = styled.img`
    width: 35px;
    margin-right: 10px;
`;

export const Title = styled.h3`
    font-weight: 100;
    color: #0E121A;
    font-size: 23px;
`;

export const Image = styled.img`
    height: 130px;
    object-fit: cover;
`;

export const DateLocation = styled.p`
    margin: 0;
    font-size: 13px;
    color: #424A59;
`;

export const Heading = styled.p`
    margin-bottom: 5px;
    color: #0E121A;
`;

export const Text = styled.p`
    color: #0E121A;
    font-style: italic;
`;

export const ReadMoreButton = styled.button`
    background-color: #C2212E;
    color: #ffffff;
    height: 50px;
    border: none;
    text-transform: uppercase;
    font-size: 15px;
    width: 100%;
    cursor: pointer;

    @media (min-width: 900px) {
        position: absolute;
        bottom: 0;
    }
`;