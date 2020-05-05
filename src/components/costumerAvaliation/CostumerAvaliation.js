import React, { Component } from 'react'

import './CostumerAvaliation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CostumerAvaliation extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="costumer__avaliation-card__deals-container">
                <div className="costumer__avaliation-card__deals">
                    <div className="costumer__avaliation-stars">
                        <FontAwesomeIcon icon={['fas', 'star']}
                            style={this.props.costumerAvaliation >= 1 ?
                                { color: 'var(--primary-color)' } : {}} />
                        <FontAwesomeIcon icon={['fas', 'star']}
                            style={this.props.costumerAvaliation >= 2 ?
                                { color: 'var(--primary-color)' } : {}} />
                        <FontAwesomeIcon icon={['fas', 'star']}
                            style={this.props.costumerAvaliation >= 3 ?
                                { color: 'var(--primary-color)' } : {}} />
                        <FontAwesomeIcon icon={['fas', 'star']}
                            style={this.props.costumerAvaliation >= 4 ?
                                { color: 'var(--primary-color)' } : {}} />
                        <FontAwesomeIcon icon={['fas', 'star']}
                            style={this.props.costumerAvaliation === 5 ?
                                { color: 'var(--primary-color)' } : {}} />

                    </div>
                    <div className="quantity__of__coments-card__deals">
                        <span>
                            {this.props.constumerComments < 10 ?
                                this.props.constumerComments = 
                                    `0${this.props.constumerComments}` : 
                                    this.props.constumerComments}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default CostumerAvaliation