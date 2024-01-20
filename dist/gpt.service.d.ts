export declare class ChatService {
    private openai;
    private conversationHistory;
    constructor();
    chatWithGPT(content: string): Promise<string>;
}
