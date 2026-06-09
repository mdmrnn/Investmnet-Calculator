import { useState } from "react";
import Result from "./Components/Result";
import UserInput from "./Components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 3,
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
    </>
  );
}

export default App;
