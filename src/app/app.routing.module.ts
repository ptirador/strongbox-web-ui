import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './modules/core/auth/auth.guard';
import {CoreRouterResolver} from './modules/core/core.router.resolver';
import {HomepageComponent} from './modules/core/pages/homepage/homepage.component';
import {PageNotFoundComponent} from './modules/core/pages/page-not-found/page-not-found.component';
import {RepositorySearchResultsComponent} from './modules/core/pages/search/repository-search-results.component';
import {ProfileComponent} from './modules/core/pages/profile/profile.component';

const routes: Routes = [
    {path: '', component: HomepageComponent, resolve: {crisis: CoreRouterResolver}},
    {path: 'search', redirectTo: 'search/', pathMatch: 'full'},
    {path: 'search/:query', component: RepositorySearchResultsComponent, resolve: {crisis: CoreRouterResolver}},
    {path: 'profile', component: ProfileComponent, resolve: {crisis: CoreRouterResolver}, canActivate: [AuthGuard]},
    {
        path: 'admin/users',
        loadChildren: './modules/user-management/user-management.module#UserManagementModule'
    },
    {
        path: 'admin/global-settings',
        loadChildren: './modules/server-settings/server-settings.module#ServerSettingsModule'
    },
    {
        path: 'admin/environment-info',
        loadChildren: './modules/environment-info/environment-info.module#EnvironmentInfoModule'
    },
    {path: '**', component: PageNotFoundComponent, resolve: {crisis: CoreRouterResolver}}
];

@NgModule({
    // TODO Preload modules to which we actually have access to.
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

