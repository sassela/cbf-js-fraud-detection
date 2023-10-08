# Coding Black Females Academy: Fraud detection app

## Preview the application
The application is deployed via Heroku to https://js-fraud-detection-7db71b7874dc.herokuapp.com/. It's updated and redeployed on changes to the `main` branch.

### Prerequisites
* Node.js v20.0.0+ and npm. Both are downloadable from https://nodejs.org/en
* request access to the `.env` file, containing ElasticSearch Cloud credentials from [@sassela](https://github.com/sassela)

### Getting started
From the `cbf-js-fraud-detection` directory...
1. start the application: `npm run dev`
2. open your browser to view the application at http://localhost:3000

### Testing
From the `cbf-js-fraud-detection` directory...

####  run server tests
```bash
cd server
npm test # includes test coverage
```
####  run client tests
```bash
cd client
npm test

npm run test:coverage # to see test coverage
```

## Project documentation
* [Requirements](Requirements.md)
* [Project board](https://github.com/users/sassela/projects/2/views/1)
* [Architecture diagram](architecture-diagram.png)
