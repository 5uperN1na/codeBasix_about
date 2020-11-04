import React from 'react';
import './App.css';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import slideInDown from 'react-animations/lib/slide-in-down';
 

const Rotate = require('react-rotating-text');

const AboutComponent: React.FC<IAboutComponentProps> = (props) => {

    return (

        <div>
            <div className="content">
                <h1>Founders</h1>
                <h5>Meet Pawel, Nicole & Paula</h5>

                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/smiley-faces-nirdesha-munasinghe.jpg" />

                <p>We're web developers and business owners.
                We believe business does not have to be complicated or the software we create.</p>
            </div>

            <div className="about-name">Pawel Jaskolski</div>

            <div className="wrapper">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuZGzBEJQnI8aAoFNVRmOp5fSOuViL9fxu3Q&usqp=CAU" />
            </div>
            <Pawel>
                <Rotate items={['is razor sharp.', 'is cautiously optimistic.', 'cannot lie to save his life.', 'is beyond loyal.', 'specifically honest.']} />
            </Pawel>


            <div className="about-name">Nicole Pasquale</div>

            <div className="wrapper">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuZGzBEJQnI8aAoFNVRmOp5fSOuViL9fxu3Q&usqp=CAU" />
            </div>
            <Nicole>
                <Rotate items={['is wicked smart.', 'is steady eddie.', 'is a giver.', 'is heart of gold.', 'is creative genius.']} />
            </Nicole>

            <div className="about-name">Paula Suarez</div>

            <div className="wrapper">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuZGzBEJQnI8aAoFNVRmOp5fSOuViL9fxu3Q&usqp=CAU" />
            </div>
            <Paula>
                <Rotate items={['is a life-long learner.', 'is passionately crazy.', 'is driven intensely.', 'is fearless.', 'is beyond relentless.']} />
            </Paula>

            <Container>
                <Circle />
            </Container>

            <Rotater>foo</Rotater>

 

            <AnimatedComponent>I am animated</AnimatedComponent>

        </div >

    )
}

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;

const Circle = styled.div`
 height: 100px;
 width: 100px;
 border-style: solid;
 border-width: 5px;
 border-radius: 50%;
 border-color: black;
 animation-name: ${breatheAnimation};
 animation-duration: 8s;
 animation-iteration-count: infinite;
`;

const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 height: 450px;
`;



const Pawel = styled.div`
color: orange;
font-weight: bold;
text-align: center;
margin-right: 4rem;
margin-bottom: 1rem;
`;


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotater = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  font-size: 3rem;
`;


 


const AnimatedComponent = styled.div`
  animation: 1.5s ${keyframes(slideInDown)};
`;











const Nicole = styled.div`
color: #10A5F5;
font-weight: bold;
text-align: center;
margin-right: 4rem;
margin-bottom: 1rem;
`;

const Paula = styled.div`
color: #ef00a0;
font-weight: bold;
text-align: center;
margin-right: 4rem;
margin-bottom: 1rem;
`;

export interface IAboutComponentProps { }

export default AboutComponent;
