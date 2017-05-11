import * as React from 'react';
import IImage from '../../models/image';

const ProjectLogoComponent = (model: IImage) => 
        <img width={128} height={128} src={require(`./images/${model.path}`)} alt="Image"/>;

export default ProjectLogoComponent;
