import { Injectable } from "@nestjs/common";
import OpenAI from "openai";

@Injectable()
export class ChatService {
    private openai: OpenAI;
    private conversationHistory: {
        role: 'function' | 'user' | 'system' | 'assistaant';
        content: string;
    } [] = [];

    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    async chatWithGPT(content: string){
        this.conversationHistory.push({
            role: 'user',
            content: content,
        });
        const chatCompletition = await this.openai.chat.completions.create({
            messages: [
                {role: 'system', content: 'you are a helful assistant'},
                //...this.conversationHistory,
            ],
            model: 'gpt-3.5-turbo',
        });

        this.conversationHistory.push({
            role: "assistaant",
            content: chatCompletition.choices[0].message.content,
        });

        return chatCompletition.choices[0].message.content;
    }
}