import server from "./utils/servers/server.js";

function main(){
    const data = {port:"5000", print:false}
    server(data);
}

main();