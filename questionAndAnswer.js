        const data = [
            {
                main: "Explain: Elective Bilingualism (C1)",
                answer: "~~~~~"
            },
            {
                main: "Explain: Functional Bilingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Semilingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Incipient Bilingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Balanced Bilinguals (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Holistic view of bilingualism (C1)",
                answer: "a"
            },
            {
                main: "What consequences will arise from the difference between the holistic view of monolongualism and monolingual view of bilingualism? (C1)",
                answer: "a"
            },
            {
                main: "Explain: Grammatical Competence (C1)",
                answer: "a"
            },
            {
                main: "Explain: Discource Competence (C1)",
                answer: "a"
            },
            {
                main: "Explain: Sociocultural/Pragmatic Competence (C1)",
                answer: "a"
            },
            {
                main: "Explain: Strategic Competence (C1)",
                answer: "a"
            },            {
                main: "Explain: Metalinguistic Competence (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
            {
                main: "Explain: Monolingual view of bulingualism (C1)",
                answer: "a"
            },
        ];

        const questionButton = document.getElementById('questionButton');
        const answerButton = document.getElementById('answerButton');
        const questionyArea = document.getElementById('questionArea');
        const answerArea = document.getElementById('answerArea');

        let currentDataIndex = -1;

        questionArea.textContent = "Question";
        answerArea.textContent = "Answer";
        answerButton.style.display = 'none';

        questionButton.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * data.length);
            currentDataIndex = randomIndex;
            questionArea.textContent = data[currentDataIndex].main;
            answerArea.textContent = "Answer";
            answerButton.style.display = 'inline-block';
        });

        answerButton.addEventListener('click', () => {
            if (currentDataIndex !== -1 && data[currentDataIndex].answer) {
                answerArea.textContent = data[currentDataIndex].answer;
            } else {
                answerArea.textContent = "If you're seeing this message, please contact me :)";
            }
        });
