export default function UserInput({ handleInput, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">INITAIL INVESTMENT</label>
          <input
            type="number"
            required
            id="initial-investment"
            value={userInput.initialInvestment}
            onChange={(event) => handleInput("initialInvestment", event)}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            id="annual-investment"
            value={userInput.annualInvestment}
            onChange={(event) => handleInput("annualInvestment", event)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            type="number"
            required
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) => handleInput("expectedReturn", event)}
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            required
            id="duration"
            value={userInput.duration}
            onChange={(event) => handleInput("duration", event)}
          />
        </p>
      </div>
    </div>
  );
}
