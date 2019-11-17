
const getPercentages = (stocks) => {
    var data = [];

    for (let i = 0; i < stocks.length; i++) {
        data.push({
            name: stocks[i]['symbol'],
            y: stocks[i]["value"]
        })
    }

    return data;
}

export { getPercentages };