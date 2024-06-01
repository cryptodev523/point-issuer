"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class PointsClient {
    constructor(apiKey, campaignId) {
        this.apiKey = apiKey;
        this.campaignId = campaignId;
        this.baseUrl =
            'https://point-issuer-utility-git-fe-e451a0-cryptodevs-projects-dda7668f.vercel.app';
    }
    distribute(eventName_1, pointsData_1) {
        return __awaiter(this, arguments, void 0, function* (eventName, pointsData, metadata = {}) {
            try {
                if (!pointsData.address.startsWith('0x')) {
                    throw new Error('Invalid address');
                }
                const data = {
                    eventName,
                    pointsData,
                    apiKey: this.apiKey,
                    campaignId: this.campaignId,
                    metadata,
                };
                const response = yield axios_1.default.post(`${this.baseUrl}/api/point`, data);
                return response.data;
            }
            catch (error) {
                console.error('Error distributing points:', error);
            }
        });
    }
    getPoints(address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!address.startsWith('0x')) {
                    throw new Error('Invalid address');
                }
                const response = yield axios_1.default.get(`${this.baseUrl}/api/point`, {
                    params: {
                        address,
                        apiKey: this.apiKey,
                        campaignId: this.campaignId,
                    },
                });
                return response.data;
            }
            catch (error) {
                console.error('Error getting points:', error);
                return 0;
            }
        });
    }
    getPointsByEvent(address, eventName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!address.startsWith('0x')) {
                    throw new Error('Invalid address');
                }
                const response = yield axios_1.default.get(`${this.baseUrl}/api/point`, {
                    params: {
                        address,
                        eventName,
                        apiKey: this.apiKey,
                        campaignId: this.campaignId,
                    },
                });
                return response.data;
            }
            catch (error) {
                console.error('Error getting points by event:', error);
                return 0;
            }
        });
    }
}
exports.default = PointsClient;
