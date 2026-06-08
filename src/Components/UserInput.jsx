export default function UserInput({ handleInput, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">INITAIL INVESTMENT</label>
          <input
            type="number"
            id="initial-investment"
            value={userInput.initialInvestment}
            onChange={(event) => handleInput("initialInvestment", event)}
          />
        </div>
        <div>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annual-investment"
            value={userInput.annualInvestment}
            onChange={(event) => handleInput("annualInvestment", event)}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) => handleInput("expectedReturn", event)}
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) => handleInput("duration", event)}
          />
        </div>
      </div>
    </div>
  );
}
