import React, {Component} from 'react'
import Control from './Control'
import Bullet from './Bullet'
import './progress.css'


export default class Progress extends Component {
    render() {
        const{count, data} = this.props;
        let allBullets = Array.from(Array(count).keys());
        return (
            <div className='progress-wrapper'>
                <Control direction='previous' controls={data.id}
                         totalSlides={data.total} currentSlide={data.currentActive}
                         handleClick={(nexSlide) => this.props.handleClick(nexSlide)}/>
                <ul>
                    {allBullets.map((number, index) => <Bullet key={index} index={number}
                                                               currentActive={data.currentActive}
                                                               handleClick={this.props.handleClick}/>)}
                </ul>
                <Control direction='next' controls={data.id}
                         totalSlides={data.total} currentSlide={data.currentActive}
                         handleClick={this.props.handleClick}/>
            </div>
        )
    }
}