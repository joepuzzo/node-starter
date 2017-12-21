# Website Api

## Getting started

#### Installing
Run an npm install in the root of the project directory to get all of the dependencies.

`npm install`

Ok you're done installing things :)

#### Build
Run the following command to build the project.

`npm run build`

Note: this will build a docker image called `joepuzzo/node-starter`.

#### Run
Run the following command to start up the server on `http://localhost:4040` and `https://localhost:4443`

`npm start`

Note: this will create and run a docker container from the image that was created after running `npm run build`.

#### Test
Run the following command to run the tests.

`npm test`

This should run all our tests and should display the results in the terminal.

---

## Configuration

### Introduction

This application can be configured through configuration files under the `config/env` directory. For example, if you would like the application to log `debug` logs in production, you would modify the prod configuration with `log: 'debug'`

### Log

#### Details:

This application is configured to use a logger for logging out all information ( debug, info, error, etc ).  

#### Parameters:

`log.console`: a `winston` configuration object. See Winston documentation for additional details.

#### Example Env Config

```
log: {
  console: {
    level: "debug",
    timestamp: true,
    json: true,
  }
},
```

### Zipkin

#### Details:

Zipkin is a distributed tracing system that allows you to track the flow of actions throughout a microservice architecture. This app has been configured to add trace information to each log message and optionally send trace data to a zipkin server.

#### Parameters:

`zipkin.recorder`: one of three options `none`, `console`, or `batch`. `none` will configure zipkin to do nothing extra, `console` will add log out zipkin details using the logger, and `batch` will configure zipkin to send zipkin details to a server

`zipkin.logger.endpoint`: url to a zipkin server. Note, this is only used if `recorder` is set to `batch`.


#### Example Env Config

```
zipkin: {
  logger: {
    endpoint: 'http://zipkin:9411/api/v1/spans',
  },
  recorder: 'none'
}
```

---

## Docker Compose

### Disclaimer:
This is temporary stuff ( so you can play with this example and zipkn ). You should actually have a compose file for your entire system that will run everything that you need.

### Motivation
To build and start up multiple docker containers. Currently, this compose file will build the `node-starter` container and a `zipkin` container. This will allow you to test the node-starter alongside an instance of zipkin to see trace information.

#### Build & Start

##### Build

This compose file uses two images, `joepuzzo/node-starter` and `openzipkin/zipkin`. In order to run the compose file, you must first make sure you have the images locally on your machine.
If you simply follow the instructions below, docker will attempt to start up the services. When docker does this, it will first look to see if you have the images installed on your machine.
If docker finds the images, it will create and start the docker containers. If docker does not find them locally, it will attempt to install them from dockers hub. So, this means that the first
time you run this command it will be slow, as its downloading stuff. 

##### Start 

Run the following command to start the website-api image and a zipkin server image.

`npm run start:compose`

All the npm script above is doing is running `docker-compose up`. IMPORTANT NOTE: if you make any changes to the code you will need to rebuild the docker image locally.
To do this simply follow the build instructions from the Getting Started section above. This will rebuild the `joepuzzo/node-starter` image. Once you have done this simply re-run
`npm run start:compose` or `docker-compose up` and it will restart the node server!
