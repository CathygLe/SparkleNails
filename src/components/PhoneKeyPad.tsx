import "./../styles/PhoneKeyPad.css";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function PhoneKeypad({ value, onChange }: Props) {
  const add = (d: string) => onChange(value + d);
  const back = () => onChange(value.slice(0, -1));

  return (
     <div className="keypadWrapper">
      <div className="calc">

        <button onClick={() => add("1")}>1</button>
        <button onClick={() => add("2")}>2</button>
        <button onClick={() => add("3")}>3</button>

        <button onClick={() => add("4")}>4</button>
        <button onClick={() => add("5")}>5</button>
        <button onClick={() => add("6")}>6</button>

        <button onClick={() => add("7")}>7</button>
        <button onClick={() => add("8")}>8</button>
        <button onClick={() => add("9")}>9</button>

        <button onClick={() => add("-")}>-</button>
        <button onClick={() => add("0")}>0</button>
        <button type="button" className="keypadDelete" onClick={back} aria-label="Delete">
          ⌫
        </button>

      </div>
    </div>
  );
}