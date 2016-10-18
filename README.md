# redux-persist-example
The example of redux-persist

## Basic Usage
Just few lines of code in src/store.js will store your app state in storage(eg: localStorage)
```js
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, logger),
  autoRehydrate(),
  devTools({ hostname: 'localhost', port: 5678 })
));

persistStore(store, { storage: localForage });

```
Then, run the below command to start demo, and visit http://localhost:3000/
```shell
npm start
```
Open Chrome DevTools -> Application -> IndexedDB, you will see all your app states was be stored in storage(IndexedDB):![db](https://github.com/pingyuanChen/redux-persist-example/blob/master/db.png)

Then, open the DevTools Console, you will see how to restore your local storage to app state
![console](https://github.com/pingyuanChen/redux-persist-example/blob/master/console.png)

## Advanced Usage
### Custom handle REHYDRATE action in reducer

## Pitfalls