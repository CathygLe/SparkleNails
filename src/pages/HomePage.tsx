import "./../styles/HomePage.css";

type HomePageProps = {
  onCustomerCheckIn: () => void;
  onHistory: () => void;
};

export default function HomePage({ onCustomerCheckIn, onHistory }: HomePageProps) {
  return (
    <div className="container">
      <div className="iPad">

        <h1 className="title">SPARKLE NAILS</h1>

        <button
          className="button1"
          type="button"
          onClick={onCustomerCheckIn}
        >
          CUSTOMER CHECK-IN
        </button>

        <button
          className="button2"
          type="button"
          onClick={onHistory}
        >
          HISTORY
        </button>
      </div>
    </div>
  );
}