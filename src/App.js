import React from 'react';
import './App.css';
import RotatingPawel from 'react-rotating-text';

// let RotatingPawel = require('react-rotating-text');

function App() {
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
            <div className="text">
                <RotatingPawel style={{color: "orange"}}items={['is razor sharp.', 'is cautiously optimistic.', 'cannot lie to save his life.', 'is beyond loyal.', 'specifically honest.']} />
            </div>

            <div className="about-name">Nicole Pasquale</div>

            <div className="wrapper">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuZGzBEJQnI8aAoFNVRmOp5fSOuViL9fxu3Q&usqp=CAU" />
            </div>
            <div className="text">
                <RotatingPawel style={{color: "#10A5F5"}} items={['is wicked smart.', 'is steady eddie.', 'is a giver.', 'is heart of gold.', 'is creative genius.']} />
            </div>

            <div className="about-name">Paula Suarez</div>

            <div className="wrapper">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuZGzBEJQnI8aAoFNVRmOp5fSOuViL9fxu3Q&usqp=CAU" />
            </div>
            <div className="text">
                <RotatingPawel style={{color: "#ef00a0"}} items={['is a life-long learner.', 'is passionately crazy.', 'is driven intensely.','is fearless.', 'is beyond relentless.']} />
            </div>




        </div>






    )
}

export default App;
