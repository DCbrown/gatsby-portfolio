import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import RecentProjects from '../components/RecentProjects'

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

class Projects extends React.Component {

    constructor() {
        super();

        this.state = {};
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
                    <ul className="actions">
                        <li><Link className="button more" to="/projects/">Testimonials</Link></li>
                        <li><Link className="button more" to="/projects/">Tools</Link></li>
                        <li><Link className="button more" to="/projects/">Contact</Link></li>
                    </ul>
                    <section id="one">
                        <h2>All Projects</h2>
                        <RecentProjects images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, live, github }) => ({
                            src,
                            thumbnail,
                            caption,
                            live,
                            github
                        }))} />
                    </section>
                </div>

            </Layout>
        )
    }
}

export default Projects