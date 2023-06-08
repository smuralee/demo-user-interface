# Demo User Interface

This project has been tested with [Angular CLI](https://github.com/angular/angular-cli) version
15.0.4.

![Demo UI](demo-form.png "Demo User Interface")

## Build and run the application

### For local build, test and deploy
```
npm install
npm run build
npm run test
npm run start
```
**Note:** 
* Replace the `apiEndpoint` [environment.prod.ts](./src/environments/environment.prod.ts) value as per your production environment
* Use `npm run build-prod` to use [environment.prod.ts](./src/environments/environment.prod.ts) configuration

### For container image creation
```
docker build -t demo-user-interface .
```

## Where are the artefacts?
* The build artifacts will be stored in the `dist/demo-ui-with-angular` directory

## Can I build it using AWS CodeBuild?
* Yes, included is an example for [buildspec.yml](./buildspec.yml)
