import React, {Component} from 'react';
import "../css/HomePage.css"
import Link from "react-router-dom/es/Link";
class Homepage extends Component {
    render() {
        return (
            <div>
             
                   <h1 className='headerHP'>
                       International journal and resource hub for combating modern slavery
                   </h1>
                

                    <div className='gridContainerHP'>

                        <div className='oneHP'>

                        <div className='titlemain'>JOURNAL OF MODERN SLAVERY</div>

                            <div className='title2'>A multidisciplinary exploration of human trafficking solutions</div>
                           <Link to="/createaccount"><button className='hpbutton'>Create a FREE account to access the Journal</button></Link> 
                        </div>

                        <div className='twoHP'>
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

                        <div className='threeHP'>
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
                           <a href="https://www.freetheslaves.net/" className='hpIconTwo'>
                                 <div className='iconPic6'>

                              </div>
                                <div className='iconLabel2'>
                                    Blog
                              </div>
                           </a>
                            <a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=modern+day+slavery&rh=i%3Aaps%2Ck%3Amodern+day+slavery" className='hpIconThree'>
                                  <div className='iconPic7'>

                                </div>
                                   <div className='iconLabel2'>
                                    Books
                                </div>
                            </a>
                             <a href="https://www.youtube.com/results?search_query=free+slaves+today" className='hpIconFour' >
                                   <div className='iconPic8'>

                              </div>
                                    <div className='iconLabel2'>
                                    Videos
                                </div>
                             </a>


                          </div>


                     </div>


                        <div className='fourHP'>
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

                        <div className='fiveHP'>

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