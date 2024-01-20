export declare class TextToSpeechService {
    private client;
    constructor();
    synthesizeSpeech(requestBody: any): Promise<string | Uint8Array>;
}
