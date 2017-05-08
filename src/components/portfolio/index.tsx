import * as React from 'react';
import IPortfolio from '../../models/portfolio';
import ProjectComponent from '../project';

const PortfolioComponent = (model: IPortfolio) => {
    return (
        <div className="card container">
            {model.projects.map(p => <ProjectComponent {...p} />)}
        </div>
    );
};

export default PortfolioComponent;
