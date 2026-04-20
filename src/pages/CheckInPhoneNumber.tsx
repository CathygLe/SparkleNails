import { useState } from "react";
import "./../styles/CheckInPhoneNumber.css";
import PhoneKeypad from "./../components/PhoneKeyPad";

type CheckInPhoneNumberProps = {
  onBack: () => void;
  onConfirm: (phone: string) => void;
};

export default function CheckInPhoneNumber({ onBack, onConfirm }: CheckInPhoneNumberProps) {
  const [phone, setPhone] = useState("");

  return (
    <div className="checkInPhoneNumber">
      <div className="container">
        <div className="PhoneNumber">

            <h1 className="title">ENTER PHONE NUMBER</h1>

            <input
            className="input"
            type="tel"
            placeholder="604-123-4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />

            <PhoneKeypad value={phone} onChange={setPhone} />

            <div className="buttonRow">
                <button type="button" className="buttonBack" onClick={onBack}>
                    ← BACK
                </button>

                <div className="buttonRowSpacer" aria-hidden="true" />

                <button type="button" className="button" onClick={() => onConfirm(phone)} >
                    CONFIRM
                </button>
            </div>

        </div>
      </div>
    </div>
  );
}