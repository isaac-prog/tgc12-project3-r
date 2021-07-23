import React, {useState, useContext} from "react"
import axios from "axios";
import config from "../config";
import UserContext from "../UserContext";
export default function cartPage(){
    const [cart, setCart] = useState("");
    const userContext = useContext(userContext);

    async function cart(){
        let response = await axios.get(config.API_URL + "/carts/index",{
            
        })
    }
}
