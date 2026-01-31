import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterOutlet } from "@angular/router";
import { Navbar } from '../../components/navbar/navbar';
import { Home } from "../pages/home/home";
import { Login } from "../login/login";
import { LoginForm } from "../login-form/login-form";

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, Navbar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
