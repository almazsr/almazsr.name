import * as React from 'react';
import './App.css';
import PortfolioComponent from './components/portfolio';
import Participation from './models/participation';
import Platform from './models/platform';

const App = ({}) => {
    const projects = [{
      title: 'Xendapp',
      description: 'Description',
      parts: [{
        technologies: ['ASP.NET MVC', 'MS SQL Server', 'PushSharp', 'jQuery'],
        participation: Participation.Full,
        screenshots: [''],
        uri: 'http://www.xendapp.com/',
        platforms: [Platform.Backend, Platform.Frontend]
      }]
    },
    {
      title: 'Dataroom',
      description: 'Description',
      parts: [{
        technologies: ['ASP.NET MVC', 'MS SQL Server', 'Kendo UI', 'jQuery'],
        participation: Participation.Full,
        screenshots: [''],
        uri: 'http://login.dataroom.se/',
        platforms: [Platform.Backend, Platform.Frontend]
      }]
    },
    {
      title: 'Alphamed',
      description: 'Description',
      parts: [{
        technologies: ['ASP.NET MVC', 'MS SQL Server', 'MySQL', 'jQuery'],
        participation: Participation.Full,
        screenshots: [''],
        uri: '',
        platforms: [Platform.Backend]
      }]
    },
    {
      title: 'Azbuka Pro',
      description: 'Description',
      parts: [{
        technologies: ['Xamarin', 'MVVMCross', 'PDF', 'EPuB', 'HTML'],
        participation: Participation.Part,
        screenshots: [''],
        uri: '',
        platforms: [Platform.Android]
      },
      {
        technologies: ['Xamarin', 'MVVMCross', 'NSUrlBackgroundDownloadSession'],
        participation: Participation.Full,
        screenshots: [''],
        uri: '',
        platforms: [Platform.iOS]
      }]
    }];
    return (
      <PortfolioComponent projects={projects} />
    );
};

export default App;
