import { RouterModule, Routes } from "@angular/router";

const APP_ROUTING: Routes = [
        { path: 'login', loadChildren: ()=> import('./account/account.module').then(m => m.AccountModule)},
        { path: '', loadChildren: ()=>import('./main/main.module').then(m => m.MainModule)},
]
  
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
  