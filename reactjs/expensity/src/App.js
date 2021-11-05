import AppRouters from "./routers/AppRouters"
import Provider from "./context/Context";
function App() {

  return (
    <Provider>
      <AppRouters />
    </Provider>
  );
}

export default App;
