import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
})
export class FolderPage implements OnInit {

  title: String;

  user = {
    name: 'User Teste',
    email: 'teste@teste.com'
  }

  public appFolder = [
    { title: 'Perfil', url: '/folder/ambiente', icon: 'person-circle' },
    { title: 'Ambientes', url: '/folder/embarcado', icon: 'pricetag' },
    { title: 'Sair', url: '/autenticacao/login', icon: 'exit' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    let userStorage = localStorage.getItem("user");
    if (userStorage) this.user = JSON.parse(userStorage);

    this.router.events.subscribe(() => {
      this.title = this.activatedRoute.snapshot.routeConfig.children.filter(i => i.path == this.router.url.replace("/folder/", "")).map(i => i.data.title)[0];
    });
  }

}
