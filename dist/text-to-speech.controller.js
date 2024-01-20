"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechController = void 0;
const common_1 = require("@nestjs/common");
const text_to_speech_service_1 = require("./text-to-speech.service");
const gpt_service_1 = require("./gpt.service");
let TextToSpeechController = class TextToSpeechController {
    constructor(textToSpeechService, chatService) {
        this.textToSpeechService = textToSpeechService;
        this.chatService = chatService;
    }
    async synthesize(text, res) {
        try {
            const gptResponse = await this.chatService.chatWithGPT(text);
            const request = {
                input: { text: gptResponse },
                voice: {
                    languageCode: 'en-US',
                    name: 'en-US-Wavenet-F',
                    ssmlGender: 'FEMALE',
                },
                audioConfig: { audioEncoding: 'MP3' },
            };
            const audioContent = await this.textToSpeechService.synthesizeSpeech(request);
            res.setHeader('Content-Type', 'audio/mpeg');
            res.end(audioContent);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('An error ocurred while synthesizing speech.');
        }
    }
};
exports.TextToSpeechController = TextToSpeechController;
__decorate([
    (0, common_1.Post)('synthesize'),
    __param(0, (0, common_1.Body)('text')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TextToSpeechController.prototype, "synthesize", null);
exports.TextToSpeechController = TextToSpeechController = __decorate([
    (0, common_1.Controller)('text-to-speech'),
    __metadata("design:paramtypes", [text_to_speech_service_1.TextToSpeechService,
        gpt_service_1.ChatService])
], TextToSpeechController);
//# sourceMappingURL=text-to-speech.controller.js.map