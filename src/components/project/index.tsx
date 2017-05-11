import * as React from 'react';
import { Media, Grid, Row, Col } from '../../../node_modules/react-bootstrap';
import IProject from '../../models/project';
import ProjectLogoComponent from '../projectLogo';
import ProjectPartComponent from '../projectPart';

const ProjectComponent = (model: IProject) => {
    return (
        <div className="spacing-l">
            <Media>
                <Media.Left>
                    <ProjectLogoComponent path={model.logo} />
                </Media.Left>
                <Media.Body>
                    <p>{model.description}</p>
                </Media.Body>
            </Media>
            <Grid>
                <Row>
                    {model.parts.map(part => <Col xs={6} md={4}><ProjectPartComponent {...part} /></Col> )}
                </Row>
            </Grid>
        </div>
    );
};

export default ProjectComponent;
