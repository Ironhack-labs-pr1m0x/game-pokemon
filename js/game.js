class Game {
  constructor() {
    this.device = new Device();
    this.screen = new Screen();
    this.opponentPokemonArr;
    this.playerBag;
    this.opponentBag;
    this.sound;
    this.audioLevel = 0.2;
    this.battleSound = new Audio('./sounds/battle_trainer.mp3');
  }

  drawBlackScreen() {
    this.screen.drawBlackScreen();
  }

  drawWelcomeScreen() {
    this.screen.drawWelcomeScreen();
  }

  drawIntroScreen() {
    this.screen.drawIntroScreen();
  }

  drawBattleScreen() {
    this.opponentTrainer;
    this.screen.drawBattleScreen();
    this.menu = new Menu();
    this.playerPokemon.drawPokemon();
    this.opponentPokemon = this.opponentPokemonArr[0];
    this.opponentPokemon.drawOpponentPokemon();

    this.menu.drawDefaultMenu(this.playerPokemon);
    this.playerStats = new PlayerStats();
    this.opponentStats = new OpponentStats();
    this.playerStats.drawPlayerStats(this.playerPokemon);
    this.opponentStats.drawOpponentStats(this.opponentPokemon);
  }

  drawNextTrainerScreen() {
    this.screen.drawNextTrainerScreen();
  }

  drawChooseDifficultyScreen() {
    this.screen.drawChooseDifficultyScreen();
  }

  drawChoosePokemonScreen() {
    this.screen.drawChoosePokemonScreen();
  }
}
