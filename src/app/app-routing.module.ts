import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule'},
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'status/:id', loadChildren: './status/status.module#StatusPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'contact-search', loadChildren: './contact-search/contact-search.module#ContactSearchPageModule' },
  { path: 'add-contact', loadChildren: './add-contact/add-contact.module#AddContactPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
