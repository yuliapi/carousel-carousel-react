import React, {Component} from 'react'
import './control.css'


export default class Control extends Component {

    handleClick = () => {
        const {currentSlide, direction} = this.props;
        let nextSlide;
        if (direction === 'next') {
            nextSlide = currentSlide + 1
        } else {
            nextSlide = currentSlide - 1
        }
        this.props.handleClick(nextSlide);
    };

    render() {
        const {currentSlide, direction, totalSlides, controls} = this.props;

        let disabled = (direction === 'previous' && currentSlide === 0)
            || (direction === 'next' && currentSlide === totalSlides - 1);

        return (
            <button className={`slide-control control-${direction}`} data-controls={controls}
                    data-target={direction} disabled={disabled} onClick={this.handleClick}>
                <span>
                </span>
            </button>
        )
    }
}
