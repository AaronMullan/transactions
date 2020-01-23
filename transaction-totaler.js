import { transactions } from './transactions.js';

function transactionTotaller (data) {
  let reformattedData = [];
  data.forEach(element => {
    let date = new Date(element.timestamp);
    let formattedDate = date.toDateString();
    reformattedData.push(element.price);
    reformattedData.push(formattedDate);
  });
  return reformattedData;
};
const newData = transactionTotaller(transactions)
console.log(newData);
