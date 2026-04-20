import { useState } from "react";
import HomePage from "./pages/HomePage";
import CheckInPhoneNumber from "./pages/CheckInPhoneNumber";
import CreateNewProfile from "./pages/CreateNewProfile";
import SelectService from "./pages/SelectService";
import SelectWorker from "./pages/SelectWorker";
import SelectPoints from "./pages/SelectPoints";

type Screen =
  | "home"
  | "checkin"
  | "createProfile"
  | "selectService"
  | "selectWorker"
  | "selectPoints";

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profile, setProfile] = useState({ name: "", email: "", phone: "" });
  const [services, setServices] = useState<string[]>([]);
  const [workers, setWorkers] = useState<string[]>([]);

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
        onConfirm={(newProfile) => {
          setProfile(newProfile);
          setScreen("selectService");
        }}
      />
    );
  }

  if (screen === "selectService") {
    return (
      <SelectService
        onBack={() => setScreen("createProfile")}
        onConfirm={(selectedServices) => {
          setServices(selectedServices);
          setScreen("selectWorker");
        }}
      />
    );
  }

  if (screen === "selectWorker") {
    return (
      <SelectWorker
        onBack={() => setScreen("selectService")}
        onConfirm={(selectedWorkers) => {
          setWorkers(selectedWorkers);
          setScreen("selectPoints");
        }}
      />
    );
  }

  if (screen === "selectPoints") {
    return (
      <SelectPoints
        onBack={() => setScreen("selectWorker")}
        onConfirm={(pointsToRedeem) => {
          console.log("Create profile:", profile);
          console.log("Selected services:", services);
          console.log("Selected workers:", workers);
          console.log("Selected points:", pointsToRedeem);
          setScreen("home");
        }}
      />
    );
  }

  return <HomePage onCustomerCheckIn={() => setScreen("checkin")} />;
}

export default App;