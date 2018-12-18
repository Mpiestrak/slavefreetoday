import React, {Component} from 'react';
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const FooterBar = styled.div`
display: flex;
justify-content: space-evenly;
background: #0A2342;
boxShadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
width: 100%;
height: 320px;
padding: 20px; 
`
const JournalTitle = styled.p`
color: #FFFEF9;
font-weight: bold;
list-style: none;
`
const JournalLink = styled.ul`
color: #FFFEF9;
list-style: none;
// line-height: 29px;
// margin-left: 80px;
// margin-top: 30px;

`
const ResourcesTitle = styled.p`
color: #FFFEF9;
font-weight: bold;
list-style: none;
`
const ResourcesLink = styled.ul`
color: #FFFEF9;
list-style: none;
line-height: 29px;
// margin-left: 30px;
// margin-top: 30px;
`
const MultimediaLink = styled.ul`
color: #FFFEF9;
list-style: none;
// margin-left: 60px;
// margin-top: 30px;

`
const MultimediaTitle = styled.p`
color: #FFFEF9;
font-weight: bold;
list-style: none;
`
const CalendarTitle = styled.p`
color: #FFFEF9;
font-weight: bold;

`
const CalendarLink = styled.ul`
color: #FFFEF9;
list-style: none;
// margin-top: 30px;
// margin-left: 90px;

`
const AboutUsTitle = styled.p`
color: #FFFEF9;
font-weight: bold;
`
const AboutUsLink = styled.ul`
color: #FFFEF9;
list-style: none;
// margin-top: 30px;
// margin-left: 110px;
`
const GreenButton = styled(Button)`
&&& {
    // margin-top: 30px;
    font-size: 35px;
    font-weight: 40px;
}
// margin-right: 90px;
// width: 120px;
// // margin-bottom: -1px;
//     // margin-top: 0px;
//     margin-right: 0px;
//     padding: 0;
     height: 27px;
    width: 170px;
//     text-align: center;
`
// const Copyright = styled.h6`
// color: white;
// height: 35px;
// margin-top: 240px;
// margin-right: 500px;
// `
const Paragraph = styled.p`
color: white;
text-align: right;
`
class Footer extends Component {
    render() {
        return (
              <FooterBar>
                <JournalLink>
                    <JournalTitle>JOURNAL</JournalTitle>
                    <li><a href='#'>Journal Home</a></li>
                    <li><a href='#'>Archives</a></li>
                    <li><a href='#'>Authors</a></li>
                    <li><a href='#'>Submit a Manuscript</a></li>
                    <li><a href='#'>Reviewers</a></li>
                    <li><a href='#'>Editorial & Advisory Board</a></li>
                    </JournalLink>
                <ResourcesLink>
                    <ResourcesTitle>RESOURCES</ResourcesTitle>
                    <li><a href='#'>Organizations</a></li>
                    <li><a href='#'>Reports</a></li>
                    <li><a href='#'>Training</a></li>
                    <li><a href='#'>Emergency Contacts</a></li>
                </ResourcesLink>
                <MultimediaLink>
                <MultimediaTitle>MULTIMEDIA</MultimediaTitle>
                    <li><a href='#'>Podcast</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Videos</a></li>
                    <li><a href='#'>Books</a></li>
                </MultimediaLink>
                <CalendarLink>
                <CalendarTitle>CALENDAR</CalendarTitle>
                    <li><a href='#'>View Events</a></li>
                    <li><a href='#'>Submit an Event</a></li>
                </CalendarLink>
                <AboutUsLink>
                <AboutUsTitle>ABOUT US</AboutUsTitle>
                    <li>Main Office:</li>
                    <li>178 S Peachtree St.
                        Atlanta, GA 67219
                    </li>
                </AboutUsLink>
                <div>
                    <GreenButton color='olive' type='submit'>DONATE</GreenButton>
                    <Paragraph>Our organization is 
                        <br></br>supported soley 
                        through 
                        <br></br>
                        donations.
                        Please consider 
                        <br></br> making a tax-deductible 
                        <br></br>donation.
                    </Paragraph>
              </div>
                {/* <Copyright>2018 Copyright</Copyright> */}
              </FooterBar>
        );
    }
}

export default Footer;