const City = require("../models/City");

const getCities = (req, res) => {
    const citiesData = [
        {
            "city": "London",
            "country": "England",
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg"
        },
        {
            "image": "https://media.gq.com.mx/photos/635c136db430aa98c0db8aee/16:9/w_2560%2Cc_limit/ciudad%2520de%2520panama-1204869339.jpg",
            "city": "Panama",
            "country": "Panama"
        },
        {
            "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/20/a5/f9.jpg",
            "city": "Mendoza",
            "country": "Argentina"
        },
        {
            "image": "https://blog.japanwondertravel.com/wp-content/uploads/2022/03/manuel-velasquez-ssfp9okORYs-unsplash.jpg",
            "city": "Tokyo",
            "country": "Japan"
        },
        {
            "image": "https://www.bbva.com/wp-content/uploads/2016/10/Wangjing-BBVA-1024x683.jpg",
            "city": "Pekin",
            "country": "China"
        },
        {
            "image": "https://img2.rtve.es/v/868498/square/?h=400",
            "city": "Barcelona",
            "country": "Spain"
        },
        {
            "image": "https://media.traveler.es/photos/6231abc7d03e1c5549e648ca/16:9/w_2560%2Cc_limit/The%2520Best%2520Places%2520for%2520Female%2520Solo%2520Travelers_Amsterdam_GettyImages-923546342.jpg",
            "city": "Amsterdam",
            "country": "Netherlands"
        },
        {
            "image": "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg",
            "city": "Rome",
            "country": "Italy"
        },
        {
            "image": "https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg",
            "city": "Rio de Janeiro",
            "country": "Brazil"
        },
        {
            "image": "https://images.ecestaticos.com/Eha5BQExbrkOVLCYYSOibX40YRQ=/0x0:1000x750/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F036%2Fcf6%2F706%2F036cf6706198f8ac3e0fbeb0a759e020.jpg",
            "city": "Copenhagen",
            "country": "Denmark"
        },
        {
            "image": "https://www.civitatis.com/blog/wp-content/uploads/2020/05/estambul-un-dia.jpg",
            "city": "Istanbul",
            "country": "Turkey"
        },
        {
            "image": "https://cafedelasciudades.com.ar/wp-content/uploads/2022/12/Guia-turistica-de-Sidney.jpg",
            "city": "Sydney",
            "country": "Australia"
        }
    ];

    City.insertMany(citiesData)
        .then((cities) => {
            res.json({ cities });
        })
        .catch((error) => {
            res.status(500).json({ error: "Error saving cities to database" });
        });
};

const getCity = (req, res) => {
    res.json({
        nation: "Argentina",
        city: "Buenos Aires"
    });
};

const postCity = (req, res) => {
};

module.exports = { getCities, getCity, postCity };
