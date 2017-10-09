import * as React from 'react';
import IProjectPart from '../../models/projectPart';
import { Button } from '../../../node_modules/react-bootstrap';
import ProjectScreenshotsComponent from '../projectScreenshots';
import ScreenshotOrientation from '../../models/screenshotOrientation';

const ProjectPartComponent = (model: IProjectPart) => {
    return (
        <div className="card">
                <div className="thumbnail">
                    <Button href={model.uri} bsClass="btn btn-default center-block">{model.platform}</Button>
                    <ProjectScreenshotsComponent images={model.screenshots} orientation={ScreenshotOrientation.Landscape} />
                    <div className="caption" />
                </div>
        </div>
    );
};

export default ProjectPartComponent;