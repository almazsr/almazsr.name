import * as React from 'react';
import { Carousel, Image } from '../../../node_modules/react-bootstrap';
import IProjectScreenshots from '../../models/projectScreenshots';

const isMoreThanOne = <T extends {}>(arr: T[]) => {
    return arr.length > 1;
};

const ProjectScreenshotsComponent = (model: IProjectScreenshots) =>
        (
                <Carousel controls={isMoreThanOne(model.images)} indicators={isMoreThanOne(model.images)} height={400} width={400} interval={0}>
                        {model.images.map(image => <Carousel.Item> <Image src={require(`./images/${image}`)} /> </Carousel.Item>)}
                </Carousel>
        );

export default ProjectScreenshotsComponent;