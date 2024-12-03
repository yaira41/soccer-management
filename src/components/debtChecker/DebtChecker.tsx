import React, { useState } from "react";
import { getDebtByName } from "../../services/googleSheetsService";
import "./debtChecker.css";

const DebtChecker: React.FC = () => {
  const [id, setId] = useState("");
  const [result, setResult] = useState<string>("");

  const handleCheckDebt = async () => {
    const debt = await getDebtByName(id);
    if (debt === null) {
      setResult("טעית בת.ז או שאתה לא נמצא ברשימה.");
    } else if (debt !== 0) {
      setResult(`סך החיוב: ${debt} ש"ח.`);
    } else {
      setResult(`נראה שאין לך חובות חביבי.`);
    }
  };

  return (
    <div className="content-container">
      <h2>ניהול חובות</h2>
      <h1>כדורגל</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="הכנס ת.ז"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleCheckDebt}>בדוק חוב</button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default DebtChecker;
