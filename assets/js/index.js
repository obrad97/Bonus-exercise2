const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', (e) => {
        const activeQuestion = document.querySelector(".question.question-active");
        if (activeQuestion && activeQuestion !== question) {
            activeQuestion.classList.toggle("question-active")
            activeQuestion.style.fontWeight = 'normal';
            activeQuestion.style.color = '#4B4C5F';
            activeQuestion.nextElementSibling.style.maxHeight = '0px';
            activeQuestion.nextElementSibling.style.marginBottom = '0px';
        }
        const height = question.nextElementSibling.scrollHeight;
        question.classList.toggle('question-active');
        if (question.classList.contains('question-active')) {
            question.style.fontWeight = 'bold';
            question.style.color = '#1E1F36';
            question.nextElementSibling.style.maxHeight = `${height}px`;
            question.nextElementSibling.style.marginBottom = '16px';
        }else {
            question.style.fontWeight = 'normal';
            question.style.color = '#4B4C5F';
            question.nextElementSibling.style.maxHeight = '0px';
            question.nextElementSibling.style.marginBottom = '0px';
        }
    });
}); 

