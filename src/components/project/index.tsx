import * as React from 'react';
import { Carousel } from '../../../node_modules/react-bootstrap';
import IProject from '../../models/project';

const Project = (model: IProject) => {
    return (
        <div className="card container">
            {model.title}
        </div>
    );
};

export default Project;
