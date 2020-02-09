import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
    margin-top: 50px;

    @media screen and (max-width: 1000px){
        padding: 20px 0px;
    }

    @media screen and (max-width: 800px){
        padding: 0;
        margin-top: 60px;
    }
`;