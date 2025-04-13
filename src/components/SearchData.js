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
            <div className="flex items-center justify-center">
            <form className="nosubmit">
                <input type="search" className="nosubmit rounded-lg p-7 bg-slate-300 border-b-gray-800 bg-slate-300" placeholder="Search" name="name" value={cityName} onChange={changeCityName} />
            </form>
            </div>
        </>
    )
}
export default SearchData;
