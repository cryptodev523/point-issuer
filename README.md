# PointsIssuer

PointsIssuer is a TypeScript SDK and Next.js application that allows projects to issue points to their users for off-chain actions. 
The SDK provides setter and getter functions for points management and stores the data in a PostgreSQL database. 
The project includes an API endpoint for registering API keys and a simple frontend utility for manually distributing points.

## About SDK

[Check the sdk level README](https://github.com/cryptodev523/point-issuer/blob/main/sdk/README.md).

## Getting Started

### Prerequisites

- Node.js (>=18.x)
- Vercel account (for deployment & db)

### Installation

1. Clone the repository:
```bash
git clone git@github.com:cryptodev523/point-issuer.git
cd point-issuer
```

2. Install dependencies:
```bash
cd utility
npm install
```

3. Create a new PostgreSQL on Vercel and connect the project.
4. Create a `.env.local` file in the `utility` folder with database connection details

### Running the Application

1. Start the utility:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000` to access the frontend utility.

### Usage

#### 1. Registering an API key

To register an API key for your project, send a POST request to `/api/project` with your project details:

```bash
curl -X POST http://localhost:3000/api/project -d '{"name": "Your Project Name"}'
```

Record the project id from the `/project` endpoint response.

Send a POST request to `/api/credential` with the projectId.

```bash
curl -X POST http://localhost:3000/api/credential -d '{"projectId": "Your Project Id"}'
```

#### 2. Run the utility.

Run the utility Next.js project with the following command.
```bash
npm run dev
```

Go to 'http://localhost:3000' and input the api key, event name, number of points, address

![image](https://github.com/cryptodev523/point-issuer/assets/3051782/7ce24bfa-1c0d-43cf-8cb9-74af84af278d)


### Deployment

Deploy the application to Vercel:
1. Connect your GitHub repository to Vercel.
2. Set up environment variables in Vercel with your database connection details.
3. Deploy the project.
