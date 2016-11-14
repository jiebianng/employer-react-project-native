'use strict';
import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactSwipe from 'react-swipe';

class Swiper extends React.Component {
    render() {
        let eachData = this.props.data;
        const paneNodes = eachData.map((value, i) => {
            return (
                <div key={i}><a href={value.a_link}><img src={value.imgSrc} alt="" width="100%"/></a></div>
            );
        });
        if (eachData.length>0) {
            const swipeOptions = {
                startSlide:0,
                auto: 0,
                speed: 300,
                disableScroll: true,
                continuous: true,
                stopPropagation: true
            };
            return (
                <ReactSwipe ref="ReactSwipeDom"  swipeOptions={swipeOptions}>
                    {paneNodes}
                </ReactSwipe>
            );
        }else {
            return (
                <div>Loading...</div>
            );
        }
    }
}
export default Swiper;
