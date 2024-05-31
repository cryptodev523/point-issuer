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
const pointsClient_1 = __importDefault(require("../src/pointsClient"));
const apiKey = 'test-api-key';
const campaignId = 'test-campaign-id';
const address = '0x1234567890123456789012345678901234567890';
const eventName = 'test-event';
const pointsData = {
    points: 100,
    address,
};
describe('PointsClient', () => {
    let pointsClient;
    beforeEach(() => {
        pointsClient = new pointsClient_1.default(apiKey, campaignId);
    });
    it('should initialize with apiKey and campaignId', () => {
        expect(pointsClient).toBeInstanceOf(pointsClient_1.default);
        expect(pointsClient).toHaveProperty('apiKey', apiKey);
        expect(pointsClient).toHaveProperty('campaignId', campaignId);
    });
    it('should distribute points', () => __awaiter(void 0, void 0, void 0, function* () {
        const spy = jest.spyOn(pointsClient, 'distribute');
        yield pointsClient.distribute(eventName, pointsData);
        expect(spy).toHaveBeenCalledWith(eventName, pointsData);
    }));
    it('should get points for an address', () => __awaiter(void 0, void 0, void 0, function* () {
        const spy = jest.spyOn(pointsClient, 'getPoints');
        const result = yield pointsClient.getPoints(address);
        expect(spy).toHaveBeenCalledWith(address);
        expect(result).toBe(0);
    }));
    it('should get points for an address filtered by event', () => __awaiter(void 0, void 0, void 0, function* () {
        const spy = jest.spyOn(pointsClient, 'getPointsByEvent');
        const result = yield pointsClient.getPointsByEvent(address, eventName);
        expect(spy).toHaveBeenCalledWith(address, eventName);
        expect(result).toBe(0);
    }));
});
