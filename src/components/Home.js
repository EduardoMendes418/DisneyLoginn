/* eslint-disable array-callback-return */
/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */

import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

const Home = (props) => {

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
        </Container>
    )
};


const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 73px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;


export default Home;
