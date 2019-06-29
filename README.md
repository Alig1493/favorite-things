# favorite-things
The front end portion containing the bare minimum (albeit hacky) 
code to serve a single page application for the 
[favorite things backend](https://github.com/Alig1493/favorites-backend) 
django code.

### Disclaimer
Please first accept the certificate provided by the backend portion of the code
by first going to the backend site deployed [here](https://13.235.4.179/). This is 
important for the front end code to conncet and work with the backend.

### Deployment
Using netlify
Link: https://vibrant-lewin-b97ee2.netlify.com/
Login credentials:
* username: admin
* password: admin12345

P.S: This application isn't well built in the sense that it will 
redirect to the list page even if the response status after submitting the
form is anything other than 201/200

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


