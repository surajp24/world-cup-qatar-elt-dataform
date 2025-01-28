const views =
    [
        {
            columnToSelect: "goalKeeper",
            viewName: "goal_keeper"
        },
        {
            columnToSelect: "topScorers",
            viewName: "top_scorers"
        },
        {
            columnToSelect: "bestPassers",
            viewName: "best_passers"
        }
    ];

views.forEach((view) => {
    publish(view.viewName + "_stat").query(
        ctx => `
            SELECT ${view.columnToSelect}
            FROM ${ctx.ref("team_players_stat")}
        `
    );
});