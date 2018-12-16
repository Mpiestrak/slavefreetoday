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

                        <div className='titlemain'>JOURNAL OF MODERN SLAVERY</div>

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

                        <div className='three'>
                              <div className='hptitle5'>MULTIMEDIA</div>

                            <div className='hptitle6'>Our very own podcast and blog, and a collection of relevant books and videos.</div>

                          <div className='hpIconContain'>

                          <a className='hpIconOne'>
                              <div className='iconPic5'>

                              </div>
                              <div className='iconLabel2'>
                                  Podcast
                              </div>

                          </a>
                           <a className='hpIconTwo'>
                                 <div className='iconPic6'>

                              </div>
                                <div className='iconLabel2'>
                                    Blog
                              </div>
                           </a>
                            <a className='hpIconThree'>
                                  <div className='iconPic7'>

                                </div>
                                   <div className='iconLabel2'>
                                    Books
                                </div>
                            </a>
                             <a className='hpIconFour'>
                                   <div className='iconPic8'>

                              </div>
                                    <div className='iconLabel2'>
                                    Videos
                                </div>
                             </a>


                          </div>


                        </div>
                        <div className='four'>
                                  <div className='hptitle3'>CALENDER</div>

                            <div className='hptitle4'>A list of global events and conferences related to issues around slavery. Add events that you know of to the calendar.</div>

                          <div className='hpIconContain'>

                          <a className='hpIconOne'>
                              <div className='iconPic9'>

                              </div>
                              <div className='iconLabel5'>
                                  View Events
                              </div>

                          </a>
                           <a className='hpIconTwo'>
                                 <div className='iconPic10'>

                              </div>
                                <div className='iconLabel5'>
                                    Add Events
                              </div>
                           </a>



                          </div>



                        </div>
                        <div className='five'>

                         <div className='hptitle5'>ABOUT US</div>

                            <div className='hptitle6'>Learn more about our mission and who we are.</div>

                          <div className='hpIconContain'>

                          <a className='hpIconOne'>
                              <div className='iconPic11'>

                              </div>
                              <div className='iconLabel2'>
                                  Mission
                              </div>

                          </a>
                           <a className='hpIconTwo'>
                                 <div className='iconPic12'>

                              </div>
                                <div className='iconLabel2'>
                                   Leadership
                              </div>
                           </a>



                          </div>




                        </div>


                    </div>



            </div>
        );
    }
}

export default Homepage;