interface ICrossProject {
    id: string;
    title: string;
    description: string;
    logo: string;
    screenshots: string[];
    technologies: string[];
    projects: IProject[];
    platform: string;
}

export default ICrossProject;