import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ChatBotComponent } from './chatbot.component';

const ChatbotRoutes: Route[] = [
    {
        path: 'chatbot',
        component: ChatBotComponent
    },
];

export const ChatbotRoutingModule: ModuleWithProviders = RouterModule.forChild(ChatbotRoutes);
