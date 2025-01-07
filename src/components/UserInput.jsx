import { NumericFormat } from 'react-number-format';

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>2025 Yılı Brüt Maaş</label>
          <NumericFormat
            className="salary-input"
            value={userInput.grossSalary}
            onValueChange={(values) => {
              onChange('grossSalary', values.value);
            }}
            thousandSeparator="."
            decimalSeparator=","
            suffix=" ₺"
            placeholder="Aylık brüt maaşınızı giriniz"
            allowNegative={false}
          />
        </p>
      </div>
    </section>
  );
}
