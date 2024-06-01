import axios from 'axios';

interface PointsData {
  points: number;
  address: string;
}

class PointsClient {
  private apiKey: string;
  private campaignId: string;
  private baseUrl: string;

  constructor(apiKey: string, campaignId: string) {
    this.apiKey = apiKey;
    this.campaignId = campaignId;
    this.baseUrl =
      'https://point-issuer-utility-git-fe-e451a0-cryptodevs-projects-dda7668f.vercel.app';
  }

  async distribute(
    eventName: string,
    pointsData: PointsData,
    metadata = {},
  ): Promise<void> {
    try {
      const data = {
        eventName,
        pointsData,
        apiKey: this.apiKey,
        campaignId: this.campaignId,
        metadata,
      };
      const response = await axios.post(`${this.baseUrl}/api/point`, data);
      return response.data;
    } catch (error) {
      console.error('Error distributing points:', error);
    }
  }

  async getPoints(address: string): Promise<number> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/point`, {
        params: {
          address,
          apiKey: this.apiKey,
          campaignId: this.campaignId,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error getting points:', error);
      return 0;
    }
  }

  async getPointsByEvent(address: string, eventName: string): Promise<number> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/point`, {
        params: {
          address,
          eventName,
          apiKey: this.apiKey,
          campaignId: this.campaignId,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error getting points by event:', error);
      return 0;
    }
  }
}

export default PointsClient;
