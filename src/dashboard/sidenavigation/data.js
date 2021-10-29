import HomeIcon from './icons/home';
import MediasIcon from './icons/medias';
import ContactIcon from './icons/contact';
import ServersIcon from './icons/servers';
import TerminalIcon from './icons/terminal';
import SettingsIcon from './icons/settings';
import RecycleBinIcon from './icons/recycle-bin';
import DocumentationIcon from './icons/documentation';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Withdrawal',
    icon: <MediasIcon />,
    link: '/admin/medias',
  },
  {
    title: 'Investment',
    icon: <ContactIcon />,
    link: '/admin/contacts',
  }
];

export default data;
