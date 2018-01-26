import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailComponent } from './detail/detail.component';
import { ShowComponent } from './show/show.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { DataService } from './data.service.service';
import { CardComponent } from './show/card/card.component';
import { browser } from 'protractor';
import { MComponent } from './m/m.component';
import { Http, HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { CardNewComponent } from './detail/card-new/card-new.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from './detail/comment/comment.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { BlogComponent } from './detail/blog/blog.component';
import { NewComponent } from './new/new.component';
import { AuthService } from './auth.service';
import { InterService } from './inter.service';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignupComponent } from './signup/signup.component';
import { MatIconModule } from '@angular/material/icon';
import { DashComponent } from './dash/dash.component';
import { RouteGardService } from './route-gard.service';
import { SearchComponent } from './search/search.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AppearDirective} from './appaer.directive';
import {VerificationComponent} from './verification/verification.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';


const appRoutes: Routes = [{
  path: '', component: ShowComponent
}, {
  path: 'signup', component: SignupComponent
},
{path:'dash',component:DashComponent},
{
  path: 'new', component: NewComponent, canActivate: [RouteGardService]
}, {
  path:'search/:term',component:SearchComponent
},{
  path:'user/:token',component:VerificationComponent
},{
  path: ':id/edit', component: EditComponent
},
{
  path: ':id', component: DetailComponent

}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HomepageComponent,
    DetailComponent,
    ShowComponent,
    FormComponent,
    UserComponent,
    CardComponent,
    MComponent,
    NavbarComponent,
    CardNewComponent,
    CommentComponent,
    EditComponent,
    BlogComponent,
    NewComponent,
    SignupComponent,
    DashComponent,
    SearchComponent,
   AppearDirective,
   VerificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    HttpClientModule,
    MatExpansionModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [DataService, AuthService, InterService, RouteGardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
