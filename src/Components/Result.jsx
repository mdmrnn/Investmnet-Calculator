import { formatter } from "../util/investment";

export default function Result({ annualData }) {
  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest(Year)</th>
          <th>Total Investment</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData &&
          annualData.map((data, index) => (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.totalInterest)}</td>
              <td>{formatter.format(data.investedCapital)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
