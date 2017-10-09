import * as React from 'react';
import IImage from '../../models/image';
import { Image } from '../../../node_modules/react-bootstrap';

const ProjectLogoComponent = (model: IImage) => 
        <Image width={128} height={128} src={require(`./images/${model.path}`)} />;

export default ProjectLogoComponent;
