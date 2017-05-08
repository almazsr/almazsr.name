import IProjectPart from './projectPart';

interface IProject {
    title: string;
    description: string;
    parts: IProjectPart[];
}

export default IProject;