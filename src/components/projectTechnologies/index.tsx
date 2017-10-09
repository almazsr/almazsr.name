import * as React from 'react';
import { Button, ButtonToolbar } from '../../../node_modules/react-bootstrap';
import IProjectTechnologies from '../../models/projectTechnologies';

const ProjectTechnologiesComponent = (model: IProjectTechnologies) => 
    <ButtonToolbar>{model.tags.map(tech => <Button bsSize="small">{tech}</Button>)}</ButtonToolbar>;

export default ProjectTechnologiesComponent;