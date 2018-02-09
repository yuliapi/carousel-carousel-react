import React, {Component} from 'react';
import './bullet.css'


export default class Bullet extends Component {
    handleClick = () => {
        let nextSlide = this.props.index;
        this.props.handleClick(nextSlide);
    };

    render() {
        const{index, currentActive} = this.props;
        let classToAdd;
        if (index === currentActive) {
            classToAdd = 'active'
        }


        return (
            <li className={`progress-bullet ${classToAdd}`}>
                <a href='#' data-target={index} onClick={this.handleClick}/>
            </li>
        )
    }
}