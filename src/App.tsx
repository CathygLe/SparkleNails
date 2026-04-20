import { useState } from "react";
import HomePage from "./pages/HomePage";
import CheckInPhoneNumber from "./pages/CheckInPhoneNumber";
import CreateNewProfile from "./pages/CreateNewProfile";

type Screen = "home" | "checkin" | "createProfile";

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [phoneNumber, setPhoneNumber] = useState("");

  if (screen === "checkin") {
    return (
      <CheckInPhoneNumber
        onBack={() => setScreen("home")}
        onConfirm={(phone) => {
          setPhoneNumber(phone);
          setScreen("createProfile");
        }}
      />
    );
  }

  if (screen === "createProfile") {
    return (
      <CreateNewProfile
        phoneNumber={phoneNumber}
        onBack={() => setScreen("checkin")}
        onConfirm={(profile) => {
          console.log("Create profile:", profile);
          setScreen("home");
        }}
      />
    );
  }

  return <HomePage onCustomerCheckIn={() => setScreen("checkin")} />;
}

export default App;