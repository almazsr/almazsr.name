import Participation from './participation';
import Platform from './platform';

interface IProjectPart {
    technologies: string[];
    screenshots: string[];
    uri: string;
    platforms: Platform[];
}

export default IProjectPart;