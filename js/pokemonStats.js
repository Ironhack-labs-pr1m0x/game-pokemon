class PlayerStats {
  constructor() {
    this.playerStats = playerStatsBox;
    this.playerStatsTarget = document.querySelector('.player--stats-box');
  }

  drawPlayerStats() {
    this.playerStatsTarget.innerHTML = '';
    this.playerStats = playerStatsBox
      .replace('#{level}', game.playerPokemon.level)
      .replace('#{healthPercent}', game.playerPokemon.healthPercent)
      .replace('#{health}', game.playerPokemon.health)
      .replace('#{maxHealth}', game.playerPokemon.maxHealth)
      .replace('#{name}', game.playerPokemon.name);
    this.playerStatsTarget.innerHTML = this.playerStats;
  }

  // drawPlayerStats() {
  //   this.playerStatsTarget.innerHTML = '';
  //   this.playerStats = playerStatsBox
  //     .replace('#{level}', game.playerPokemon.level)
  //     .replace('#{health}', game.playerPokemon.health)
  //     .replace('#{maxHealth}', game.playerPokemon.maxHealth)
  //     .replace('#{name}', game.playerPokemon.name);
  //   this.playerStatsTarget.innerHTML = this.playerStats;
  // }

  drawPlayerStatsEmpty() {
    this.playerStatsTarget.innerHTML = '';
  }
}

const playerStatsBox = `
<div class="player--stats-wrapper">
  <p class="player--pokemon-name">#{name}</p>
  <p class="player--pokemon-health">#{health}</p>
  <p class="player--pokemon-level">#{level}</p>

  <p class="player--pokemon-health-bar" role="progressbar" style="width:#{healthPercent}px" aria-valuenow="80"
    aria-valuemin="0" aria-valuemax="80"></p>
  <p class="player--pokemon-max-health">#{maxHealth}</p>
</div>
`;

class OpponentStats {
  constructor() {
    this.opponentStats = opponentStatsBox;
    this.opponentStatsTarget = document.querySelector('.opponent--stats-box');
  }
  drawOpponentStats() {
    this.opponentStatsTarget.innerHTML = '';
    this.opponentStats = opponentStatsBox
      .replace('#{health}', game.opponentPokemon.healthPercent)
      .replace('#{level}', game.opponentPokemon.level)
      .replace('#{name}', game.opponentPokemon.name);

    this.opponentStatsTarget.innerHTML = this.opponentStats;
  }
}

const opponentStatsBox = `
  <div class="opponent--stats-wrapper">
    <p class="opponent--pokemon-name">#{name}</p>
    <p class="opponent--pokemon-level">#{level}</p>
    <p class="opponent--pokemon-health-bar" role="progressbar" style="width: #{health}px" aria-valuenow="#{health}" aria-valuemin="0" aria-valuemax="80"></p>
  </div>
`;
