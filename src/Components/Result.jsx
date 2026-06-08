import { formatter } from "../util/investment";
export default function Result({ annualData, userInput }) {
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
              <td>
                {formatter.format(
                  userInput.initialInvestment +
                    data.annualInvestment +
                    data.interest,
                )}
              </td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.annualInvestment)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
