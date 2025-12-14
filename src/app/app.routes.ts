import { Routes } from '@angular/router';
import { AuthLayout } from './core/layout/auth-layout/auth-layout';
import { MainLayout } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    // Auth Layout Routes
    {
        path: '',
        component: AuthLayout,
        children: [
            {
                path: 'register',
                loadComponent: () => import('./feature/auth/pages/register/register').then(m => m.Register),
                title: 'Register'
            },
            {
                path: 'login',
                loadComponent: () => import('./feature/auth//pages/login/login').then(m => m.Login),
                title: 'Login'
            },
            {
                path: 'forgot-password',
                loadComponent: () => import('./feature/auth/pages/forgot-password/forgot-password').then(m => m.ForgotPassword),
                title: 'Forgot Password'
            }
        ]
    },

    // Main Layout Routes
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./feature/pages/home/home').then(m => m.Home),
                title: 'Home'
            },
            {
                path: '**',
                loadComponent: () => import('./feature/components/not-found/not-found').then(m => m.NotFound),
                title: 'Page Not Found'
            }
        ]
    }
];
