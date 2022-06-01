import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from './protected.component';

const routes: Routes = [{
  path: 'app',
  component: ProtectedComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    { path: 'family-members', 
      loadChildren: () => import('./family-members/family-members.module').then(m => m.FamilyMembersModule)
    },
    { path: 'tasks', 
      loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
    },
    { path: 'profil', 
      loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule)
    }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
