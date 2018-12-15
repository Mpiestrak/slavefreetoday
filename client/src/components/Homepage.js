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

                        <div className='one'>

                        <div className='title'>JOURNAL OF MODERN SLAVERY</div>

                            <div className='title2'>A multidisciplinary exploration of human trafficking solutions</div>
                            <button className='hpbutton'>Create a FREE account to access the Journal</button>
                        </div>
                        <div className='two'>
                           <div className='hptitle3'>RESOURCES</div>

                            <div className='hptitle4'>International collection of resources for researchers, practitioners, students, policy makers and more</div>

                          <div className='hpIconContain'>

                          <a className='hpIconOne'>
                              <div className='iconPic'>

                              </div>
                              <div className='iconLabel'>
                                  NGOS
                              </div>

                          </a>
                           <a className='hpIconTwo'>
                                 <div className='iconPic2'>

                              </div>
                                <div className='iconLabel'>
                                    Reports
                              </div>
                           </a>
                            <a className='hpIconThree'>
                                  <div className='iconPic3'>

                                </div>
                                   <div className='iconLabel'>
                                    Training
                                </div>
                            </a>
                             <a className='hpIconFour'>
                                   <div className='iconPic4'>

                              </div>
                                    <div className='iconLabel4'>
                                    Emergency Contacts
                                </div>
                             </a>


                          </div>
                        </div>
                        <div className='three'> three</div>
                        <div className='four'> four</div>
                        <div className='five'> five</div>


                    </div>



            </div>
        );
    }
}

export default Homepage;