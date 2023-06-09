$('.input-field input, .input-field select').on('change', function() {
    const sex = document.getElementById('sex').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const brac = parseFloat(document.getElementById('brac').value);

    if (sex && age && height && weight && brac) {
        const eliminationRate = 0.2; 
        const drinkingDuration = (brac == 0.08 || brac == 1) ? 15 : 10;
        const expectedPeak = (brac == 0.08 || brac == 1) ? 45 : 35;

        let estimatedTotalBodyWater;
        if (sex == 'male') {
            estimatedTotalBodyWater = 2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight;
        } else {
            estimatedTotalBodyWater = -2.097 + 0.1069 * height + 0.2466 * weight;
        }

        const variable2E = (brac == 0.08 || brac == 1) ? 0.88 : 0.55;

        const alcohol100DoseGram = (variable2E * estimatedTotalBodyWater / 0.8) + (eliminationRate * (drinkingDuration / 60 + expectedPeak / 60) * (estimatedTotalBodyWater / 0.8));
        const alcohol100DoseGramPerKg = alcohol100DoseGram / weight;

        const alcohol40DoseGram = alcohol100DoseGram / 0.345;
        const alcohol40DoseGramPerKg = alcohol40DoseGram / weight;

        let alcoholType;
        if (brac == 1) {
            alcoholType = "Stryyk:";
        } else {
            alcoholType = "Vodka:";
        }
    
        const mixerDose = alcohol40DoseGram * 3;
  
        document.getElementById('result').innerHTML = `
    <p1>${alcoholType}<br><strong>${alcohol40DoseGram.toFixed(2)} g</strong></p1>
    <p2>Orange Juice:<br><strong>${mixerDose.toFixed(2)} g</strong></p2>`;
    
    }

});
