import * as React from 'react';
import { Carousel } from '../../../node_modules/react-bootstrap';
import IImage from '../../models/image';

const ProjectScreenshotComponent = (model: IImage) =>
    <Carousel.Item> <img width={300} src={require(`./images/${model.path}`)} /> </Carousel.Item>;

export default ProjectScreenshotComponent;
