import express from "express";
import { guardarTestimonial } from "../controllers/testimonialCotroller.js";
import { 
    paginaInicio, 
    paginasNosotros, 
    paginasViajes, 
    paginasTestimoniales, 
    paginaDetalleViajes 
} from '../controllers/paginasController.js'



const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginasNosotros);

router.get('/viajes', paginasViajes);
router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginasTestimoniales);
router.post('/testimoniales', guardarTestimonial);

 
export default router;