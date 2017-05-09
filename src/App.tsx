import * as React from 'react';
import './App.css';
import PortfolioComponent from './components/portfolio';
import Participation from './models/participation';
import Platform from './models/platform';

const App = ({}) => {
    const projects = [{
      id: 'xendApp',
      title: 'Xendapp',
      logoUri: './images/xendApp.png',
      description: 'XendApp is a service letting you send multiple content type messages to devices. A device could for example be a phone or tablet. The messages can be sent from this web site or through our programming interface. What we have done is to combine the best features of email and SMS in a free package.',
      inProduction: true,
      parts: [{
        technologies: ['ASP.NET MVC', 'MS SQL Server', 'ADO.NET', 'PushSharp', 'jQuery'],
        screenshots: ['./images/xendApp_Web_0.png', './images/xendApp_Web_1.png', './images/xendApp_Web_2.png'],
        uri: 'http://www.xendapp.com/',
        platforms: [Platform.Web]
      }]
    },
    {
      id: 'dataroom',
      title: 'Dataroom',
      inProduction: true,
      logoUri: './images/dataroom.jpg',
      description: 'Sonit Solutions virtuella datarum gör det möjligt för ert företag att dela känslig information mellan flera parter på ett säkert och effektivt sätt. Vi riktar oss till branscher med höga krav på säkerhet och effektivitet så som private equity, fastighetstransaktioner och affärsjuridik. Sonit Solutions virtuella datarum är skapade för hantering av olika typer av känsliga dokument samt filer och håller därför en mycket hög säkerhetsnivå.',
      parts: [{
        technologies: ['ASP.NET MVC', 'MS SQL Server', 'Entity Framework', 'KendoUI'],
        screenshots: ['./images/dataroom_Web_0.png', './images/dataroom_Web_1.png'],
        uri: 'http://login.dataroom.se/',
        platforms: [Platform.Web]
      }]
    },
    {
      id: 'alphamed',
      title: 'Alphamed',
      inProduction: false,
      logoUri: './images/alphamed.png',
      description: 'АльфаМед – система автоматизации работы фельдшерско-акушерских пунктов* и районных больниц, позволяющая существенно облегчить работу фельдшеров в районах и повысить качество медицинского обслуживания сельских жителей. Система позволяет без установки специального ПО(через Интернет или другую доступную сеть) вести единые медицинские карты и истории болезни, получать актуальную информацию из медицинских баз данных(например, по лекарствам и их противопоказаниям), автоматически планировать работу фельдшера(прививки, врачебные назначения, выдачи молочного питания, обязательные процедуры). также в системе «АльфаМед» предусмотрена электронная очередь, которая позволяет существенно экономить время не только специалистам, но и пациентам, минимально сократив время ожидания в очередях.',
      parts: [{
        technologies: ['ASP.NET MVC', 'MySQL', 'MS SQL Server', 'EntityFramework'],
        screenshots: [''],
        uri: '',
        platforms: [Platform.Web]
      }]
    }];
    return (
      <PortfolioComponent projects={projects} />
    );
};

export default App;
