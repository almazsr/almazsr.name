import * as React from 'react';
import ILogo from '../../models/logo';

const ProjectLogoComponent = (model: ILogo) => {
    var logo = require(`./images/${model.path}`);
    return (
        <img width={128} height={128} src={logo} alt="Image"/>
    );
};

export default ProjectLogoComponent;
