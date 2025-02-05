const statViews =
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

const statPerCountryTables = [
    {
        countryName: "France",
        tableName: "france_players"
    },
    {
        countryName: "Argentina",
        tableName: "argentina_players"
    }
]

statViews.forEach((view) => {
    publish(view.viewName + "_stat").query(
        ctx => `
            SELECT ${view.columnToSelect}
            FROM ${ctx.ref("team_players_stat")}
        `
    );
});


statPerCountryTables.forEach((table) => {
    publish(view.tableName + "_stat",
        {
            type: "table"
        })
        .query(
            ctx => `
                SELECT *
                FROM ${ctx.ref("team_players_stat")}
                WHERE teamName = "${table.countryName}"
            `
        );
});
