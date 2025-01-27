function build_player_stats(statIndicator, appearances, brandSponsorAndUsed, club, position, playerDob, playerName) {
    return `
    STRUCT(
      MAX(${statIndicator}) AS ${statIndicator},
      ARRAY_AGG(
        IF(
          ${statIndicator} = 0 OR ${statIndicator} = 0.00,
          NULL,
          STRUCT(
            ${appearances},
            ${brandSponsorAndUsed},
            ${club},
            ${position},
            ${playerDob},
            ${playerName}
          )
        )
        ORDER BY ${statIndicator} DESC LIMIT 1
      )[OFFSET(0)] AS players
    )
  `;
}

module.exports = {build_player_stats};