/* *** Modules start *** */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

/* *** Modules End *** */

/* *** Services Start *** */

import { AuthService } from './services/auth.service';
import { Angular2TokenService } from 'angular2-token';
import { CategoryService } from './game/game-category/category.service';
import { WordService } from './game/word/word.service';

/* *** Services End *** */

/* *** Components Start *** */

import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { GameComponent } from './game/game/game.component';
import { GameCategoryComponent } from './game/game-category/game-category.component';

/* *** Components End *** */

/* *** Guards start *** */

import { AuthGuard } from './guards/auth.guard';
import { GameGuard } from './guards/game.guard';

/* *** Guards end *** */

/* *** Factories Start *** */

import { UserFactory } from './models/userFactory';
import { WordComponent } from './game/word/word.component';

/* *** Factories Start *** */

@NgModule({
	declarations: [
	AppComponent,
	HomeComponent,
	ToolbarComponent,
	AuthDialogComponent,
	LoginFormComponent,
	RegisterFormComponent,
	ProfileComponent,
	GameComponent,
	GameCategoryComponent,
	WordComponent
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	HttpModule,
	BootstrapModalModule,
	FormsModule,
	ReactiveFormsModule,
	NgbModule.forRoot(),
	NgHttpLoaderModule
	],
	providers: [Angular2TokenService, AuthService, AuthGuard, GameGuard, CategoryService, Configuration, UserFactory, WordService],
	bootstrap: [AppComponent],
	entryComponents: [AuthDialogComponent, GameCategoryComponent]
})

export class AppModule { }

