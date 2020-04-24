/**
 * Registros de novas ONGs
 */
const generateUniqueId = require('../utils/generateUniqueId');
const crypto = require('crypto');
const connection = require('../database/connection');  


module.exports={

    async index(request, response){
        const ongs = await connection('ongs').select('*');//lista os elementos registrados no BD
   
        return response.json(ongs);
    },


    async create(request,response){
        const {name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueId() ;    //cria elementos no BD

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    
    return response.json({id});
    }
};