async function getStatus() {

    try {

        const response =
        await fetch(
        "https://api.mcsrvstat.us/3/jogar.ddcraft.fun"
        );

        const data = await response.json();

        const status =
        document.getElementById("status");

        if(data.online){

            status.innerHTML =
            `🟢 Online - ${data.players.online} jogadores`;

        }else{

            status.innerHTML =
            "🔴 Offline";

        }

    } catch {

        document.getElementById("status")
        .innerHTML =
        "Erro ao obter status";

    }

}

function copyIP(){

    navigator.clipboard.writeText(
    "jogar.ddcraft.fun"
    );

    alert("IP copiado!");
}

getStatus();

setInterval(
getStatus,
30000
);
