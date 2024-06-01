# Point-Issuer SDK

This Typescript SDK allows clients to issue points to their users. 
It provides flexibility to issue points for off-chain actions.

## Installation

Install the SDK with npm:

```bash
npm install points-issuer
```

## Usage

First, import the `PointsClient` class:

```js
import {PointsClient} from "point-issuer";
```

Then, create a new instance of the `PointsClient`.

```js
const sdkClient = new PointsClient('your-api-key', 'your-campaign-id');
```

### Distribute Points

To distribute points, use the `distribute` method:
```js
sdkClient.distribute('event-name', { points: 100, address: '0x...' }, { metadataKey: 'metadataValue' });
```

### Get Points by address

To get the points for an address, use the `getPoints` method:

```js
const points = await sdkClient.getPoints('0x...');
console.log(points);
```

### Get Points by event & address

To get the points for an address by event, use the `getPointsByEvent` method:

```js
const points = await pointsClient.getPointsByEvent('0x...', 'event-name');
```

### Error Handling
If an error occurs while making a request, the SDK will log the error message to the console.

