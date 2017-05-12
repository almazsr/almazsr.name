import * as React from 'react';
import { Media, Grid, Row, Col } from '../../../node_modules/react-bootstrap';
import IProject from '../../models/project';
import ProjectLogoComponent from '../projectLogo';
import ProjectPartComponent from '../projectPart';

const ProjectComponent = (model: IProject) => {
    return (
        <div className="spacing-xlv">
            <Media>
                <Media.Left align="middle">
                    <ProjectLogoComponent path={model.logo} />
                </Media.Left>
                <Media.Body>
                    <Media.Heading><h2>{model.title}</h2></Media.Heading>
                    <p>{model.description}</p>
                </Media.Body>
            </Media>
            <Grid>
                <Row>
                    {model.parts
                    .map(part => <Col xs={12} md={6}><ProjectPartComponent {...part} /></Col> )}
                </Row>
            </Grid>
        </div>
    );
};

export default ProjectComponent;
