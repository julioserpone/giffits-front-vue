# Test Giffits Frontend

## Project setup
```
yarn install
```

### Backend Server Configuration
Before starting the frontend web environment, we must ensure the server domain of the backend. By default, it is defined at http://localhost:8000. If you are using another domain, you must modify the main.js file and adjust the value of the following line:
```
Vue.prototype.$hostname = 'http://localhost:8000';
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### Test App
Navigate to http://localhost:8080/ to open application

