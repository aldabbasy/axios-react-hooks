# axios-react-hooks
axios-react-hooks is a custom hooks library for consuming restful APIs using axios

## How to Use
there is two hooks in this library:
* `useAxiosGet` which can be used as below for `GET` requests:
```jsx
const {data, loading, refetch} = useAxiosGet({endpoint: 'your/api/endpoint/here', headers: {'header-name': 'header-value'}});
```

* `useAxiosPost` which can be used as below for `POST` requests:
```jsx
const [sendRequest, {data, loading}] = useAxiosGet({endpoint: 'your/api/endpoint/here', headers: {'header-name': 'header-value'}});
...
sendRequest(body);
```
