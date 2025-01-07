import { calculateMonthlySalaries, formatter } from '../util/salary.js';

export default function Results({ input }) {
  const monthlyResults = calculateMonthlySalaries(input.grossSalary);

  return (
    <div className="results-container">
      <h2>2025 Yılı Aylık Net Maaş Tablosu</h2>
      <table id="result">
        <thead>
          <tr>
            <th>Ay</th>
            <th>Brüt Maaş</th>
            <th>SGK</th>
            <th>İşsizlik</th>
            <th>Gelir Vergisi</th>
            <th>Vergi Oranı</th>
            <th>Net Maaş</th>
          </tr>
        </thead>
        <tbody>
          {monthlyResults.map((result) => (
            <tr key={result.month}>
              <td>{result.month}</td>
              <td>{formatter.format(result.grossSalary)}</td>
              <td>-{formatter.format(result.socialSecurityEmployee)}</td>
              <td>-{formatter.format(result.unemploymentInsurance)}</td>
              <td>-{formatter.format(result.incomeTax)}</td>
              <td>%{result.taxRate}</td>
              <td className="net-amount">{formatter.format(result.netSalary)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
