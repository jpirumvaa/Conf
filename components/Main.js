import React, { Component } from 'react'
import {DISHES} from '../shared/dishes'
import Menu from './Menu'

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dishes: DISHES
        }
    }
    
    render() {
        return (
            <div>
                <Menu
                dishes={this.state.dishes}/>
            </div>
        )
    }
}

export default Main

