import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ProdutosService} from '../../produtos/produtos.service'

import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private produtosService: ProdutosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.produtosService
      .reviewsOfProduto(this.route.parent.snapshot.params['id'])
  }

}
