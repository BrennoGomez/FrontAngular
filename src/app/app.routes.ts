import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {ProdutosComponent} from './produtos/produtos.component'
import {ProdutoDetailComponent} from './produto-detail/produto-detail.component'
import {MenuComponent} from './produto-detail/menu/menu.component'
import {ReviewsComponent} from './produto-detail/reviews/reviews.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'
import {NotFoundComponent} from './not-found/not-found.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produtos/:id', component: ProdutoDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}
]
