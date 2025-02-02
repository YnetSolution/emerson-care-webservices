// assets
import { IconUsers } from '@tabler/icons-react';

// constant
const icons = {
  IconUsers
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'providers',
  title: 'Providers',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Providers',
      type: 'collapse',
      icon: icons.IconUsers,

      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
