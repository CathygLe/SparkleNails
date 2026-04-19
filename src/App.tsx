import { useState } from "react";
import HomePage from "./pages/HomePage";
import CheckInPhoneNumber from "./pages/CheckInPhoneNumber";

type Screen = "home" | "checkin";

function App() {
  const [screen, setScreen] = useState<Screen>("home");

  if (screen === "checkin") {
    return <CheckInPhoneNumber onBack={() => setScreen("home")} />;
  }

  return <HomePage onCustomerCheckIn={() => setScreen("checkin")} />;
}

export default App;