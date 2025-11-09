import { Viaje } from "../models/Viaje.js";
import { where } from "sequelize";
import { Where } from "sequelize/lib/utils";
import { Testimonial } from "../models/Testimoniales.js";


const paginaInicio = async (req, res) =>{ 
    const promiseDB = []
    promiseDB.push( await Viaje.findAll({ limit: 3 }) )
    promiseDB.push( await Testimonial.findAll({ limit: 3 }) )
    
    try {
        const resultado = await Promise.all(promiseDB)

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        }); 
    } catch (error) {
        console.log(error)
    }
}

const paginasNosotros = (req, res) =>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}
const paginasViajes = async (req, res) =>{
    //Consultar BD
    const viajes = await Viaje.findAll();

    console.log(viajes)

    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    });
}
const paginasTestimoniales = async (req, res) =>{
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales',{
        pagina: 'Testimoniales',
        testimoniales
    });
    } catch (error) {
        console.log(error)
    }
}

//Muestra un viaje por su slug
const paginaDetalleViajes = async (req, res) => {

    console.log(req.params);

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({where : { slug }});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio, 
    paginasNosotros,
    paginasViajes,
    paginasTestimoniales,
    paginaDetalleViajes
};