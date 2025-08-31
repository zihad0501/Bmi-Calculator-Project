let historyList = [];

function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;


    if (!weight || !height || weight <= 0 || height <= 0) {
        alert('Please enter valid positive numbers for weight and height');
        return;
    }

    let heightInMeters = height / 100;
    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#87CEEB';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
        color = '#28a745';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        color = '#ffc107';
    } else {
        category = 'Obese';
        color = '#dc3545';
    }

    
    document.getElementById('result').innerHTML = 
        `<p style="color:${color};">Your BMI is <strong>${bmi}</strong> (${category})</p>`;

   
    historyList.push({ weight, height, bmi, category });

    
    displayHistory();
}

function displayHistory() {
    let historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '<h3>Previous Results:</h3>';
    historyList.forEach((item, index) => {
        historyDiv.innerHTML += `<p>${index + 1}. ${item.weight} kg, ${item.height} cm → BMI: ${item.bmi} (${item.category})</p>`;
    });
}
