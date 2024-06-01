interface PointsData {
    points: number;
    address: string;
}
declare class PointsClient {
    private apiKey;
    private campaignId;
    private baseUrl;
    constructor(apiKey: string, campaignId: string);
    distribute(eventName: string, pointsData: PointsData, metadata?: {}): Promise<void>;
    getPoints(address: string): Promise<number>;
    getPointsByEvent(address: string, eventName: string): Promise<number>;
}
export default PointsClient;
