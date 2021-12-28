import type {IncomingMessage , ServerResponse} from 'http'
import * as url from 'url'
export default async (req:IncomingMessage , res:ServerResponse) =>{
    const queryObject =url.parse( req.url as string, true).query
    let data = {data : ""}
    const {search} = queryObject
    console.log(search)
    if( search){
        data = await $fetch(`http://localhost:3000/api/v1/departements/${search}`)
    }else{
        data = await $fetch(`http://localhost:3000/api/v1/departements`)
    }

    res.writeHead(200, {"Content-Type": "application/json"})
    res.write(JSON.stringify(data))
    res.end()
}