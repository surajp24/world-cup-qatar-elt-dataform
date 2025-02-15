const top_scorers_columns = {
    description: "An object containing the top scorers fields.",
    columns: {
        goals: "Total number of goals scored by the top scorers.",
        players: {
            description: "List of top-scoring players",
            columns: {
                playerName: "Name of the top-scoring player.",
                playerDob: "Date of birth of the player.",
                position: "Playing position of the player.",
                club: "Club that the player is affiliated with.",
                brandSponsorAndUsed: "Brand sponsor of the player's gear.",
                appearances: "Number of matches the player has played in."
            }
        }
    }
};

const best_passers_columns = {
    description: "An object containing the best passers fields.",
    columns: {
        goalAssists: "Total number of assists made by the best passers.",
        players: {
            description: "List of best passers",
            columns: {
                playerName: "Name of the player with the most assists.",
                playerDob: "Date of birth of the player.",
                position: "Playing position of the player.",
                club: "Club that the player is affiliated with.",
                brandSponsorAndUsed: "Brand sponsor of the player's gear.",
                appearances: "Number of matches the player has played in."
            }
        }
    }
};

const best_dribblers_columns = {
    description: "An object containing the best dribblers fields.",
    columns: {
        dribbles: "Average successful dribbles per match.",
        players: {
            description: "List of best dribblers",
            columns: {
                playerName: "Name of the best dribbling player.",
                playerDob: "Date of birth of the player.",
                position: "Playing position of the player.",
                club: "Club that the player is affiliated with.",
                brandSponsorAndUsed: "Brand sponsor of the player's gear.",
                appearances: "Number of matches the player has played in."
            }
        }
    }
};

const goal_keeper_columns = {
    description: "An object containing the goalkeeper fields.",
    columns: {
        playerName: "Name of the team's goalkeeper.",
        appearances: "Number of matches the goalkeeper has played.",
        savePercentage: "Percentage of shots saved by the goalkeeper.",
        cleanSheets: "Percentage of matches where no goals were conceded."
    }
};

const players_most_appearances_columns = {
    description: "An object containing the most appearances fields.",
    columns: {
        appearances: "Total appearances by the most consistent players.",
        players: {
            description: "List of players with the most appearances",
            columns: {
                playerName: "Name of the player with the most appearances.",
                playerDob: "Date of birth of the player.",
                position: "Playing position of the player.",
                club: "Club that the player is affiliated with.",
                brandSponsorAndUsed: "Brand sponsor of the player's gear.",
                appearances: "Number of matches the player has played in."
            }
        }
    }
};

const players_most_duels_won_columns = {
    description: "An object containing the most duels won fields.",
    columns: {
        duels: "Total duels won by the top player.",
        players: {
            description: "List of players winning the most duels",
            columns: {
                playerName: "Name of the player winning the most duels.",
                playerDob: "Date of birth of the player.",
                position: "Playing position of the player.",
                club: "Club that the player is affiliated with.",
                brandSponsorAndUsed: "Brand sponsor of the player's gear.",
                appearances: "Number of matches the player has played in."
            }
        }
    }
};

const players_most_interceptions_columns = {
    description: "An object containing the most interceptions fields.",
    columns: {
        interceptions: "Total interceptions made by the top player.",
        players: {
            description: "List of players with the most interceptions",
            columns: {
                playerName: "Name of the player with the most interceptions.",
                playerDob: "Date of birth of the player.",
                position: "Playing position of the player.",
                club: "Club that the player is affiliated with.",
                brandSponsorAndUsed: "Brand sponsor of the player's gear.",
                appearances: "Number of matches the player has played in."
            }
        }
    }
};

const players_most_successful_tackles_columns = {
    description: "An object containing the most successful tackles fields.",
    columns: {
        successfulTackles: "Total number of successful tackles made.",
        players: {
            description: "List of players with the most successful tackles",
            columns: {
                playerName: "Name of the player with the most successful tackles.",
                playerDob: "Date of birth of the player.",
                position: "Playing position of the player.",
                club: "Club that the player is affiliated with.",
                brandSponsorAndUsed: "Brand sponsor of the player's gear.",
                appearances: "Number of matches the player has played in."
            }
        }
    }
};

const columns_descriptions = {
    teamName: "Name of the national football team.",
    teamTotalGoals: "Total number of goals scored by the team in the tournament.",
    fifaRanking: "Current FIFA ranking of the national team.",
    nationalTeamKitSponsor: "Official sponsor providing kits for the national team.",
    topScorers: top_scorers_columns,
    bestPassers: best_passers_columns,
    bestDribblers: best_dribblers_columns,
    goalKeeper: goal_keeper_columns,
    playersMostAppearances: players_most_appearances_columns,
    playersMostDuelsWon: players_most_duels_won_columns,
    playersMostInterception: players_most_interceptions_columns,
    playersMostSuccessfulTackles: players_most_successful_tackles_columns
};

module.exports = {
    columns_descriptions
};
