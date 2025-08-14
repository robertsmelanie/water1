function calculateWater() {
    const weight = parseFloat(document.getElementById("weight").value);
    const unit = document.getElementById("unit").value;
    const activity = document.getElementById("activity").value;
    const result = document.getElementById("result");

    if (isNaN(weight) || weight <= 0) {
        result.textContent = "Please enter a valid weight.";
        return;
    }

    // Convert weight to kg if needed
    const weightInKg = unit === "lbs" ? weight * 0.453592 : weight;

    // Base water intake: 35 ml per kg
    let intakeMl = weightInKg * 35;

    // Add more for activity level
    if (activity === "moderate") intakeMl += 500;
    else if (activity === "high") intakeMl += 1000;

    const intakeLiters = (intakeMl / 1000).toFixed(2);
    result.textContent = `You should drink approximately ${intakeLiters} liters of water per day.`;
}