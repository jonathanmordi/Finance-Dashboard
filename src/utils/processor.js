// In this we want a function that takes a "raw" row and makes the computer understand it 
const CATEGORY_MAP = {
  "uber": "Transport",
  "bolt": "Transport",
  "chipotle": "Food",
  "starbucks": "Food",
  "amazon": "Shopping"
};

export const getCategory = (merchantName) => {
  const name = merchantName.toLowerCase();
  
    //checks if it contains a keyword so it matches it appropriately 
   const keywords = Object.keys(CATEGORY_MAP);

   for(const keyword of keywords) {
        if(name.includes(keyword)){
            return CATEGORY_MAP[keyword]
        }
   }
  
  return "Miscellaneous"; // Default if no match is found
};

// line parser function 
export const parseLine = (line) => {
    if(!line || line.trim() === ""){
        return null
    }  
    const parts = line.split(",");

    const date = parts[0].trim();
    const rawMerchant = parts[1].trim();
    const rawAmount = parts[2].trim();

    return{
        date: date,
        merchant: rawMerchant,
        amount: parseFloat(rawAmount),
        category: getCategory(rawMerchant)
    };

};

export const calculateTotals = (transactions) => {
    //reduce turns the array into a single object
    return transactions.reduce((acc, current) => {

        if(current.amount > 0){
            acc.income += current.amount
        } else {
            acc.expenses += current.amount
        }

        return acc;
    }, {income: 0, expenses: 0}); 
};


export const processTransactionData = (csvRows) => {
  const dataOnly = csvRows.slice(1);
  const cleanTransactions = dataOnly.map(row => parseLine(row)).filter(item => item != null);

  const finalTotals = calculateTotals(cleanTransactions)
  return {
    transactions: cleanTransactions,
    summary: finalTotals
  };
};