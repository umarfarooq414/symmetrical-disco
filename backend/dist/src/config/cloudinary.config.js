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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryConfigService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const stream_1 = require("stream");
let CloudinaryConfigService = class CloudinaryConfigService {
    constructor() {
        cloudinary_1.v2.config({
            cloud_name: process.env.CLOUD_NAME || 'dsnukqjun',
            api_key: process.env.API_KEY || '262926798515183',
            api_secret: process.env.API_SECRET || 'IaQ8SP4sVGXnxyxlddaLQS67wXM',
        });
    }
    async uploadImage(file, folderName) {
        return new Promise((resolve, reject) => {
            const streamify = new stream_1.Readable();
            streamify._read = () => {
                streamify.push(file.buffer);
                streamify.push(null);
            };
            const uploadOptions = {
                folder: `fns/${folderName}`,
            };
            streamify.pipe(cloudinary_1.v2.uploader.upload_stream(uploadOptions, (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            }));
        });
    }
};
CloudinaryConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CloudinaryConfigService);
exports.CloudinaryConfigService = CloudinaryConfigService;
//# sourceMappingURL=cloudinary.config.js.map