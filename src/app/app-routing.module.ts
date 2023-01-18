import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
const routes: Routes = [
    {
      path: '',
      pathMatch:'full',
      redirectTo:'home'
    },
  
    {
    path:'home',
    component: HomeComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path:'products',
      component: ProductsComponent
    },
  
    {
      path: '**',
      component: NotFoundComponent
    },
  
    {
      path: 'product',
      component: ProductComponent
    }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
