import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ChatbotRoutingModule} from "./chatbot.routing";
import {ChatBotComponent} from "./chatbot.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChatbotRoutingModule
    ],
    declarations: [
        ChatBotComponent
    ],
    bootstrap: [
        ChatBotComponent
    ]
})
export class ChatbotModule {}
