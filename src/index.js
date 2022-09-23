import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';

Sentry.init({
    dsn: "https://5738261d2fc24fd995eea5bdc245a05e@o1420661.ingest.sentry.io/6765801",
    integrations: [new BrowserTracing({
        tracingOrigins: ["localhost", "catfact.ninja", /^\//],

    })],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
