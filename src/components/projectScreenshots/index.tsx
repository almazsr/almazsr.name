import * as React from 'react';
import { Carousel } from '../../../node_modules/react-bootstrap';
import IImages from '../../models/images';

const ProjectScreenshotsComponent = (model: IImages) => {
    var screenshots = model.paths.map(path => require(`./images/${path}`));
    return (
        <Carousel interval={0}>
              {screenshots.map(screenshot => <Carousel.Item width={300}> <img src={screenshot} /> </Carousel.Item>)}
        </Carousel>
    );
};

export default ProjectScreenshotsComponent;
