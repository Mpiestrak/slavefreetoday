import React, {Component} from "react";
// import '../css/ManuscriptInfo.css'
import styled from 'styled-components';
import img from '../images/antislavery-early-research-association.png'

const Image = styled.div`
    border: 1px solid #000;
    background-image: url(${img});
    background-size: 100% 100%;
    width: 100vw;
    height: 500px;
`;


const Border = styled.div`
    background: #97A11F;
    text-align: center;
    height: 150px;
    display: block;
`

const Header1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 36px;
    color: #FFFFFF;
`

const Subheader1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #FFFEF9;
`

const Tabs = styled.div`
display: flex;
`

const Articlebutton = styled.a`
   background: #3B4F68;
    border-radius: 5px 5px 0 0;
    margin: 2% 1% 0 3%;
    padding: 1% 6% 0 1%;
    font-family: Roboto;
    font-size: 24px;
    color: white;
    text-decoration: none;
`

const Manuscriptbutton = styled.a`
    background: rgba(10, 35, 66, 0.2);
    border-radius: 5px 5px 0 0;
    margin: 2% 1% 0 0;
    padding: 1% 1%;
    font-family: Roboto;
    font-size: 24px;
    text-decoration: none;
`

const Scholasticbutton = styled.a`
	background-color:#3f6695;
	-moz-border-radius:20px;
	-webkit-border-radius:20px;
	border-radius:20px;
	display:flex;
	cursor:pointer;
	color:#ffffff;
	font-family: Roboto;
	font-size:24px;
	font-weight:bold;
	padding:12px 25px;
    text-decoration:none;
    text-align: center;
`

const Gridcontainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 15% 20% 40% 350px 250px;
    grid-template-areas:

        "one one one one"
        "two two two two"
        "three three three three"
        "four four four four"
        "five five five five";

`

const One = styled.div`
grid-area: one;
    /* border: solid; */
    background: rgba(10, 35, 66, 0.2);
    margin: 0 3% 2% 3%;
`
const Textcontent = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    list-style: none;
    margin: 2%;
`
const Textcontent1 = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    list-style: none;
    margin: 2%;
`
const Two = styled.div`
    grid-area: two;
    margin: 0 3% 2% 3%;
`
const Three = styled.div`
    grid-area: three;
    background: rgba(10, 35, 66, 0.2);
    margin: 0 3% 2% 3%;
`
const Four = styled.div`
    grid-area: four;
    margin: 0 3% 2% 3%;
`
const Five = styled.div`
    grid-area: five;
    background: rgba(10, 35, 66, 0.2);
    margin: 0 3% 2% 3%;
`
const Textheader = styled.div`
 font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    margin: auto 2%;
`
const Ulcontainer = styled.div`
    display: flex;
    margin: 2%;
`
const List = styled.ul`
 list-style: none;
    padding: 0;
`
const Licontent = styled.li`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    list-style: none;
`
const Column2 = styled.div`
 margin-left: 10%;
`
const Firstp = styled.p`
    margin: 0 2%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    list-style: none;
`

const Scholastica = styled.div`
display: flex;
justify-content: center;
margin: 0 3% 0 auto;
text-align: center;
`


class ManuscriptInfo extends Component {
    render() {
        return (
            <div>
                <Border>
                    <Header1>JOURNAL OF MODERN SLAVERY</Header1>
                    <Subheader1>
                        A Multidisciplinary Exploration of Human Trafficking Solutions
                    </Subheader1>
                </Border>
                <Image>
                </Image>
                <Tabs>
                    <Articlebutton href={`/articles`}>Latest Online</Articlebutton>
                    <Manuscriptbutton href={`/manuscriptinfo`}>Submit Manuscript</Manuscriptbutton>
                    <Scholastica>
                        <Scholasticbutton href="http://www.scholasticahq.com">Submit</Scholasticbutton>
                    </Scholastica>
                </Tabs>
                <Gridcontainer>
                    <One>
                        <Textcontent>
                            Journal of Modern Slavery: A Multidisciplinary Exploration of
                            Human Trafficking Solutions is a peer-reviewed scholarly journal
                            dedicated to research, theory and practical application in
                            eradicating slavery. It is a nexus of critical thought for all
                            fields relating to understanding and combating modern slavery and
                            is unique in its focus on the issues of slavery and human
                            trafficking. Journal of Modern Slavery engages academics and
                            practitioners in dialogue between the fields, helping us find
                            common language and working toward our common goal. The Journal
                            will include relevant research papers, review papers, case studies
                            and conference reports. Journal of Modern Slavery serves as an
                            appropriate outlet for articles of interest to its broad audience
                            of scholars and professionals as well as specialists within each
                            field. Manuscripts that use academic rigor to better understand
                            any topic of relevance to slavery/human trafficking are
                            appropriate for submission. Of special interest are studies aiming
                            at the investigation of causal relationships.
                        </Textcontent>
                    </One>
                    <Two>
                        <Textheader>Appropriate Topics</Textheader>
                        <Textcontent1>
                            Papers are invited on (but not restricted to) the intersection of
                            slavery/human trafficking and…
                        </Textcontent1>
                        <Ulcontainer>
                            <div>
                                <List>
                                    <Licontent>
                                        Justice, Security & Human Rights
                                    </Licontent>
                                    <Licontent>Rule of Law</Licontent>
                                    <Licontent>
                                        Gender, Sexuality & Social Justice
                                    </Licontent>
                                    <Licontent>Accountability & Transparency</Licontent>
                                    <Licontent>
                                        International, Social, Cultural & Economic
                                    </Licontent>
                                    <Licontent>Boundaries</Licontent>
                                    <Licontent>International Migration</Licontent>
                                    <Licontent>Cybercrime</Licontent>
                                    <Licontent>Film Studies</Licontent>
                                    <Licontent>Religious Studies</Licontent>
                                </List>
                            </div>
                            <Column2>
                                <List>
                                    <Licontent>Visual Culture</Licontent>
                                    <Licontent>Linguistics</Licontent>
                                    <Licontent>History</Licontent>
                                    <Licontent>Medicine</Licontent>
                                    <Licontent>Business</Licontent>
                                    <Licontent>Education</Licontent>
                                    <Licontent>Political Science</Licontent>
                                    <Licontent>Sociology</Licontent>
                                    <Licontent>Criminal Justice/Criminology</Licontent>
                                    <Licontent>Information Technology</Licontent>
                                </List>
                            </Column2>
                        </Ulcontainer>
                    </Two>
                    <Three>
                        <Textheader>SUBMISSION GUIDELINES</Textheader>
                        <Firstp>
                            Articles will be submitted in a single Microsoft Word document
                            file, created in Word 2007 or later formats (.docx).
                        </Firstp>
                        <Textcontent>
                            Submissions should be made via
                            https://journalofmodernslavery.scholasticahq.com. The Editor
                            will ensure that articles are in the correct format and void of
                            identification (ensuring a double-blind review process) and
                            distribute the articles via email to the reviewers. Articles
                            will be distributed to reviewers in a compatible MS Word format.
                        </Textcontent>
                        <Textcontent>
                            Submissions must be an original, unpublished work, not under
                            consideration for publishing elsewhere.
                        </Textcontent>
                        <Textcontent>
                            It is the author’s responsibility to obtain permission to use
                            any copyrighted material, including images and supporting table
                            and graphs.
                        </Textcontent>
                        <Textcontent>
                            Articles must be anonymous to ensure the viability of the
                            double-blind review process. Do not include acknowledgements
                            that might reveal your identity (acknowledgements can be added
                            after article acceptance).
                        </Textcontent>
                        <Textcontent>
                            The Editorial Board cannot guarantee the publishing of an
                            article, even if the author is invited to write and submit.
                        </Textcontent>
                        <Textcontent>
                            Articles should be between 4,000 and 7,500 words (including
                            footnotes and abstract) in length.
                        </Textcontent>
                        <Textcontent>All authors should include:</Textcontent>
                        <Textcontent1>
                            a cover page with title, author(s), affiliation, contact
                            information (address, phone, fax, and e-mail), short
                            biographical paragraphs of each author, and any acknowledgments
                        </Textcontent1>
                        <Textcontent1>
                            an abstract of no more than 100 words, followed by 4 to 5
                            keywords
                        </Textcontent1>
                        <Textcontent1>
                            the body of the manuscript, with the title listed at the top of
                            the page.
                        </Textcontent1>
                        <Textcontent1>
                            U.S. or British spelling is acceptable, but be consistent
                            throughout your article.
                        </Textcontent1>
                    </Three>
                    <Four>
                        <Textheader>FORMATTING</Textheader>
                        <Firstp>
                            In general, articles should be prepared in accordance with The
                            Chicago Manual of Style (17th edition), using footnotes for
                            citations. http://www.chicagomanualofstyle.org/. Any deviations
                            from the Manual must be coordinated with the Journal of Modern
                            Slavery editor.
                        </Firstp>
                        <Textcontent>
                            Articles will be written in English. Use Times New Roman font,
                            12-point, with one inch .(2.54 cm) margins all around.
                        </Textcontent>
                        <Textcontent>
                            Acronyms should be in capital letters with no periods separating
                            the letters. Fully spell out names and titles the first time
                            they are mentioned, followed by the acronym in parentheses. If a
                            name or title is only used once in the article, spell it fully
                            and do not include the acronym.
                        </Textcontent>
                        <Textcontent>
                            Numbers below 10 should be written out unless used in
                            conjunction with units.
                        </Textcontent>
                        <Textcontent>Dates should be in the form 22 September 1956.</Textcontent>
                    </Four>
                    <Five>
                        <Textheader>Images and Other Graphics</Textheader>
                        <Firstp>
                            Images, artwork, figures and other graphics should be supplied
                            in the highest quality and resolution to ensure a quality end
                            product.
                        </Firstp>
                        <Textcontent>
                            Photographic images should be supplied in a resolution of at
                            least 300 dpi, line art with 600 dpi. Accepted formats include
                            TIFF, JPEG, PNG, EPS, or PDF.
                        </Textcontent>
                        <Textcontent>
                            Figures and tables should be numbered separately and placed
                            separately at the end of the manuscript; They should appear on
                            separate sheets and be placed in the order they appear in the
                            text.
                        </Textcontent>
                    </Five>
                </Gridcontainer>
            </div>
        );
    }
}

export default ManuscriptInfo;
