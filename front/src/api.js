export const getGames = async (searchValue, filters) => {
    const res = await fetch(`${process.env.REACT_APP_FLASK_SERVER}?searchValue=${JSON.stringify(searchValue)}&filters=${JSON.stringify(filters)}`)
    
    if (!res.ok) {
        throw new Error("Failed to fetch!");
    }
    
    const json = res.json()

    return json
}