import { useState } from "react";
import Result from "./Components/Result";
import UserInput from "./Components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  let annualData = calculateInvestmentResults(userInput);

  function handleInput(label, event) {
    setUserInput((prev) => ({
      ...prev,
      [label]: Number(event.target.value),
    }));
    annualData = calculateInvestmentResults(userInput);
  }

  return (
    <>
      <UserInput handleInput={handleInput} userInput={userInput} />
      <Result annualData={annualData} />
      {userInput.duration < 1 && (
        <p className="center">
          INVALID DURATION : duration must be integer and greater that 0
        </p>
      )}
    </>
  );
}

export default App;
