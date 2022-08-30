import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'HOME',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'TOKENOMICS',
    path: '/about',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />
  },
  {
    title: 'ABOUT',
    path: '/contact',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'CONTACT',
    path: '/contact',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  }
];

export default menuConfig;
