import React, { Component } from 'react';


class Bottom extends Component{

    render(){
        return(
            <div className='Bottom'>
                <div className='Nav'>
                    <button className='Previous'>&lt; Previous</button>
                    <button className='Edit'>Edit</button>
                    <button className='Delete'>Delete</button>
                    <button className='New'>New</button>                       
                    <button className='Next'> Next &gt;</button>
                </div>    
            </div>
        )
    }
}

export default Bottom;