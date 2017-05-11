import * as React from 'react';
import IProjectPart from '../../models/projectPart';
import { Carousel, Label } from '../../../node_modules/react-bootstrap';

const ProjectPartComponent = (model: IProjectPart) => {
    return (
        <div className="card">
                <div className="thumbnail">
                    <Carousel width={300} interval={0}>
                            {model.screenshots.map(screenshot => <Carousel.Item> <img width={300} src={require(`../project/screenshots/${screenshot}`)} /> </Carousel.Item>)}
                    </Carousel>
                    <div className="caption">
                        <p>{model.technologies.map(tech => <Label>{tech}</Label>)}</p>
                    </div>
                </div>
        </div>
    );
};

export default ProjectPartComponent;