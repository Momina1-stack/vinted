import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterOutlet } from "@angular/router";
import { Navbar } from '../../components/navbar/navbar';
import { Home } from "../pages/home/home";

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, Navbar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
