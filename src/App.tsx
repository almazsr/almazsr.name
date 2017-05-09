import * as React from 'react';
import './App.css';
import PortfolioComponent from './components/portfolio';
import Participation from './models/participation';
import Platform from './models/platform';

const App = ({}) => {
    const projects = [{
      id: 'xendApp',
      title: 'Xendapp',
      uri: 'http://www.xendapp.com/',
      logo: 'xendApp.png',
      description: 'XendApp is a service letting you send multiple content type messages to devices. A device could for example be a phone or tablet. The messages can be sent from this web site or through our programming interface. What we have done is to combine the best features of email and SMS in a free package.',
      screenshots: ['xendApp_Web_0.png', 'xendApp_Web_1.png', 'xendApp_Web_2.png'],
      technologies: ['ASP.NET MVC', 'MS SQL Server', 'ADO.NET', 'PushSharp', 'jQuery'],
      platform: 'Web'
    },
    {
      id: 'dataroom',
      title: 'Dataroom',
      uri: 'http://login.dataroom.se/',
      logo: 'dataroom.jpg',
      description: 'Sonit Solutions virtuella datarum gör det möjligt för ert företag att dela känslig information mellan flera parter på ett säkert och effektivt sätt. Vi riktar oss till branscher med höga krav på säkerhet och effektivitet så som private equity, fastighetstransaktioner och affärsjuridik. Sonit Solutions virtuella datarum är skapade för hantering av olika typer av känsliga dokument samt filer och håller därför en mycket hög säkerhetsnivå.',
      screenshots: ['dataroom_Web_0.png', 'dataroom_Web_1.png'],
      technologies: ['ASP.NET MVC', 'MS SQL Server', 'Entity Framework', 'KendoUI'],
      platform: 'Web'
    },
    {
      id: 'alphamed',
      title: 'Alphamed',
      logo: 'alphamed.png',
      uri: '',
      description: 'АльфаМед – система автоматизации работы фельдшерско-акушерских пунктов* и районных больниц, позволяющая существенно облегчить работу фельдшеров в районах и повысить качество медицинского обслуживания сельских жителей. Система позволяет без установки специального ПО(через Интернет или другую доступную сеть) вести единые медицинские карты и истории болезни, получать актуальную информацию из медицинских баз данных(например, по лекарствам и их противопоказаниям), автоматически планировать работу фельдшера(прививки, врачебные назначения, выдачи молочного питания, обязательные процедуры). также в системе «АльфаМед» предусмотрена электронная очередь, которая позволяет существенно экономить время не только специалистам, но и пациентам, минимально сократив время ожидания в очередях.',
      screenshots: [],
      technologies: ['ASP.NET MVC', 'MySQL', 'MS SQL Server', 'EntityFramework'],
      platform: 'Web'
    },
    {
      id: 'azbukaPro',
      title: 'Azbuka Pro',
      logo: 'azbukaPro.png',
      uri: '',
      description: '«Азбука» - крупнейшая в России платформа агрегации электронных учебников и дополнительного образовательного контента с собственной DRM-технологией. Концепция «Азбуки» направлена на обеспечение доступности качественного образования независимо от места жительства, социального и материального положения семей обучающихся, самих обучающихся и состояния их здоровья. Приложение "Азбука Про" является инструментом для чтения электронных учебников, работы с заметками, комментариями, работы с внешними образовательными ресурсами.',
      technologies: ['Xamarin', 'MVVM', 'ContentEncryption', 'MVVMCross', 'PDF', 'EPUB', 'MediaOverlay', 'HTML', 'HTTPMediaServer', 'Chat', 'AudioContent', 'AudioRecording', 'VideoContent', 'OAuth2', 'REST', 'SQLite'],
      projects: [{
        id: 'azbukaPro.Android',
        title: '',
        logo: '',
        uri: 'https://play.google.com/store/apps/details?id=ru.e_azbuka.pro&hl=ru',
        description: '',
        screenshots: ['azbukaPro_Android_0.jpg', 'azbukaPro_Android_1.jpg', 'azbukaPro_Android_2.jpg', 'azbukaPro_Android_3.jpg', 'azbukaPro_Android_4.jpg'],
        technologies: ['Crosswalk', 'MuPDF', 'Java bindings'],
        platform: 'Android'
      },
      {
        id: 'azbukaPro.iOS',
        title: '',
        logo: '',
        uri: 'https://itunes.apple.com/ru/app/%D0%B0%D0%B7%D0%B1%D1%83%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE/id1017335773?mt=8',
        description: '',
        screenshots: ['azbukaPro_iOS_0.jpeg'],
        technologies: ['NSURLSessionDownloadTask', 'PDFRendering', 'EPUBRendering'],
        platform: 'iOS'
      }],
      platform: 'Mobile'
    },
    {
      id: 'aStoreReader',
      title: 'A-Store Reader',
      logo: 'aStoreReader.jpg',
      uri: '',
      description: 'A-Store Reader is an application to access any kind of content received for your A-Store account. You can work with interactive books, view movies, listen to audio books or music using this app in a completely safe and convenient way. More details about A-Store on our web site: a-store.io.',
      technologies: ['Xamarin', 'MVVM', 'ContentEncryption', 'MVVMCross', 'PDF', 'EPUB', 'MediaOverlay', 'HTML', 'HTTPMediaServer', 'AudioContent', 'AudioRecording', 'VideoContent', 'OAuth2', 'REST', 'SQLite'],
      projects: [{
        id: 'aStoreReader.Android',
        title: '',
        logo: '',
        uri: 'https://play.google.com/store/apps/details?id=com.aggregion.client&hl=ru',
        description: '',
        screenshots: ['aStoreReader_Android_0.jpg', 'aStoreReader_Android_1.jpg'],
        technologies: ['Crosswalk', 'MuPDF', 'Java bindings'],
        platform: 'Android'
      },
      {
        id: 'aStoreReader.iOS',
        title: '',
        logo: '',
        uri: 'https://itunes.apple.com/ru/app/a-store-reader/id1002878916?mt=8',
        description: '',
        screenshots: ['aStoreReader_iOS_0.jpeg'],
        technologies: ['Download in background', 'PDF reading', 'EPUB reading'],
        platform: 'iOS'
      },
      {
        id: 'aStoreReader.MacOS',
        title: '',
        logo: '',
        uri: 'https://itunes.apple.com/ru/app/a-store-reader/id1041905062?l=en&mt=12',
        description: '',
        screenshots: ['aStoreReader_MacOS_0.jpeg', 'aStoreReader_MacOS_1.jpeg'],
        technologies: ['PDFRendering'],
        platform: 'MacOS'
      }],
      platform: 'Mobile'
    },
    {
      id: 'sputnikAuto',
      title: 'Sputnik Auto Mobile',
      logo: 'sputnikAuto.jpg',
      uri: '',
      description: 'Мобильное приложение Sputnik Auto Mobile позволяет собственнику транспорта всегда держать под контролем свои транспортные активы, строить отчёты и использовать полный функционал программы. Водитель одним нажатием кнопки может превратить свой телефон в мобильный трекер и передавать данные по своему автомобилю диспетчерам, обмениваться сообщениями и двигаться по заданному маршруту.',
      technologies: ['Xamarin', 'MVVM', 'TCPSocket', 'MVVMCross', 'Chat', 'GPS', 'PushNotifications', 'WCF', 'Battery', 'SQLite', 'GoogleMaps', 'Design'],
      
    }];
    return (
      <PortfolioComponent projects={projects} />
    );
};

export default App;
