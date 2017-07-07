# Sample Setup MySQL with Elastic Search #
> This is a demo Spring Boot Project with Maven for learn how to develop api's and frontend. It includes step by step structure from api's to frontend in all commits. To run this project you needs to install Java, MongoDb and NodeJS.

### What is this repository for? ###
This repo is for demo for front end and api's in backend using springs, MySQL, Angular.js.
Version 1.0

### How do I get set up only for api's? ###
- Create a new Spring starter project in [STS](https://spring.io/tools/sts/all "Spring Suite Tool").
- Choose Web, MySQL and Thymleaf.
- Select default java version and stable spring boot version.
- Finish, demo api's base ready and follow the structure in this demo api commit 'Initial Commit'
- From command line goto the project folder and run the following commands:
  
  ```mvn clean install
  mvn spring-boot:run```

- If no error in running the project then api's are ready to test from local host.

#### How do I get set up backend and frontend both? ####
- Follow the above api's steps for backend.
- Goto the project directory and make directory (like mkdir frontend).
- Goto frontend folder and run the below commands:
  ```npm init
  npm install --save-dev gulp
  cat package.json
  npm install gulp-connect --save-dev; npm install --save angular```

####How to debug spring project lint to line?####
- Run Command: Below command runs dev profile with debugging ```port 5090```

```mvn spring-boot:run -Drun.arguments="--spring.profiles.active=dev" -Drun.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5090"```

- Goto Debug Configurations, then right click on Remote Java Application and create a new file test_debug.
- Open test_debug set host as local host and port as ```5090```
- Place Break points on which you want to debug.
- Download tools for linux
  * [Robo Mongo](http://www.mediafire.com/download/cx2w03ha0p65gcb "Robo Mongo").
  * [Spring Tool](https://www.mediafire.com/?t1akk8m1v128kd3 "STS")
  * [Server Setup Guides](https://drive.google.com/open?id=0B8Nc-yTMB--QdVZQU1Z4T1B6SzQ "Ubuntu Setup Guide")
  * [Front End Directory](http://www.mediafire.com/download/7pvxv05012bxlz2/front-end.zip "Front End Directory")

####How do I talk to repo admin?####
- Blog: http://goyalzz.blogspot.in/
- Fb Id: https://www.facebook.com/goyalzz
- LinkedIn: https://in.linkedin.com/in/goyalzz
- Docker: https://hub.docker.com/r/goyalzz/
