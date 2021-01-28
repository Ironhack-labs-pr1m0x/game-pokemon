const game = new Game();

// • Render • //

game.drawBlackScreen();

document.querySelector('.start-btn-overlay').addEventListener('click', (ev) => {
  document.querySelector('.black--screen').remove();
  document.querySelector('.welcome-introduction').remove();
  document.querySelector('.pointer-arrow').remove();
  game.drawIntroScreen();
  document.querySelector('.start-btn-overlay').remove();
  document.querySelector('.container').classList.add('big-device');

  setTimeout(() => {
    game.drawWelcomeScreen();
  }, 2500);
});

// game.drawIntroScreen();

// setTimeout(() => {
//   game.drawWelcomeScreen();
// }, 2500);

// setTimeout(() => {
//   game.screen.drawChoosePokemonScreen();
// }, 4500);

// game.screen.drawChooseDifficultyScreen();

// game.screen.drawChoosePokemonScreen();
// game.screen.drawNextTrainerScreen();
// // game.screen.drawChoosePokemonScreen();
