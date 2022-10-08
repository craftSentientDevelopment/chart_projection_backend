import basicBudgetRunner from "../budgetRunners/basicBudgetRunner.js";
import http from "http";

export default function server(data){
    const projection = basicBudgetRunner(data.print);
    
    const PORT = data.port
    
    const server = http.createServer((req, res)=>{
        const {headers, url, method} = req;
        res.write(JSON.stringify(projection.monthlyReport, null));
        res.end();
    });

    server.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`);
    })
}