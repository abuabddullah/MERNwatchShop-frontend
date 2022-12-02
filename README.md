### Redux RTK Query (MERN Watch Shop)

> > Redux **RTK Query** মূলত redux tool kit এরই একটা advanced feature so এটা use করতে হলে পূর্বে বর্ণনা অনুযায়ী **redux tool kit** implemented থাকতে হবে
>
> > source: https://redux-toolkit.js.org/rtk-query/api/createApi

## Redux RTK Query (fetching All Posts By GET API request)

1. steps to fetch all products by RTK Query
   > > frontend\src\ **_features_** folder এ frontend\src\features\ **_productsAPI.js_** file নামের একটা file বানাবো
   >
   > > প্রথমে **createApi, fetchBaseQuery** কে import করে নিব
   >
   > > **createApi** এর সাহায্যে **_productsAPI_** নামের একটা function বানাব যেটা পাশাপাশি inline exported হবে
   > >
   > > > এই function এর ভিতরে **_reducerPath_** key এর value হিসেবে **_productsAPI_** ই দিতে হবে
   > >
   > > > **_baseUrl_** এর value হিসবে deploy করার আগপর্যন্ত আমাদের lolcalHost এর **base link** হবে
   > >
   > > > তারপর **_endspoints_** এর callback function ভিতরে একটা custom key দিব **_getAllProducts_** নামের [**এটা মুলত কাজের উপরে ভিত্তি করে naming করতে হবে**]এর ভিতরে **query** তে **products** লিখব [**এটা মূলত fetch করে কি পেতে চাচ্ছি তা লিখে**]
   >
   > > তারপর নিচে একটা **_productsAPI_** এর সাহায্যে একটা custom hook [**যা কাজের উপর ভিত্তি করে naming করেনিতে হবে**] তা inline export করব

```http
filePath: frontend\src\features\productsAPI.js
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsAPI = createApi({ // x
  reducerPath: "productsAPI", // x
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }), // x
  endpoints: (builder) => ({
    getAllProducts: builder.query({ // x
      query: () => `products`, // x
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productsAPI;


```

2. steps to fetch all products by RTK Query
   > > frontend\src\ **_index.js_** file এ প্রথমে **_productsAPI_** কে import করে নিব তারপর
   >
   > > store এর ভিতরে নিচের মতকরে **_reducerPath & middleweare_** বানাব
   > >
   > > > খেয়াল রাখতে হবে যে **middleweare** বানানোর সময় যেন **_getDefaultMiddleware_** টা যাতে **_@reduxjs/toolkit_** থেকে auto import হয়ে না যায়

```http
filePaths: frontend\src\index.js
""""""""""""""""""""""""""""""
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { productsAPI } from "./features/productsAPI";
import productsReducer, { fetchProducts } from "./features/productsSlice";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsAPI.reducerPath]: productsAPI.reducer, // x
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware), // x
});

store.dispatch(fetchProducts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


```

5. এবার frontend\src\Components\Home\ **_Home.js_** file এ **_useGetAllProductsQuery_** কে import করে নিয়ে Home component এর ভিতরে একে destructure করে আমাদের কাংক্ষিত **_{ data, error, isLoading }_** products কে পেয়ে যাব

```http
filePath: frontend\src\Components\Home\Home.js
"""""""""""""""""""""""""""""""""""""""""""""""""
import React from 'react';
import { useGetAllProductsQuery } from './../../features/productsAPI';

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    return (
        <div>
            its <b>Home</b> page
        </div>
    );
};

export default Home;
```

4. এবার frontend এবং backend এর both terminal run আছে কিনা ensure করে নিব তাহলেই browser এর **_Redux Dev Tool_** extension এ আমরা আমাদের কাংক্ষিত data পেয়ে যাব
