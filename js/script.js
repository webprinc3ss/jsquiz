const submitAnswers = () => {
    let total = 5;
    let score = 0;

    //Get user input
    let q1 = document.forms['quizForm']["q1"].value;
    let q2 = document.forms['quizForm']["q2"].value;
    let q3 = document.forms['quizForm']["q3"].value;
    let q4 = document.forms['quizForm']["q4"].value;
    let q5 = document.forms['quizForm']["q5"].value;

    // alert(q1);

    //Validation
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert('You missed question' + i)
            return false;
        };
    }

    //Set Correct Answers
    let answers = ["b", "a", "d", "b", "d"];

    //Check the Answers
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }


    //Display Results
    document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span>.</h3>';
    return false;
}