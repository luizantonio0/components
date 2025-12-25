import { Component } from '@angular/core';
import {AboutUs} from "../../components/about-us/about-us";
import {Copywriting} from "../../components/copywriting/copywriting";
import {NavBar} from "../../components/nav-bar/nav-bar";
import {ProductRow} from "../../components/product-row/product-row";
import {WhereToFind} from "../../components/where-to-find/where-to-find";

@Component({
  selector: 'app-index',
    imports: [
        AboutUs,
        Copywriting,
        NavBar,
        ProductRow,
        WhereToFind
    ],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

}
