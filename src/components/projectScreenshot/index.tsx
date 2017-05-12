import * as React from 'react';
import { Carousel, Image } from '../../../node_modules/react-bootstrap';
import IImage from '../../models/image';

const ProjectScreenshotComponent = (model: IImage) =>
    <Carousel.Item> <Image src={require(`./images/${model.path}`)} /> </Carousel.Item>;

export default ProjectScreenshotComponent;
