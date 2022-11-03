import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const ACCOUNT_ROUTING: Routes = [
    {path: '', component:LoginComponent }
]

export const ACCOUNTROUTING = RouterModule.forChild(ACCOUNT_ROUTING);