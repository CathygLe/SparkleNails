import { useState } from "react";
import "./../styles/SelectPoints.css";

type SelectPointsProps = {
  onBack: () => void;
  onConfirm: (pointsToRedeem: number) => void;
};

const POINT_OPTIONS = [10, 50, 100, 150];

export default function SelectPoints({ onBack, onConfirm }: SelectPointsProps) {
  const [selectedPoints, setSelectedPoints] = useState<number | null>(null);
  const pointsAvailable = 0;

  return (
    <div className="selectPoints">
      <div className="container">
        <div className="pointsCard">
          <h1 className="title">SELECT POINTS</h1>

          <div className="pointsLayout">
            <section className="pointsLeft">
              <p className="pointsAvailable">
                POINTS AVAILABLE: <span className="pointsValue">{pointsAvailable}</span>
              </p>

              <div className="pointsOptions">
                {POINT_OPTIONS.map((points) => (
                  <button
                    key={points}
                    type="button"
                    className={`pointsButton ${selectedPoints === points ? "selected" : ""}`}
                    onClick={() => setSelectedPoints(points)}
                  >
                    {points} POINTS
                  </button>
                ))}
              </div>
            </section>

            <section className="pointsRight">
              <h2 className="redeemTitle">REDEEM</h2>
              <p className="redeemEmpty">Nothing to redeem</p>
            </section>
          </div>

          <div className="buttonRow">
            <button type="button" className="buttonBack" onClick={onBack}>
              ← BACK
            </button>

            <div className="buttonRowSpacer" aria-hidden="true" />

            <button
              type="button"
              className="button"
              onClick={() => onConfirm(selectedPoints ?? 0)}
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
