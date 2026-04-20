import { useState } from "react";
import "./../styles/SelectService.css";

type SelectServiceProps = {
  onBack: () => void;
  onConfirm: (services: string[]) => void;
};

const SERVICE_OPTIONS = ["MANICURE", "PEDICURE", "FULL SET", "WAXING"];

export default function SelectService({ onBack, onConfirm }: SelectServiceProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((selected) => selected !== service)
        : [...current, service]
    );
  };

  return (
    <div className="selectService">
      <div className="container">
        <div className="serviceCard">
          <h1 className="title">SELECT SERVICE</h1>

          <div className="serviceOptions">
            {SERVICE_OPTIONS.map((service) => (
              <button
                key={service}
                type="button"
                className={`serviceButton ${selectedServices.includes(service) ? "selected" : ""}`}
                onClick={() => toggleService(service)}
              >
                {service}
              </button>
            ))}
          </div>

          <div className="buttonRow">
            <button type="button" className="buttonBack" onClick={onBack}>
              ← BACK
            </button>

            <div className="buttonRowSpacer" aria-hidden="true" />

            <button
              type="button"
              className="button"
              onClick={() => onConfirm(selectedServices)}
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
