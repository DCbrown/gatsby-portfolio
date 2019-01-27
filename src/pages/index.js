import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', thumbnail: thumb01, caption: 'Motivational Q', live: 'https://dcbrown.github.io/Onett-Web-Solutions/', github:'https://github.com/DCbrown/Onett-Web-Solutions'},
    { id: '2', thumbnail: thumb02, caption: 'KISS@ RE-DESIGN', live: 'http://dcbrown.github.io/KISSFinal/index.html', github:'https://github.com/DCbrown/KISSFinal'},
    { id: '3', thumbnail: thumb03, caption: 'WebDevQuiz', live: 'http://dcbrown.github.io/WebDevQuizVer1.5Landing_Page/', github:'https://github.com/DCbrown/WebDevQuizVer1.5Landing_Page'},
    { id: '4', thumbnail: thumb04, caption: '4 Pints Production', live: 'http://dcbrown.github.io/4PintsProductions/', github:'https://github.com/DCbrown/4PintsProductions'},
    { id: '5', thumbnail: thumb05, caption: 'Bootstrap Alexa Theme', live: 'https://dcbrown.github.io/Bootstrap_Alexa_Theme/', github:'https://github.com/DCbrown/Bootstrap_Alexa_Theme'},
    { id: '6', thumbnail: thumb06, caption: 'Employee Registration', live: 'https://dcbrown.github.io/.', github:'https://github.com/DCbrown/Angular-Firebase-CRUD'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Donovan Brown's Portfolio Website"
        const siteDescription = "Online Portfolio of Donovan Brown"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">
                    <section id="one">
                        <h2>Recent Projects</h2>
                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, live, github }) => ({
                            src,
                            thumbnail,
                            caption,
                            live,
                            github
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button more">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <header className="major">
                            <h2>Testimonials</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> 
                    </section>

                    <section id="three">
                        <header className="major">
                            <h2>Tools</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> 
                    </section>

                    <section id="four">
                        <h2>Get In Touch with Donovan</h2>
                        <p>... Or just say "Hi!".</p>
                        <div className="row">
                            <div className="12u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex