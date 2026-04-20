import { useEffect, useState } from "react";
import "./../styles/CreateNewProfile.css";

type CreateNewProfileProps = {
  phoneNumber: string;
  onBack: () => void;
  onConfirm: (profile: { name: string; email: string; phone: string }) => void;
};

export default function CreateNewProfile({
  phoneNumber,
  onBack,
  onConfirm,
}: CreateNewProfileProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(phoneNumber);

  useEffect(() => {
    setPhone(phoneNumber);
  }, [phoneNumber]);

  return (
    <div className="createNewProfile">
      <div className="container">
        <div className="profileCard">
          <h1 className="title">ENTER INFORMATION</h1>

          <div className="fieldGroup">
            <label className="fieldLabel" htmlFor="profile-name">
              NAME
            </label>
            <input
              id="profile-name"
              className="input"
              type="text"
              placeholder="Enter here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="fieldGroup">
            <label className="fieldLabel" htmlFor="profile-email">
              EMAIL
            </label>
            <input
              id="profile-email"
              className="input"
              type="email"
              placeholder="Enter here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="fieldGroup">
            <label className="fieldLabel" htmlFor="profile-phone">
              PHONE NUMBER
            </label>
            <input
              id="profile-phone"
              className="input"
              type="tel"
              placeholder="Enter here"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="buttonRow">
            <button type="button" className="buttonBack" onClick={onBack}>
              ← BACK
            </button>

            <div className="buttonRowSpacer" aria-hidden="true" />

            <button
              type="button"
              className="button"
              onClick={() => onConfirm({ name, email, phone })}
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}