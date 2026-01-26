import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { BagItems } from './pages/bag-items/bag-items';
import { SubItems } from './pages/sub-items/sub-items';
import { Login } from './login/login';
import { ImgUpload } from './img-upload/img-upload';
import { AboutSubsection } from './about-subsection/about-subsection';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [

  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'login', component: Login },
      { path: 'items', component: BagItems },
      { path: 'about-subsection', component: AboutSubsection },
      { path: 'about-us', component: AboutUs },




    ],
  },
];
