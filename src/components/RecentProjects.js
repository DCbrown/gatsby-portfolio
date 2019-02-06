import PropTypes from 'prop-types';
import React, { Component } from 'react';

class RecentProjects extends Component {
    constructor () {
        super();

        this.state = {
      
        };
    }
    renderRecentProjects () {
        const { images } = this.props;

        if (!images) return;

        const RecentProjects = images.map((obj, i) => {
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
                {RecentProjects}
            </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderRecentProjects()}
            </div>
        );
    }
}

RecentProjects.displayName = 'RecentProjects';
RecentProjects.propTypes = {
    images: PropTypes.array
};

export default RecentProjects;