<template>
  <div class="about">
    <h1 id="about-us">
      About this game
    </h1>
    <p>
      CoderQuiz is a quiz game about programming, coding, and related stuff, so you can test your knowledge about the subject while having fun!
    </p>
    
    <h1 id="how-to-play">
      How to play
    </h1>
    <ul>
      <li>
        You will be given 60 seconds to answer as many question as you can.
      </li>
      <li>
        Each question will be a multiple choice question.
      </li>
      <li>
        You will get 100 score points for correct answers, and -25 points for wrong answers.
      </li>
    </ul>

    <h1 id="why">
      Why is this a thing?
    </h1>
    <p>
      This is a personal project that I (<a href="https://www.linkedin.com/in/khusyasy/">Khusyasy</a>) made for my portofolio in my web development journey.
    </p>

    <h1 id="source">
      Sources
    </h1>
    <p>
      Free Question Api provided by <a href="https://quizapi.io/">QuizApi</a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "../variables";

.about {
  max-width: 100ch;
  margin: auto;
  height: calc(100vh - 4rem);
  color: $green-d;
}

h1{
  font-size: 3rem;
  margin: 0;
  padding: 2rem 0 0 0;
}

p{
  font-size: 1.5rem;
  margin: 0;
  padding: 1rem 0 0 0;
}

a{
  color: $green;
}

ul{
  font-size: 1.5rem;
  text-align: left;
  margin: auto;
  padding: 1rem;

  & li{
    margin: 0;
    padding: 0.5rem 0;
  }
}
</style>