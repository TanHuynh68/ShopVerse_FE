import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "@/components/ui/sonner"
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster/>
      </PersistGate>
    </Provider>
  );
}

export default App;
