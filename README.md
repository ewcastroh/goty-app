# GotyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Deploy in Github Pages

### Without installing external packages

1. Add next scripts in `package.json` file into the scripts section:
   Mac/Linux
  ```json
  {
    "scripts": {
      "delete:docs": "rm -r -f docs",
      "create:docs": "mkdir docs",
      "copy:dist": "cp -R -u dist/$npm_package_name/* ./docs -f",
      "build:href": "ng build --base-href ./",
      "build:github": "npm run delete:docs && npm run build:href && npm run create:docs && npm run copy:dist",
      "build:github:push": "npm run build:github && git add . && git commit -m 'Preparing docs for Github pages deployment.' && git push"
    }
  }
  ```
  Windows
  ```json
  {
    "scripts": {
      "delete:docs": "rm -r -f docs",
      "create:docs": "mkdir docs",
      "copy:dist": "cp -R -u dist/%npm_package_name%/* ./docs -f",
      "build:href": "ng build --base-href ./",
      "build:github": "npm run delete:docs && npm run build:href && npm run create:docs && npm run copy:dist",
      "build:github:push": "npm run build:github && git add . && git commit -m \"Preparing docs for Github pages deployment.\" && git push"
    }
  }
  ```
2. Run next command in shell
  ```shell
  npm run build:github
  ```
3. Add new changes to repository and push them to Github
  1. `git add .`
  2. `git commit -m "Preparing docs for Github pages deployment."`
  3. `git push`

4. Go to the Github repository. In this case [goty-app](https://github.com/ewcastroh/goty-app).
5.  Go to Settings option.
6. Go to Pages option.
7. Select next options:
   1. Source: `Deploy from a branch`
   2. Branch: `main`
   3. Folder: `/docs`
   4. Click on save button

8. In order to check deployment go to the repository. In this case [goty-app](https://github.com/ewcastroh/goty-app).
9. Go to Actions option.
10. A new view will show the deployment process, then the application will be deployed in a new URL like https://ewcastroh.github.io/goty-app/


### Installing external packages

1. Install `copyfiles` using command below
  ```shell
  npm i copyfiles --save-dev
  ```
2. Install `del-cli` using command below
  ```shell
  npm i del-cli --save-dev
  ```
3. Add next scripts in `package.json` file into the scripts section:
   Mac/Linux
  ```json
  {
    "scripts": {
      "delete:docs": "del docs",
      "copy:dist": "copyfiles dist/$npm_package_name/* ./docs -f",
      "build:href": "ng build --base-href ./",
      "build:github": "npm run delete:docs && npm run build:href && npm run copy:dist",
    }
  }
  ```
  Windows
  ```json
  {
    "scripts": {
      "delete:docs": "del docs",
      "copy:dist": "copyfiles dist/%npm_package_name%/* ./docs -f",
      "build:href": "ng build --base-href ./",
      "build:github": "npm run delete:docs && npm run build:href && npm run copy:dist",
    }
  }
  ```
4. Follow steps 2-10 likewise previous section.

