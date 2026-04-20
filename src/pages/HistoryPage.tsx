import { useMemo, useState } from "react";
import "./../styles/HistoryPage.css";

export type VisitRecord = {
  id: string;
  name: string;
  phone: string;
  dateLabel: string;
  timestampMs: number;
  workers: string[];
  services: string[];
  points: number;
};

type HistoryPageProps = {
  visits: VisitRecord[];
  onBack: () => void;
};

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export default function HistoryPage({ visits, onBack }: HistoryPageProps) {
  const [query, setQuery] = useState("");
  const [selectedVisitId, setSelectedVisitId] = useState<string | null>(null);

  const filteredVisits = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const sorted = [...visits].sort((a, b) => b.timestampMs - a.timestampMs);

    if (!normalized) return sorted;

    return sorted.filter((visit) => {
      const workers = visit.workers.join(" ").toLowerCase();
      const services = visit.services.join(" ").toLowerCase();
      return (
        visit.name.toLowerCase().includes(normalized) ||
        visit.phone.toLowerCase().includes(normalized) ||
        visit.dateLabel.toLowerCase().includes(normalized) ||
        workers.includes(normalized) ||
        services.includes(normalized)
      );
    });
  }, [query, visits]);

  const selectedVisit =
    filteredVisits.find((visit) => visit.id === selectedVisitId) ??
    visits.find((visit) => visit.id === selectedVisitId) ??
    null;

  return (
    <div className="historyPage">
      <div className="container">
        <div className="historyCard">
          <h1 className="title">HISTORY</h1>

          <div className="historyTopRow">
            <input
              className="searchInput"
              type="search"
              placeholder="Search client, phone, worker..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="historyList" role="list">
            {filteredVisits.length === 0 ? (
              <p className="emptyState">No visits found.</p>
            ) : (
              filteredVisits.map((visit) => (
                <button
                  key={visit.id}
                  type="button"
                  className="historyItem"
                  onClick={() => setSelectedVisitId(visit.id)}
                >
                  <div className="initialCircle">{getInitials(visit.name)}</div>
                  <div className="visitInfo">
                    <p className="clientName">{visit.name}</p>
                    <p className="clientPhone">{visit.phone || "No phone"}</p>
                    <p className="visitDate">{visit.dateLabel}</p>
                  </div>
                  <div className="workerTag">{visit.workers.join(", ") || "No worker"}</div>
                </button>
              ))
            )}
          </div>

          <div className="buttonRow">
            <button type="button" className="buttonBack" onClick={onBack}>
              ← BACK
            </button>
          </div>
        </div>
      </div>

      {selectedVisit && (
        <div className="overlay" onClick={() => setSelectedVisitId(null)}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <div className="historyItem previewItem">
              <div className="initialCircle">{getInitials(selectedVisit.name)}</div>
              <div className="visitInfo">
                <p className="clientName">{selectedVisit.name}</p>
                <p className="clientPhone">{selectedVisit.phone || "No phone"}</p>
                <p className="visitDate">{selectedVisit.dateLabel}</p>
              </div>
              <div className="workerTag">{selectedVisit.workers.join(", ") || "No worker"}</div>
            </div>

            <div className="modalDetailsCard">
              <div className="detailRow">
                <span className="detailLabel">SERVICE:</span>
                <span className="detailValuePill">
                  {selectedVisit.services.join(", ") || "NONE"}
                </span>
              </div>
              <div className="detailRow">
                <span className="detailLabel">POINTS:</span>
                <span className="detailValuePill">{selectedVisit.points}</span>
              </div>
              <div className="detailRow">
                <span className="detailLabel">TOTAL POINTS:</span>
                <span className="detailValuePill">{selectedVisit.points}</span>
              </div>

              <div className="modalActions">
                <button
                  type="button"
                  className="modalCancelButton"
                  onClick={() => setSelectedVisitId(null)}
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  className="modalSaveButton"
                  onClick={() => setSelectedVisitId(null)}
                >
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
