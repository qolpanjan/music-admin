import axios from "./request"

const sayHello= ()=>{
    return axios.get("/hello")
}

export { sayHello }