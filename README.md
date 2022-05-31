# About

[**The Wall App**](https://wall-app-web.vercel.app/) is an application where users can see awesome messages posted by the community members. The users can also register to the platform and start sharing their own thoughts on **The Wall**.


https://user-images.githubusercontent.com/36672867/169701012-b3208746-0b2b-410e-be8a-3f9173cab11b.mp4




# Tools
**The Wall** web was built using [ReactJS](https://reactjs.org/), a Javascript library that makes creating web applications fun and productive. Moreover, this projects uses libraries such as [Styled Components](https://styled-components.com/), [Axios](https://axios-http.com/) and [SWR](https://swr.vercel.app/).


# Getting started

Following the instructions down below you'll get a copy of the project, so you can run it from your local machine.

## Requirements
To run this project you must have:

- [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine. You can get these tools at https://nodejs.org and https://yarnpkg.com.

- [The Wall back-end](https://github.com/FelipeTomazEC/wall-app-backend) api running on your local machine. 


##  Installing

 1. Using the terminal, clone the repository to your local machine: `$ git clone https://github.com/FelipeTomazEC/wall-app-web.git`
 
 2. Enter the directory of the project: `$ cd wall-app-web`
 3. Install the dependencies: `$ yarn install` or  `$ yarn`
 4. Make a copy of the `example.env` file, and name it as `.env`: `$ cp example.env .env`
 5. Open the  `.env`  in an editor of your preference and edit the variables values.
 6. That's all. Now you can run it with the command:  `$ yarn start`

## Running with Docker
It's also possible to run the application on your local machine using Docker. In order to do that, you'll need [Docker](https://www.docker.com/get-started/) and [Docker Compose](https://docs.docker.com/compose/install/) installed. After installing these tools, do the following:

1. Make a copy of the **example.env** file, and name it as **.env**: `$ cp example.env .env`

2. Open the `.env` in an editor of your preference and edit the variables values.

3. Run Docker Compose command on the command line: `$ docker-compose up -d`

4. That's it. The Wall API should be available on http://localhost:3001/. 

> *P.S.: The 3001 is the PORT variable defined in .env file.*
