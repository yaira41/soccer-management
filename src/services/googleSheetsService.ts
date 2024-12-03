const spreadsheetId = import.meta.env.VITE_SPREAD_SHEET_ID;
const apiKey = import.meta.env.VITE_API_KEY;
const sheetName = "גיליון1";

export const getDebtByName = async (id: string): Promise<number | null> => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.values) {
    const row = data.values.find((row: string[]) => row[0] === id);
    return row ? parseFloat(row[1]) : null;
  }
  return null;
};
