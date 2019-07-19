# favorite-things
The front end portion containing the bare minimum (albeit hacky) 
code to serve a single page application for the 
[favorite things backend](https://github.com/Alig1493/favorites-backend) 
django code.

### Deployment
Deployed to an AWS server instance (nano) using dokku PaaS
Link: http://13.235.4.179:3000/

Login credentials:
* username: admin
* password: admin12345

P.S: This application isn't well built in the sense that it will 
redirect to the list page even if the response status after submitting the
form is anything other than 201/200. In case the jwt expires please go to the
[login page](http://13.235.4.179:3000/login) manually to get a new token.

Pointers:
- Double click on the category input field to see pre-defined categories
- The category input field will also accept new categories as text and will be created upon submission.
  That can be seen on the next redirect.
- If a bad request is sent to the backend then you will be redirected to the list page,
  however you won't be seeing the newly created objects 

## Project setup
```
npm install
```
Used [this history and push states](https://www.netlify.com/docs/redirects/)
guide for router settings when my single page vue app on netlify.

Used [bootstrap-vue for templating](https://bootstrap-vue.js.org/docs/)


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


