// This code converts between two currencies using the exchange rate API
async function convert() {
    // Get the values from the input fields
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;

    // Get the conversion rate from the API
    const response = await fetch(`https://v6.exchangerate-api.com/v6/31e32b1f86fd6ad5b155cfd2/latest/${fromCurrency}`);
    const data = await response.json();

    // Check for errors
    if(data.result == "error") {
        alert(data["error-type"]);
        return; 
    }

    // Calculate the result
    const rate = data.conversion_rates[toCurrency];
    const result = amount * rate;

    // Display the result
    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${toCurrency}`;
}

async function convert() {
    // Get the values from the input fields
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;

    // Get the conversion rate from the API
    const response = await fetch(`https://v6.exchangerate-api.com/v6/31e32b1f86fd6ad5b155cfd2/latest/${fromCurrency}`);
    const data = await response.json();

    // Check for errors
    if(data.result == "error") {
        alert(data["error-type"]);
        return; 
    }

    // Calculate the result
    const rate = data.conversion_rates[toCurrency];
    const result = amount * rate;

    // Display the result
    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${toCurrency}`;

    
}
