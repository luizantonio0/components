import { Routes } from '@angular/router';
import {CardProducts} from './components/card-products/card-products';
import {Index} from './pages/index';

export const routes: Routes = [
  {path: '', component: Index, pathMatch : 'full'},
  {path: 'products', component: CardProducts, pathMatch : 'full'},

];
