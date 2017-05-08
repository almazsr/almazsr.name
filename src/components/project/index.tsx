import * as React from 'react';
import { Media } from '../../../node_modules/react-bootstrap';
import IProject from '../../models/project';

const ProjectComponent = (model: IProject) => {
    return (
        <div className="card">
            <Media>
                <Media.Left>
                    <img width={128} height={128} src="/assets/thumbnail.png" alt="Image"/>
                </Media.Left>
                <Media.Body>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </Media.Body>
            </Media>
        </div>
    );
};

export default ProjectComponent;
