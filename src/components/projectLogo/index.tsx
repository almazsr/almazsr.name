import * as React from 'react';
import IImage from '../../models/image';

const ProjectLogoComponent = (model: IImage) => {
    var logo = require(`./images/${model.path}`);
    return (
        <img width={128} height={128} src={logo} alt="Image"/>
    );
};

export default ProjectLogoComponent;
