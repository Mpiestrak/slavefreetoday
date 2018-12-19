import React, {Component} from 'react';
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const FooterBar = styled.div`
position: relative;
overflow: auto;
padding-bottom: 320px;
right: 0;
bottom: 0;
left: 0;
padding: 1rem;
display: flex;
justify-content: space-evenly;
background: #0A2342;
box-shadow: 0px -2px 5px 0px #000;
width: 100%;
height: -320px;
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
font-size: 14px;

`
const ResourcesTitle = styled.p`
color: #FFFEF9;
font-weight: bold;
list-style: none;
`
const ResourcesLink = styled.ul`
color: #FFFEF9;
list-style: none;

`
const MultimediaLink = styled.ul`
color: #FFFEF9;
list-style: none;

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
`
const AboutUsTitle = styled.p`
color: #FFFEF9;
font-weight: bold;
`
const AboutUsLink = styled.ul`
color: #FFFEF9;
list-style: none;
`

const Paragraph = styled.p`
color: white;
text-align: right;
`

const DonateButton = styled.button`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;
  background-color: #a6b21f;
  border-radius: 6px;
  border: none;
  width: 161.34px;
  height: 45px;
  left: 1163.66px;
  top: 52.85px;
`;
class Footer extends Component {
    render() {
        return (

              <FooterBar>
                <JournalLink>
                    <JournalTitle>JOURNAL</JournalTitle>
                    <li>Journal Home</li>
                    <li>Archives</li>
                    <li>Authors</li>
                    <li>Submit a Manuscript</li>
                    <li>Reviewers</li>
                    <li>Editorial & Advisory Board</li>
                    </JournalLink>
                <ResourcesLink>
                    <ResourcesTitle>RESOURCES</ResourcesTitle>
                    <li>Organizations</li>
                    <li>Reports</li>
                    <li>Training</li>
                    <li>Emergency Contacts</li>
                </ResourcesLink>
                <MultimediaLink>
                <MultimediaTitle>MULTIMEDIA</MultimediaTitle>
                    <li>Podcast</li>
                    <li>Blog</li>
                    <li>Videos</li>
                    <li>Books</li>
                </MultimediaLink>
                <CalendarLink>
                <CalendarTitle>CALENDAR</CalendarTitle>
                    <li>View Events</li>
                    <li>Submit an Event</li>
                </CalendarLink>
                <AboutUsLink>
                <AboutUsTitle>ABOUT US</AboutUsTitle>
                    <li>Main Office:</li>
                    <li>178 S Peachtree St.
                        Atlanta, GA 67219
                    </li>
                </AboutUsLink>
                <div>
                <Link to="/donations">
              <DonateButton>DONATE</DonateButton>
                </Link>
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
              </FooterBar>

        );
    }
}

export default Footer;