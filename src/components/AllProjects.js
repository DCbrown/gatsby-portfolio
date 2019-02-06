import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AllProjects extends Component {
    constructor () {
        super();

        this.state = {
      
        };
    }
    renderAllProjects () {
        const { images } = this.props;

        if (!images) return;

        const AllProjects = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <img className="image fit thumb" src={obj.thumbnail} />
                    <h3>{obj.caption}</h3>
                    <ul className="actions">
                        <li><a href={obj.live} target="_blank" className="button">Live <i class="fa fa-globe"></i></a> <a href={obj.github} target="_blank" className="button">GitHub <i class="fa fa-github"></i></a></li>
                    </ul>
                </article>
            );
        });

        return (
            <div className="row">
                {AllProjects}
            </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderAllProjects()}
            </div>
        );
    }
}

AllProjects.displayName = 'AllProjects';
AllProjects.propTypes = {
    images: PropTypes.array
};

export default AllProjects;