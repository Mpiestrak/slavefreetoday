import React, {Component} from 'react';
import '../index.css'


class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="border">
                   <h1 className='header'>
                       International journal and resource hub for combating modern slavery
                   </h1>
                </div>

                    <div className='gridContainer'>

                        <div className='one'> one</div>
                        <div className='two'>two </div>
                        <div className='three'> three</div>
                        <div className='four'> four</div>
                        <div className='five'> five</div>


                    </div>



            </div>
        );
    }
}

export default Homepage;