import React from 'react';
import * as Sentry from "@sentry/react";

// If taking advantage of included instrumentation (highly recommended)
import { Integrations } from "@sentry/tracing";
// Or, if only manually tracing
// import * as _ from "@sentry/tracing"
// Note: You MUST import the package in some way for tracing to work


Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  
  // This enables included instrumentation (highly recommended), but is not
  // necessary for purely manual usage
  integrations: [new Integrations.BrowserTracing()],

  // To set a uniform sample rate
  tracesSampleRate: 0.2
});

class App extends React.Compsonent {
  render() {
    return (
          <div>
            <button
            className="btn btn-default"
            onClick={this.alert1()}>Button</button>
          </div>
    )
  }
  alert1() {
    throw new Error("Division By 0");
  }
}

export default App;
