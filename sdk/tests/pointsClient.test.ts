import PointsClient from '../src/pointsClient';

const apiKey = 'test-api-key';
const campaignId = 'test-campaign-id';
const address = '0x1234567890123456789012345678901234567890';
const eventName = 'test-event';
const pointsData = {
  points: 100,
  address,
};

describe('PointsClient', () => {
  let pointsClient: PointsClient;

  beforeEach(() => {
    pointsClient = new PointsClient(apiKey, campaignId);
  });

  it('should initialize with apiKey and campaignId', () => {
    expect(pointsClient).toBeInstanceOf(PointsClient);
    expect(pointsClient).toHaveProperty('apiKey', apiKey);
    expect(pointsClient).toHaveProperty('campaignId', campaignId);
  });

  it('should distribute points', async () => {
    const spy = jest.spyOn(pointsClient, 'distribute');
    await pointsClient.distribute(eventName, pointsData);
    expect(spy).toHaveBeenCalledWith(eventName, pointsData);
  });

  it('should get points for an address', async () => {
    const spy = jest.spyOn(pointsClient, 'getPoints');
    const result = await pointsClient.getPoints(address);
    expect(spy).toHaveBeenCalledWith(address);
    expect(result).toBe(0);
  });

  it('should get points for an address filtered by event', async () => {
    const spy = jest.spyOn(pointsClient, 'getPointsByEvent');
    const result = await pointsClient.getPointsByEvent(address, eventName);
    expect(spy).toHaveBeenCalledWith(address, eventName);
    expect(result).toBe(0);
  });
});
