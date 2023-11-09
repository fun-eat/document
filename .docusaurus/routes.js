import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '0e8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '917'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '821'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f3f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '151'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a1c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '51e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e88'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4d7'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5cf'),
            routes: [
              {
                path: '/docs/Badge',
                component: ComponentCreator('/docs/Badge', '257'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BottomSheet',
                component: ComponentCreator('/docs/BottomSheet', '706'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Intall',
                component: ComponentCreator('/docs/Intall', '7ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Toast',
                component: ComponentCreator('/docs/Toast', 'ebd'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e6c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
