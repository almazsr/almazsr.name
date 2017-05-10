import * as React from 'react';
import { Media } from '../../../node_modules/react-bootstrap';
import IProject from '../../models/project';
import ProjectLogoComponent from '../projectLogo';
import ProjectScreenshotsComponent from '../projectScreenshots';

const ProjectComponent = (model: IProject) => {
    var partsScreenshots = model.parts
    .map(part => part.screenshots);

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
            {partsScreenshots.map(screenshots => <ProjectScreenshotsComponent paths={screenshots} />)}
        </div>
    );
};

export default ProjectComponent;
