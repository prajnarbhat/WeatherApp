import { useState } from "react";
const SearchData = (props) => {
    

    const [cityName, setCityName] = useState(props.data)

    const changeCityName = (e) => {
        const cityTargetValue = e.target.value;
        setCityName(cityTargetValue)
        props.onCityNameChange(cityTargetValue)
    }
    return (
        <>
            <div>
            <input type="search" name="name" value={cityName} onChange={changeCityName} className="border-b-gray-800 bg-slate-300"/>
            </div>
        </>
    )
}
export default SearchData;
