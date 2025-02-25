/* Console launch */

async function launchLog(PORT, startDate, serverInit, dbInit) {

    const launchTime                                                                           = Date.now() - startDate; 
    const { serverStatut, routeCount }                                                         = serverInit;
    const { dbStatut, modelCount, hookModelCount }                                             = dbInit;

    console.log(``+
        ``+` ╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮ `.bgBlack.white+ `\n`+
        ``+` │                                                                                                                        │ `.bgBlack.white+ `\n`+
        ``+` │                                                                                                                        │ `.bgBlack.white+ `\n`+
        ``+` │     ░██████╗░██████╗░░█████╗░██╗░░░██╗██╗░██████╗    ░██████╗██╗░░░██╗░██████╗████████╗███████╗███╗░░░███╗░██████╗  ®  │ `.bgBlack.blue+ `\n`+
        ``+` │     ██╔════╝░██╔══██╗██╔══██╗██║░░░██║██║██╔════╝    ██╔════╝╚██╗░██╔╝██╔════╝╚══██╔══╝██╔════╝████╗░████║██╔════╝     │ `.bgBlack.white+ `\n`+
        ``+` │     ██║░░██╗░██████╔╝███████║╚██╗░██╔╝██║╚█████╗░    ╚█████╗░░╚████╔╝░╚█████╗░░░░██║░░░█████╗░░██╔████╔██║╚█████╗░     │ `.bgBlack.white+ `\n`+
        ``+` │     ██║░░╚██╗██╔══██╗██╔══██║░╚████╔╝░██║░╚═══██╗    ░╚═══██╗░░╚██╔╝░░░╚═══██╗░░░██║░░░██╔══╝░░██║╚██╔╝██║░╚═══██╗     │ `.bgBlack.white+ `\n`+
        ``+` │     ╚██████╔╝██║░░██║██║░░██║░░╚██╔╝░░██║██████╔╝    ██████╔╝░░░██║░░░██████╔╝░░░██║░░░███████╗██║░╚═╝░██║██████╔╝     │ `.bgBlack.white+ `\n`+
        ``+` │     ░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝╚═════╝░    ╚═════╝░░░░╚═╝░░░╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░░░░╚═╝╚═════╝░     │ `.bgBlack.red+ `\n`+
        ``+` │                                                                                                                        │ `.bgBlack.white+ `\n`+
        ``+` │                                                                                                                        │ `.bgBlack.white+ `\n`+
        ``+` │     `.bgBlack+`${serverStatut?`SUCCESS`:`FAILURE`}`[`${serverStatut?`bgBrightGreen`:`bgBrightRed`}`].white.bold+` express server (port ${PORT})                                                                                 │ `.bgBlack.white+ `\n`+
        ``+` │     `.bgBlack+`${dbStatut?`SUCCESS`:`FAILURE`}`[`${dbStatut?`bgBrightGreen`:`bgBrightRed`}`].white.bold+` mysql database: plan_creation                                                                              │ `.bgBlack.white+ `\n`+
        ``+` │     `.bgBlack+`${modelCount>0?`SUCCESS`:`FAILURE`}`[`${modelCount>0?`bgBrightGreen`:`bgBrightRed`}`].white.bold+` ${modelCount} model loaded from database                                                                               │ `.bgBlack.white+ `\n`+
        ``+` │     `.bgBlack+`${hookModelCount>0?`SUCCESS`:`FAILURE`}`[`${hookModelCount>0?`bgBrightGreen`:`bgBrightRed`}`].white.bold+` ${hookModelCount} hook loaded from database                                                                                │ `.bgBlack.white+ `\n`+
        ``+` │     `.bgBlack+`${routeCount>0?`SUCCESS`:`FAILURE`}`[`${routeCount>0?`bgBrightGreen`:`bgBrightRed`}`].white.bold+` ${routeCount} routes loaded from express server                                                                        │ `.bgBlack.white+ `\n`+
        ``+` │                                                                                                                        │ `.bgBlack.white+ `\n`+
        ``+` │     Launch time : ${launchTime} ms  (${(launchTime/1000).toFixed(2)} s)                                                                                      │ `.bgBlack.white.italic+ `\n`+
        ``+` │                                                                                                                        │ `.bgBlack.white+ `\n`+
        ``+` │                                                                                                                        │ `.bgBlack.white+ `\n`+
        ``+` │     `.bgBlack.white+`Project access: `.bgBlack.white+`https://?.com`.bgBlack.blue.underline+`                                                                                      │ `.bgBlack.white+ `\n`+
        ``+` │                                                                                                                        │ `.bgBlack.white+ `\n`+
        ``+` │     Powered by `.bgBlack.white+`Gravis Systems`.bgBlack.white.bold+` ® 2024 - Ulysse Pennetier                                                                │ `.bgBlack.white+ `\n`+
        ``+` │                                                                                                                        │ `.bgBlack.white+ `\n`+
        ``+` ╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯ `.bgBlack.white+ `\n`
    );
};


/* Exportations */

module.exports = {
    launchLog
};