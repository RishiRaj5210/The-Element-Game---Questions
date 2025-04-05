// Question list
let score = 0;

const originalQuestions = [
    {
      question: "What is the chemical symbol for Hydrogen?",
      answer: "H"
    },
    {
      question: "Which element has the symbol 'O'?",
      answer: "O"
    },
    {
      question: "Which element is a noble gas?",
      answer: "He"
    },
    {
      question: "What is the symbol for Gold?",
      answer: "Au"
    },
    {
      question: "Which element has atomic number 6?",
      answer: "C"
    },
    {
      question: "What is the symbol for Sodium?",
      answer: "Na"
    },
    {
      question: "What is the chemical symbol for Iron?",
      answer: "Fe"
    },
    {
      question: "Which element has the symbol 'Mg'?",
      answer: "Mg"
    },
    { question: "Which element is used as a neutron moderator in nuclear reactors?", answer: "B" },
    { question: "Which element has the highest melting point?", answer: "W" },
    { question: "Which element was discovered by Marie Curie?", answer: "Po" },
    { question: "Which element is commonly used in rechargeable batteries and has atomic number 3?", answer: "Li" },
    { question: "What is the only metal that is liquid near room temperature?", answer: "Hg" },
    { question: "Which transition metal is known for its resistance to corrosion and staining?", answer: "Cr" },
    { question: "Which element is commonly alloyed with iron to make stainless steel?", answer: "Ni" },
    { question: "Which element is most abundant in the Earth's crust?", answer: "O" },
    { question: "Which element is used in smoke detectors?", answer: "Am" },
    { question: "Which element is a noble gas and glows red-orange in neon signs?", answer: "Ne" },
    { question: "Which element has the highest atomic number that occurs naturally?", answer: "U" },
    { question: "Which element is used in semiconductor devices?", answer: "Si" },
    { question: "Which element is a halogen and used in antiseptics?", answer: "I" },
    { question: "Which element is used in thermometers and barometers?", answer: "Hg" },
    { question: "Which rare earth element is used in strong permanent magnets?", answer: "Nd" },
    { question: "Which element is the first actinide?", answer: "Ac" },
    { question: "Which element is used in x-ray shielding and radiation protection?", answer: "Pb" },
    { question: "Which element is liquid and highly toxic, used in old thermometers?", answer: "Hg" },
    { question: "Which element is used in airship lifting and is non-flammable?", answer: "He" },
    { question: "Which element was historically called 'quicksilver'?", answer: "Hg" }
  ];
  
  // Shuffle the question array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const questions = shuffle(originalQuestions).slice(0, 10);
  let currentIndex = 0;
  let answered = false;
  
  function showNextQuestion() {
    const qBox = document.getElementById("question-box");
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");
  
    if (!qBox || !nextBtn || !feedback) {
      console.error("Required elements missing from the DOM.");
      return;
    }
  
    if (currentIndex >= questions.length) {
      qBox.textContent = `Quiz Complete!!!!! You scored ${score} out of ${questions.length}`;
      feedback.textContent = "";
      nextBtn.disabled = true;
      console.log("All questions complete.");
      return;
    }
  
    const currentQuestion = questions[currentIndex];
    qBox.textContent = currentQuestion.question;
    feedback.textContent = "";
    feedback.style.color = "#333";
    nextBtn.disabled = true;
    answered = false;
  
    console.log("Loaded question:", currentQuestion.question);
  }
  
  function handleElementClick(event) {
    if (answered) {
      console.log("Already answered.");
      return;
    }
  
    const el = event.currentTarget;
    const selectedSymbol = el.getAttribute("data-symbol");
    const correctAnswer = questions[currentIndex].answer;
    const feedback = document.getElementById("feedback");
  
    console.log("Clicked symbol:", selectedSymbol);
  
    if (!selectedSymbol) {
      feedback.textContent = "⚠️ This element has no data-symbol!";
      feedback.style.color = "orange";
      return;
    }
  
    if (selectedSymbol === correctAnswer) {
      feedback.textContent = "Yay!!! You Got It Right";
      feedback.style.color = "white";
      console.log("Correct answer");
      score++; 
    } else {
      feedback.textContent = `Wrong. The Correct Answer Is ${correctAnswer}`;
      feedback.style.color = "white";
      console.log("Incorrect answer.");
    }
  
    answered = true;
    document.getElementById("next-btn").disabled = false;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded.");
    showNextQuestion();
  
    const elements = document.querySelectorAll(".div");
    if (elements.length === 0) {
      console.warn("No elements found with class 'element'.");
    }
  
    elements.forEach(el => {
      el.addEventListener("click", handleElementClick);
    });
  
    const nextBtn = document.getElementById("next-btn");
    if (!nextBtn) {
      console.error("Next button not found!");
      return;
    }
  
    nextBtn.addEventListener("click", () => {
      currentIndex++;
      showNextQuestion();
    });
  });
  
