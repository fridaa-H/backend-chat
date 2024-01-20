import { TextToSpeechService } from "./text-to-speech.service";
import { Response } from "express";
import { ChatService } from "./gpt.service";
export declare class TextToSpeechController {
    private readonly textToSpeechService;
    private readonly chatService;
    constructor(textToSpeechService: TextToSpeechService, chatService: ChatService);
    synthesize(text: string, res: Response): Promise<void>;
}
