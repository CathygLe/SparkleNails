import { useState } from "react";
import "./../styles/SelectWorker.css";

type SelectWorkerProps = {
  onBack: () => void;
  onConfirm: (workers: string[]) => void;
};

const WORKER_OPTIONS = ["HELEN", "LINDA", "TRACY", "EMMA", "JOYCE", "KAREN", "LISA", "SUSAN", "TERESA", ];

export default function SelectWorker({ onBack, onConfirm }: SelectWorkerProps) {
  const [selectedWorkers, setSelectedWorkers] = useState<string[]>([]);

  const toggleWorker = (worker: string) => {
    setSelectedWorkers((current) =>
      current.includes(worker)
        ? current.filter((selected) => selected !== worker)
        : [...current, worker]
    );
  };

  return (
    <div className="selectWorker">
      <div className="container">
        <div className="workerCard">
          <h1 className="title">SELECT WORKER</h1>

          <div className="workerOptions">
            {WORKER_OPTIONS.map((worker) => (
              <button
                key={worker}
                type="button"
                className={`workerButton ${selectedWorkers.includes(worker) ? "selected" : ""}`}
                onClick={() => toggleWorker(worker)}
              >
                {worker}
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
              onClick={() => onConfirm(selectedWorkers)}
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
