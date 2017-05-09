interface IWebProject {
    id: string;
    title: string;
    description: string;
    uri: string;
    logo: string;
    screenshots: string[];
    technologies: string[];
    projects: IProject[];
    platform: string;
}

export default IWebProject;