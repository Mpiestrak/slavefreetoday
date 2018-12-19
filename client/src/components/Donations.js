import React, {Component} from 'react';
import "../css/Donations.css";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Footer from "./Footer";

class Donations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div className='totalcontainer'>

                <div className='box1'>
                    <div className='title'>DONATE TODAY</div>

                    <div className='body'>
                        Please click on the button below (PAYPAL) to be directed to slavefreetoday.org Payal Account.
                    </div>
                    <Button type='button' className='buttonD' onClick={this.toggle}>

                    </Button>
                    <div className="clickhere">CLICK ABOVE</div>

                    <div className='dollarcontainer'>

                        <div className='dollarone'>$25</div>
                        <div className='dollarone'>$50</div>
                        <div className='dollarone'>$75</div>
                        <div className='dollarone'>$100</div>

                    </div>


                    <div className='dollarcontainer1'>

                        <div className='dollardetail'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                        <div className='dollardetail'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                        <div className='dollardetail'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                        <div className='dollardetail'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>

                    </div>


                    <div className='other'>OTHER WAYS TO GIVE</div>


                    <div className='box2'>
                        <div className="givecontainer">

                            <div className="give1">
                                <div className="title1">Text to Give</div>
                                <div className="icon1"></div>
                                <div className="instruction">Text “GIVE” to 555-555-5555 <br/>
                                    and follow the prompts on <br/>
                                    your phone screen.
                                </div>
                            </div>

                            <div className="give1">

                                <div className="title1">Mail Check</div>
                                <div className="icon2"></div>
                                <div className="instruction2">
                                    Please make check payable to
                                    <br/>
                                    Slave Free Today and mail it to:
                                    <br/>
                                    <br/>
                                    Slave Free Today:
                                    <br/>
                                    178 S Peachtree St
                                    <br/>
                                    Atlanta, GA 67219
                                </div>
                            </div>

                            <div className="give1">
                                <div className="title1">Donate Securities</div>
                                <div className="icon3"></div>
                                <div className="instruction3">

                                    You can gain by donating
                                    <br/>
                                    secrurities in-kind, get a credit
                                    <br/>
                                    for the full market value and
                                    <br/>
                                    pay no capital gains tax!
                                    <br/>
                                    <br/>
                                    Email: editor@slavefreetoday.org
                                    <br/>
                                    <br/>
                                    ( e-mail us for more information.)

                                </div>


                            </div>


                        </div>

                        <div className="subtitle">
                            Donate Your Services and/or Items
                        </div>

                        <div className="iconhand"></div>

                        <div className="listcontainer">

                            <div className="list">
                                Below is a list of services needed to keep
                                <br/>
                                the organization functioning:
                                <br/>
                                - need 1 <br/>
                                - need 2 <br/>
                                - need 3 <br/>
                                - need 4 <br/>
                                - need 5 <br/>
                                - need 6
                            </div>
                            <div className="list">
                                Below is a list of services needed to keep
                                <br/>
                                the organization functioning:
                                <br/>
                                - need 1 <br/>
                                - need 2 <br/>
                                - need 3 <br/>
                                - need 4 <br/>
                                - need 5 <br/>
                                - need 6
                            </div>


                        </div>

                        <div className="contactinfo">
                            If you’re able to donate a service or item, please contact us at <br/>
                            <br/>
                            e-mail: editor@slavefreetoday.org <br/>
                            <br/>
                            phone: 777-777-7777
                        </div>


                    </div>

                </div>
                <div>

                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Donate to SlaveFreeToday.org</ModalHeader>
                        <ModalBody>

                            SlaveFree today is a 501c3 non-profit organization. <br/>
                            Our budget is supported solely by donations and gifts.<br/>
                            A PDF receipt for tax purposes will be emailed promptly to donor’s email. <br/>
                            Thanks for supporting SlaveFree Today.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" href="https://www.paypal.me/DJshinATLANTA" target="_blank">DIRECT
                                LINK TO SlaveFreeToday's PAYPAL Account</Button>{' '}

                        </ModalFooter>
                    </Modal>
                </div>

            </div>


        );
    }
}

export default Donations;