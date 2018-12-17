import React, {Component} from 'react';
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const FooterBar = styled.div`
// position: absolute;
display: flex;
background: #0A2342;
boxShadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
height: 388px;
width: 100%;
bottom: 0px; 
`
const JournalTitle = styled.p`
color: #FFFEF9;
font-weight: bold;
list-style: none;
`
const JournalLink = styled.li`
color: #FFFEF9;
list-style: none;
line-height: 29px;
margin-left: 80px;
margin-top: 30px;

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
margin-left: 30px;
margin-top: 30px;
`
const MultimediaLink = styled.ul`
color: #FFFEF9;
list-style: none;
margin-left: 57px;
margin-top: 30px;

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
margin-top: 30px;

`
const AboutUsTitle = styled.p`
color: #FFFEF9;
font-weight: bold;
`
const AboutUsLink = styled.ul`
color: #FFFEF9;
list-style: none;
margin-top: 30px;
`
const button = styled.button`
width=100px;
`
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
                <Button color='olive' type='submit'>DONATE</Button>
              </FooterBar>
        );
    }
}

export default Footer;