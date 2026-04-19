import "./../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="container">
      <div className="iPad">

        <h1 className="title">SPARKLE NAILS</h1>

        <button
          className="button1"
          onClick={() => alert("Enter clicked")}
        >
          CUSTOMER CHECK-IN
        </button>

        <button
          className="button2"
          onClick={() => alert("Enter clicked")}
        >
          HISTORY
        </button>
      </div>
    </div>
  );
}