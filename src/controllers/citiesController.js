const getCities = (req, res) => {
    res.json({
        cities: [
            {
            ciudad: "Ezeiza",
            pais: "Argentina",
        },
        {
            ciudad: "Tempemley",
            pais: "Argentina"
        }
        ]
})
}
module.exports = {getCities}