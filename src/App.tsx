import * as React from 'react';
import './App.css';
import PortfolioComponent from './components/portfolio';

const App = ({}) => {
    const projects = [
    {
      title: 'Dataroom',
      logo: 'dataroom.jpg',
      description: 'Sonit Solutions virtuella datarum gör det möjligt för ert företag att dela känslig information mellan flera parter på ett säkert och effektivt sätt. Vi riktar oss till branscher med höga krav på säkerhet och effektivitet så som private equity, fastighetstransaktioner och affärsjuridik. Sonit Solutions virtuella datarum är skapade för hantering av olika typer av känsliga dokument samt filer och håller därför en mycket hög säkerhetsnivå.',
      parts: [{
        platform: 'Backend',
        screenshots: [],
        uri: 'http://login.dataroom.se/',
        technologies: ['ASP.NET MVC', 'Refactoring', 'MS SQL Server', 'Entity Framework']
      },
      {
        platform: 'Frontend',
        uri: 'http://login.dataroom.se/',
        screenshots: ['dataroom_Web_0.png', 'dataroom_Web_1.png'],
        technologies: ['ASP.NET Razor', 'KendoUI', 'jQuery', 'AJAX']
      }]
    },
    {
      title: 'Alphamed',
      logo: 'alphamed.png',
      description: 'АльфаМед – система автоматизации работы фельдшерско-акушерских пунктов* и районных больниц, позволяющая существенно облегчить работу фельдшеров в районах и повысить качество медицинского обслуживания сельских жителей. Система позволяет без установки специального ПО(через Интернет или другую доступную сеть) вести единые медицинские карты и истории болезни, получать актуальную информацию из медицинских баз данных(например, по лекарствам и их противопоказаниям), автоматически планировать работу фельдшера(прививки, врачебные назначения, выдачи молочного питания, обязательные процедуры). также в системе «АльфаМед» предусмотрена электронная очередь, которая позволяет существенно экономить время не только специалистам, но и пациентам, минимально сократив время ожидания в очередях.',
      parts: [
      {
        platform: 'Backend',
        screenshots: [],
        technologies: ['ASP.NET MVC', 'Refactoring', 'MySQL', 'MS SQL Server', 'EntityFramework']
      }]
    },
    {
      title: 'Xendapp',
      logo: 'xendApp.png',
      description: 'XendApp is a service letting you send multiple content type messages to devices. A device could for example be a phone or tablet. The messages can be sent from this web site or through our programming interface. What we have done is to combine the best features of email and SMS in a free package.',
      parts: [{
        platform: 'Backend',
        screenshots: [],
        uri: 'http://www.xendapp.com/',
        technologies: ['ASP.NET', 'Design', 'MS SQL Server', 'ADO.NET', 'PushSharp']
      },
      {
        platform: 'Frontend',
        uri: 'http://www.xendapp.com/',
        screenshots: ['xendApp_Web_0.png', 'xendApp_Web_1.png', 'xendApp_Web_2.png'],
        technologies: ['ASP.NET WebForm', 'jQuery', 'AJAX']
      }]
    },
    {
      title: 'Azbuka Pro',
      logo: 'azbukaPro.jpg',
      description: '«Азбука» - крупнейшая в России платформа агрегации электронных учебников и дополнительного образовательного контента с собственной DRM-технологией. Концепция «Азбуки» направлена на обеспечение доступности качественного образования независимо от места жительства, социального и материального положения семей обучающихся, самих обучающихся и состояния их здоровья. Приложение "Азбука Про" является инструментом для чтения электронных учебников, работы с заметками, комментариями, работы с внешними образовательными ресурсами.',
      parts: [{
        platform: 'Shared',
        screenshots: [],
        technologies: ['Xamarin', 'MVVMCross', 'Design', 'Encrypted content', 'Decryption on fly', 'EPuB reading', 'EPuB MediaOverlay', 'HTTP Media Server', 'Chat', 'OAuth2', 'REST', 'SQLite']
      },
      {
        platform: 'Android',
        uri: 'https://play.google.com/store/apps/details?id=ru.e_azbuka.pro&hl=ru',
        screenshots: ['azbukaPro_Android_0.jpg', 'azbukaPro_Android_1.jpg', 'azbukaPro_Android_2.jpg', 'azbukaPro_Android_3.jpg', 'azbukaPro_Android_4.jpg'],
        technologies: ['Video playing', 'Audio playing', 'Audio recording', 'HTML rendering', 'PDF rendering', 'Crosswalk', 'MuPDF', 'Java libraries bindings']
      },
      {
        platform: 'iOS',
        uri: 'https://itunes.apple.com/ru/app/%D0%B0%D0%B7%D0%B1%D1%83%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE/id1017335773?mt=8',
        description: '',
        screenshots: ['azbukaPro_iOS_0.jpeg'],
        technologies: ['Video playing', 'Audio playing', 'Audio recording', 'HTML rendering', 'PDF reading', 'PDF rendering', 'Working in background', 'NSURLSessionDownloadTask']
      }]
    },
    {
      title: 'A-Store Reader',
      logo: 'aStoreReader.jpg',
      description: 'A-Store Reader is an application to access any kind of content received for your A-Store account. You can work with interactive books, view movies, listen to audio books or music using this app in a completely safe and convenient way. More details about A-Store on our web site: a-store.io.',
      parts: [{
        platform: 'Shared',
        screenshots: [],
        technologies: ['Xamarin', 'MVVMCross', 'Encrypted content', 'Decryption on fly', 'EPuB reading', 'EPuB MediaOverlay', 'HTTP Media Server', 'Chat', 'OAuth2', 'REST', 'SQLite'],
      },
      {
        platform: 'Android',
        uri: 'https://play.google.com/store/apps/details?id=com.aggregion.client&hl=ru',
        screenshots: ['aStoreReader_Android_0.jpg', 'aStoreReader_Android_1.jpg'],
        technologies: ['Video playing', 'Audio playing', 'Audio recording', 'HTML rendering', 'PDF rendering', 'Crosswalk', 'MuPDF', 'Java libraries bindings']
      },
      {
        platform: 'iOS',
        uri: 'https://itunes.apple.com/ru/app/a-store-reader/id1002878916?mt=8',
        screenshots: ['aStoreReader_iOS_0.jpeg'],
        technologies: ['Video playing', 'Audio playing', 'Audio recording', 'HTML rendering', 'PDF reading', 'PDF rendering', 'Working in background', 'NSURLSessionDownloadTask']
      },
      {
        platform: 'MacOS',
        uri: 'https://itunes.apple.com/ru/app/a-store-reader/id1041905062?l=en&mt=12',
        screenshots: ['aStoreReader_MacOS_0.jpeg', 'aStoreReader_MacOS_1.jpeg'],
        technologies: ['Video playing', 'Audio playing', 'HTML rendering', 'PDF reading']
      }]
    },
    {
      title: 'Sputnik Auto Mobile',
      logo: 'sputnikAuto.jpg',
      description: 'Мобильное приложение Sputnik Auto Mobile позволяет собственнику транспорта всегда держать под контролем свои транспортные активы, строить отчёты и использовать полный функционал программы. Водитель одним нажатием кнопки может превратить свой телефон в мобильный трекер и передавать данные по своему автомобилю диспетчерам, обмениваться сообщениями и двигаться по заданному маршруту.',
      parts: [{
        platform: 'Shared',
        screenshots: [],
        technologies: ['Xamarin', 'MVVMCross', 'Design', 'TCPSocket', 'Chat', 'GPS tracking', 'Push notifications', 'WCF', 'Battery monitoring', 'SQLite'],
      },
      {
        platform: 'Android',
        uri: 'https://play.google.com/store/apps/details?id=com.aggregion.client&hl=ru',
        screenshots: ['sputnikAuto_Android_0.jpg', 'sputnikAuto_Android_1.jpg', 'sputnikAuto_Android_2.jpg', 'sputnikAuto_Android_3.jpg'],
        technologies: ['GPS tracking', 'UI layout', 'Google maps', 'Background service', 'Cell info', 'User guide', 'Refactoring'],
      },
      {
        platform: 'iOS',
        uri: 'https://itunes.apple.com/ru/app/a-store-reader/id1002878916?mt=8',
        screenshots: ['sputnikAuto_iOS_0.jpeg', 'sputnikAuto_iOS_1.jpeg', 'sputnikAuto_iOS_2.jpeg', 'sputnikAuto_iOS_3.jpeg'],
        technologies: ['Background location', 'UI layout', 'Google maps'],
      }]
    },
    {
      title: 'Цифровая мозаика',
      logo: 'digitalMosaic.jpg',
      description: 'Приложение для проверки ценников по QR кодам.',
      parts: [{
        platform: 'iOS',
        uri: 'https://itunes.apple.com/ru/app/a-store-reader/id1002878916?mt=8',
        technologies: ['Xamarin', 'MVVMCross', 'Design', 'QR Code scanning', 'Camera access', 'SQLite'],
        screenshots: ['digitalMosaic_iOS_0.jpeg', 'digitalMosaic_iOS_1.jpeg'],
      }]
    },
    {
      title: 'Буквограмма',
      logo: 'bukvogramma.jpg',
      description: 'Уникальная авторская методика «Буквограмма» направлена на психическое, интеллектуальное и эмоциональное развитие детей от 4 до 15 лет! Основной задачей программы является прогрессивное развитие, формирование и коррекция устной и письменной речи. Но итогом является комплексное улучшение работы всех систем головного мозга.',
      parts: [{
        platform: 'Windows',
        uri: 'http://bk-gramma.ru/',
        technologies: ['.NET', 'WPF', 'Design', 'Windows XP Support', 'HTTP Media Server', 'Encrypted content', 'Video playing', 'PDF rendering', 'UI layout', 'UI styling'],
        screenshots: ['bukvogramma_Windows_0.png', 'bukvogramma_Windows_1.png', 'bukvogramma_Windows_2.png', 'bukvogramma_Windows_3.png'],
      }]
    }];
    return (
      <PortfolioComponent projects={projects} />
    );
};

export default App;
