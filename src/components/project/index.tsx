import * as React from 'react';
import { Media } from '../../../node_modules/react-bootstrap';
import IProject from '../../models/project';
import ProjectLogoComponent from '../projectLogo';

const ProjectComponent = (model: IProject) => {
    return (
        <div className="card">
            <Media>
                <Media.Left>
                    <ProjectLogoComponent path={model.logo} />
                </Media.Left>
                <Media.Body>
                    <p>{model.description}</p>
                </Media.Body>
            </Media>
        </div>
    );
};

export default ProjectComponent;
