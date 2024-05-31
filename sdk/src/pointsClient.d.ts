interface PointsData {
    points: number;
    address: string;
}
declare class PointsClient {
    private apiKey;
    private campaignId;
    constructor(apiKey: string, campaignId: string);
    distribute(eventName: string, pointsData: PointsData): Promise<void>;
    getPoints(address: string): Promise<number>;
    getPointsByEvent(address: string, eventName: string): Promise<number>;
}
export default PointsClient;
