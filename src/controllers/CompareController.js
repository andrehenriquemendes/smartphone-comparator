const Smartphone = require('../models/Smartphone');
const { Op } = require("sequelize");

module.exports = {
    async index(req, res) {
        var ids = req.query.id;
        ids.map(Number);
        const smartphoneList = await Smartphone.findAll({
            attributes: ['id',
                'name',
                'brand',
                'mainimage',
                'otherimages',
                'os',
                'chipset',
                'cpu',
                'gpu',
                'externalmem',
                'internalmem',
                'antutu8',
                'antutu7',
                'geekbenchsingle5',	
                'geekbenchmulti5',
                'geekbenchsingle4',
                'geekbenchmulti4',
                'maincamera',
                'mainespecifications',	
                'mainfunctions',
                'mainvideo',
                'maindxomarkscore',	
                'maindxomarkphoto',
                'maindxomarkvideo',
                'selfiecamera',
                'selfieespecifications',	
                'selfiefunctions',
                'selfievideo',
                'selfiedxomarkscore',
                'selfiedxomarkphoto',
                'selfiedxomarkvideo',
                'technology',
                'numbercolors',
                'inches',
                'screenarea',
                'format',
                'resolution',
                'pixelsdensity',
                'protection',
                'screenextrafeatures',	
                'release',
                'dimensions',
                'weight',
                'material',
                'colors',
                'battery',
                'batterylife',
                'sim',
                'network',
                'speed',
                'gprs',
                'edge',
                'wifi',
                'gps',
                'nfc',
                'usb',
                'bluetooth',
                'irradiation',
                'radio',
                'headphonejack',	
                'others',
                'otherfeatures',
                'sensors',
                'linkMagalu',
                'kiDesignMaterial',
                'kiHardware',
                'kiCamera',
                'kiConnectivity',
                'kiBattery',
                'productBase'
            ],
            where: {
                id: {
                    [Op.or]: ids
                }
            }
        });

        return res.json(smartphoneList);

    }
}