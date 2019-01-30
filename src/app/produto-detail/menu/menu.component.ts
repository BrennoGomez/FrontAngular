import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ProdutosService} from '../../produtos/produtos.service'
import {MenuItem} from '../menu-item/menu-item.model'

import {Observable} from 'rxjs/Observable'


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  currentImage

  constructor(private produtosService: ProdutosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.produtosService
      .menuOfProduto(this.route.parent.snapshot.params['id'])
  }

  setImage(image){
    this.currentImage = image;
  }


  addMenuItem(item: MenuItem){
    console.log(item)
  }







}
