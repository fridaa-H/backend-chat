import { ChatService } from "./gpt.service";
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    talkToGPT(content: string): Promise<string>;
}
