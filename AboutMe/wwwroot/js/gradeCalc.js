$("#btn").click(() => {

    // Declare weights
    const weights = {
        assignment: 50,
        groupProject: 10,
        quiz: 10,
        midterm: 10,
        final: 10,
        intex: 10
    };

    // Grab scores input from user
    const scores = {
        assignment: parseFloat(($("#assignment").val()) / 100),
        groupProject: parseFloat(($("#group-project").val()) / 100),
        quiz: parseFloat(($("#quiz").val()) / 100),
        midterm: parseFloat(($("#midterm").val()) / 100),
        final: parseFloat(($("#final").val()) / 100),
        intex: parseFloat(($("#intex").val()) / 100)
    };

    // Calculate final percentage
    const finalPercent = parseFloat(((weights.assignment * scores.assignment) + (weights.groupProject * scores.groupProject) + (weights.quiz * scores.quiz) + (weights.midterm * scores.midterm) + (weights.final * scores.final) + (weights.intex * scores.intex)).toFixed(2));

    // Instatiate final letter grade
    let finalLetter = "";

    // Determine letter grade
    if (finalPercent >= 94) finalLetter = "A"
    else if (finalPercent >= 90) finalLetter = "A-"
    else if (finalPercent >= 87) finalLetter = "B+"
    else if (finalPercent >= 84) finalLetter = "B"
    else if (finalPercent >= 80) finalLetter = "B-"
    else if (finalPercent >= 77) finalLetter = "C+"
    else if (finalPercent >= 74) finalLetter = "C"
    else if (finalPercent >= 70) finalLetter = "C-"
    else if (finalPercent >= 67) finalLetter = "D+"
    else if (finalPercent >= 64) finalLetter = "D"
    else if (finalPercent >= 60) finalLetter = "D-"
    else finalLetter = "F";

    // Output results to page
    $("#final-percent").html(`Final Percent Grade: ${finalPercent}%`);
    $("#final-letter").html(`Final Letter Grade: ${finalLetter}`);
});