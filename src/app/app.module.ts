import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { CardHoverDirective } from './directives/card-hover/card-hover.directive';
import { ModelFormComponent } from './model-form/model-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HttpComponent } from './http/http.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CorsComponent } from './cors/cors.component';


@NgModule({
    declarations: [
        AppComponent,
        JokeListComponent,
        JokeComponent,
        JokeFormComponent,
        CardHoverDirective,
        ModelFormComponent,
        TemplateFormComponent,
        HttpComponent,
        CorsComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
