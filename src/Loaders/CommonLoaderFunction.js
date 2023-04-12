import { getStoredCart } from "../Utilities/fakeDb"



const commonFunctionForGetDetailsData = async () => {
    const detailsData = await fetch('SecondFakeData.json')
    const data = await detailsData.json()
    const getDataFromStorage = getStoredCart()
    let newDetailsArray = [];
    for (const id in getDataFromStorage) {
        const getData = data.find(data => data.id === id)
        if (getData) {
            newDetailsArray.push(getData);
        }
    }
    return {newDetailsArray, data};
}

export default commonFunctionForGetDetailsData;
