interface PointsData {
  points: number;
  address: string;
}

class PointsClient {
  private apiKey: string;
  private campaignId: string;

  constructor(apiKey: string, campaignId: string) {
    this.apiKey = apiKey;
    this.campaignId = campaignId;
  }

  async distribute(eventName: string, pointsData: PointsData): Promise<void> {
    try {
      //
    } catch (error) {
      console.error('Error distributing points:', error);
    }
  }

  async getPoints(address: string): Promise<number> {
    try {
      //
      return 0;
    } catch (error) {
      console.error('Error getting points:', error);
      return 0;
    }
  }

  async getPointsByEvent(address: string, eventName: string): Promise<number> {
    try {
      //
      return 0;
    } catch (error) {
      console.error('Error getting points by event:', error);
      return 0;
    }
  }
}

export default PointsClient;
