import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/browncdonovan" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://twitter.com/browncdonovan" target="_blnak" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://www.instagram.com/brown_c_donovan/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://github.com/DCbrown" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="browncdonovan@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2019 Donovan C. Brown, Powered by <u>React</u>.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
