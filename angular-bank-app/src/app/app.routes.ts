import { Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { BankListComponent } from './components/banks/bank-list/bank-list.component';
import { AddBankComponent } from './components/banks/add-bank/add-bank.component';

export const routes: Routes = [
    {
        path: 'user', children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ]
    },
    {
        path: 'banks', children: [
            { path: 'list', component: BankListComponent },
            { path: 'add', component: AddBankComponent },
        ]
    }
];
