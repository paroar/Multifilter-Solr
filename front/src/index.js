import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { FiltersProvider } from './context/filters/filters'
import './index.scss'


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);