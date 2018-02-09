import React, {Component} from 'react'
import './slide-content.css'

export default class Content extends Component {
    render() {
        const{data} = this.props;
        return (
            <picture>
                <source media="(min-width: 480px)" srcSet={data.large}/>
                <img src={data.small} alt={data.title}/>
            </picture>
        )
    }
}
