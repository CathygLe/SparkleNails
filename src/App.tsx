import { useState } from "react";
import HomePage from "./pages/HomePage";
import CheckInPhoneNumber from "./pages/CheckInPhoneNumber";
import CreateNewProfile from "./pages/CreateNewProfile";
import SelectService from "./pages/SelectService";
import SelectWorker from "./pages/SelectWorker";
import SelectPoints from "./pages/SelectPoints";
import HistoryPage, { type VisitRecord } from "./pages/HistoryPage";

type Screen =
  | "home"
  | "checkin"
  | "createProfile"
  | "selectService"
  | "selectWorker"
  | "selectPoints"
  | "history";

function getPstDateLabel(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profile, setProfile] = useState({ name: "", email: "", phone: "" });
  const [services, setServices] = useState<string[]>([]);
  const [workers, setWorkers] = useState<string[]>([]);
  const [visits, setVisits] = useState<VisitRecord[]>([]);

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
          const now = new Date();
          const visit: VisitRecord = {
            id: `${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
            name: profile.name || "Walk-in Client",
            phone: profile.phone || phoneNumber,
            dateLabel: getPstDateLabel(now),
            timestampMs: now.getTime(),
            workers,
            services,
            points: pointsToRedeem,
          };

          setVisits((current) => [visit, ...current]);
          console.log("Create profile:", profile);
          console.log("Selected services:", services);
          console.log("Selected workers:", workers);
          console.log("Selected points:", pointsToRedeem);
          setScreen("home");
        }}
      />
    );
  }

  if (screen === "history") {
    return <HistoryPage visits={visits} onBack={() => setScreen("home")} />;
  }

  return (
    <HomePage
      onCustomerCheckIn={() => setScreen("checkin")}
      onHistory={() => setScreen("history")}
    />
  );
}

export default App;