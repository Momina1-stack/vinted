import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { BagItems } from './pages/bag-items/bag-items';
import { SubItems } from './pages/sub-items/sub-items';

export const routes: Routes = [

   {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'items', component: BagItems },
    ],
  },
];
