import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-preinico',
  templateUrl: './preinico.page.html',
  styleUrls: ['./preinico.page.scss'],
})
export class PreinicoPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  redirectToProgresoPage() {
    // Navega a la página "ProgressPage" dentro del tab "tabs/tab2"
    this.router.navigate(['./../tabs/progeso']);
  }
}
