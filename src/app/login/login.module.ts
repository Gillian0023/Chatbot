import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from "../dashboard/dashboard.module";
import { ChatbotModule } from "../chatbot/chatbot.module"

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        DashboardModule,
        ChatbotModule
    ],
    declarations: [
        LoginComponent
    ],
    bootstrap: [
        LoginComponent
    ]
})
export class LoginModule {}
