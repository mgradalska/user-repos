# user-repos

Application created for fetching given username repositories and branches.

## Run application

### In docker container

Required tools:
- docker

Build docker image:

`docker build . -t user-repos`

Run container:

`docker run -p 4200:80 user-repos:latest`

Now application is available under `localhost:4200` address in your browser.

### Locally
Required tools:
- npm
- angular CLI

Install packages:

`npm install`

Run server:

`ng serve`

Now application is available under `localhost:4200` address in your browser.


