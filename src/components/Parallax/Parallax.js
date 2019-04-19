import React from 'react'
import { Parallax, Background } from 'react-parallax';
 import Container from '../../components/Container/Container'
const MyParallax = () => (
    <div>
        {/* -----basic config-----*/}



        <Parallax
            blur={0}
            bgImage={require('../../content/apero-hp-1.jpg')}
            bgImageAlt="the cat"
            strength={600}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '600px' }} ></div>
        </Parallax>
 <Container text>
 normal text normal text  normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text normal text
 </Container>
      
 
 
 
        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
            bgImage={require('../../content/apero-hp-4.jpg')}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax>
    </div>
    );

export default MyParallax;