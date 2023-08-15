import { createContext, useEffect, useState } from "react";
import {housesData} from "../data"

export const HousesData = createContext()

export const HousesDataProvider = ({children})=>{

    const [houses, setHouses] = useState(housesData)
    const [loading, setLoading] = useState(false)
    const [country, setCountry] = useState("Location (any)")
    const [countries, setCountries] = useState([])
    const [property, setProperty] = useState("Property type (any)")
    const [properties, setProperties] = useState([])
    const [price, setPrice] = useState("Price range (any)")

    const handelClick = ()=>{

        setLoading(true)

        const isDefault = (select)=>{
            return select.split(" ").includes("(any)")
        }
        
        const minPrice = Number.parseInt(price.split(" ")[0])
        const maxPrice = Number.parseInt(price.split(" ")[2])

        const newHouses = housesData.filter(house =>{
            const housePrice = parseInt(house.price)
            // check if all values is default
        if(isDefault(country) && isDefault(property) && isDefault(price)){
            console.log("ok")
            return house
        }
            // check if all values is selscted
        if(
            house.country === country &&
            house.type === property &&
            housePrice >= minPrice &&
            housePrice <= maxPrice
        ) return house
            // check if country is selected
        if(
            house.country === country &&
            isDefault(property) &&
            isDefault(price)
        )return house
            // check if property is selected
        if(
            isDefault(country) &&
            house.type === property &&
            isDefault(price)
        )return house
            // check if price is selected
        if(
            isDefault(country) &&
            isDefault(property) &&
            !isDefault(price)
        ){
            if(housePrice >= minPrice && housePrice <= maxPrice) {
                return house
            } 
        }
            // check if country & property is selected and price is not
        if(
            house.country === country&&
            house.type === property &&
            isDefault(price)
        ) return house
            // check if price & property is selected and country is not
        if(
            isDefault(country)&&
            house.type === property &&
            !isDefault(price)
        ) {
            if(housePrice >= minPrice && housePrice <= maxPrice){
                return house
            }
        }
            // check if price & country is selected and property is not
        if(
            house.country === country &&
            isDefault(property)&&
            !isDefault(price)
        ) {
            if(housePrice >= minPrice && housePrice <= maxPrice){
                return house
            }
        }

        })
        
        setTimeout(() => {
            return newHouses.length < 1 ?
                setHouses([]):
                setHouses(newHouses),
                setLoading(false)
                
        }, 1000);

    }

    useEffect(()=>{
        const allCountries = housesData.map(house => {
            return house.country
        })
        const uniqeCointries = ["Location (any)", ...new Set(allCountries)]
        setCountries(uniqeCointries)
    },[])
    useEffect(()=>{
        const allProperies = housesData.map(house => {
            return house.type
        })
        const uniqeProperies = ["Property type (any)", ...new Set(allProperies)]
        setProperties(uniqeProperies)
    },[])

    return <HousesData.Provider value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        handelClick,
        loading,
        
    }}>
        {children}
    </HousesData.Provider>
}
