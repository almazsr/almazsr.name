import IProjectPart from './projectPart';

interface IProject {
    title: string;
    logo: string;
    description: string;
    parts: IProjectPart[];
}

export default IProject;