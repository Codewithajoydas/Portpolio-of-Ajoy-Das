let convertCurrency = () => {
  let amount = document.getElementById("amount").value;
  let fromCurrency = document.getElementById("from-currency").value;
  let toCurrency = document.getElementById("to-currency").value;

  if (fromCurrency === toCurrency) {
    document.getElementById(
      "result"
    ).innerHTML = `${amount} ${fromCurrency} = ${amount} ${toCurrency}`;
    return;
  }

  fetch(
    `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "result"
      ).innerHTML = `${amount} ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").innerHTML = "Failed to fetch rate";
    });
};
