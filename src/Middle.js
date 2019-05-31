import React, { Component } from 'react';
import Data from './Data';

class Middle extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
        this.next= this.next.bind(this)
        this.previous=this.previous.bind(this)
    }
    previous(){
        if(this.state.counter !== 0)
            this.setState({counter: this.state.counter - 1})

    }
    next(){
        if(this.state.counter !== 24)
        this.setState({counter: this.state.counter + 1})
    }

    render(){
        return(
             <div>
            <div className='Middle'>
                <h1 className='Counter'>{this.state.counter}/24</h1>
                <div>
                    <h1>{Data[this.state.counter].name.first} {Data[this.state.counter].name.last}</h1>
                    <h3>From: {Data[this.state.counter].city}</h3>
                    <h3>Job Title: {Data[this.state.counter].title}</h3>
                    <h3>Employer: {Data[this.state.counter].employer}</h3>  
                    <h3>Favorite Movies: {Data[this.state.counter].favoriteMovies}</h3>
                </div>
            </div>
                <div className='Nav'>
                    <button className='Previous' onClick={this.previous} >&lt; Previous</button>
                    <button className='Edit'>Edit</button>
                    <button className='Delete'>Delete</button>
                    <button className='New'>New</button>                       
                    <button className='Next' onClick={this.next} > Next &gt;</button>
                </div>    
            </div>
        )
    }
}

export default Middle;