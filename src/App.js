import React from "react";
import { createRoot } from "react-dom/client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import ControlPanel from "./components/ControlPanel";

const API_KEY = "AIzaSyCGilcuxzDOZsUoAeeXkL1OLS8kS92kX6Y";

const App = () => (
  <div
    style={{
      minWidth: "100%",
      minHeight: "100%",
    }}
  >
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
      {/* <ControlPanel /> */}
    </APIProvider>
  </div>
);
export default App;

export function renderToDom(container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
