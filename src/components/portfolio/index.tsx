import * as React from 'react';
import IPortfolio from '../../models/portfolio';
import ProjectComponent from '../project';
import { Grid } from '../../../node_modules/react-bootstrap';

const PortfolioComponent = (model: IPortfolio) => {
    return (
        <Grid>
            {model.projects.map(p => <ProjectComponent {...p} />)}
        </Grid>
    );
};

export default PortfolioComponent;
