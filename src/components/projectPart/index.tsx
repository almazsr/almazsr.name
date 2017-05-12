import * as React from 'react';
import IProjectPart from '../../models/projectPart';
import { Carousel, Button, ButtonToolbar, Image } from '../../../node_modules/react-bootstrap';

const ProjectPartComponent = (model: IProjectPart) => {
    return (
        <div className="card">
                <div className="thumbnail">
                    <Button href={model.uri} bsClass="btn btn-default center-block">{model.platform}</Button>
                    <Carousel width={300} interval={0}>
                            {model.screenshots.map(screenshot => <Carousel.Item> <Image src={require(`../project/screenshots/${screenshot}`)} /> </Carousel.Item>)}
                    </Carousel>
                    <div className="caption">
                        <ButtonToolbar>{model.technologies.map(tech => <Button bsSize="small">{tech}</Button>)}</ButtonToolbar>
                    </div>
                </div>
        </div>
    );
};

export default ProjectPartComponent;