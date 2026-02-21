import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterOutlet } from "@angular/router";
import { Navbar } from '../../components/navbar/navbar';
import { Home } from "../pages/home/home";
import { Login } from "../login/login";
import { LoginForm } from "../login-form/login-form";
import { FormsPractice } from "../forms-practice/forms-practice";
import { TemplateForm } from "../template-form/template-form";

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, Navbar, RouterOutlet, FormsPractice, TemplateForm],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
