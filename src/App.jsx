import AppGen from "./AppGen";
import { WeatherProvider } from "./context/WeatherContext";
import "./style/style.css"

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <AppGen />
      </WeatherProvider>
    </div>
  );
}

export default App;
