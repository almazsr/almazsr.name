import IProjectPart from './projectPart';

interface IProject {
    id: string;
    title: string;
    logoUri: string;
    inProduction: boolean;
    description: string;
    parts: IProjectPart[];
}

export default IProject;