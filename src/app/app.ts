import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBar} from './components/nav-bar/nav-bar';
import {Copywriting} from './components/copywriting/copywriting';
import {ProductRow} from './components/product-row/product-row';
import {WhereToFind} from './components/where-to-find/where-to-find';
import {AboutUs} from './components/about-us/about-us';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Copywriting, ProductRow, WhereToFind, AboutUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'components';
}
