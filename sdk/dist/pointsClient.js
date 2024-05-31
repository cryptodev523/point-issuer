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
Object.defineProperty(exports, "__esModule", { value: true });
class PointsClient {
    constructor(apiKey, campaignId) {
        this.apiKey = apiKey;
        this.campaignId = campaignId;
    }
    distribute(eventName, pointsData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //
            }
            catch (error) {
                console.error('Error distributing points:', error);
            }
        });
    }
    getPoints(address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //
                return 0;
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
                //
                return 0;
            }
            catch (error) {
                console.error('Error getting points by event:', error);
                return 0;
            }
        });
    }
}
exports.default = PointsClient;
