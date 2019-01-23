import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {ProdutosService} from '../produtos/produtos.service'

import {Produto} from '../produtos/produto/produto.model'

@Component({
  selector: 'mt-produto-detail',
  templateUrl: './produto-detail.component.html'
})
export class ProdutoDetailComponent implements OnInit {

  produto: Produto

  constructor(private produtosService: ProdutosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtosService.produtoById(this.route.snapshot.params['id'])
      .subscribe(produto => this.produto = produto)
  }

}
