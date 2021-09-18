const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', (e) => {
        const activeQuestion = document.querySelector(".question.question-active");
        if (activeQuestion && activeQuestion !== question) {
            activeQuestion.classList.toggle("question-active")
            activeQuestion.nextElementSibling.style.maxHeight = '0px';
            activeQuestion.nextElementSibling.style.marginBottom = '0px';
        }
        const height = question.nextElementSibling.scrollHeight;
        question.classList.toggle('question-active');
        if (question.classList.contains('question-active')) {
            question.nextElementSibling.style.maxHeight = `${height}px`;
            question.nextElementSibling.style.marginBottom = '16px';
        }else {
            question.nextElementSibling.style.maxHeight = '0px';
            question.nextElementSibling.style.marginBottom = '0px';
        }
    });
}); 

