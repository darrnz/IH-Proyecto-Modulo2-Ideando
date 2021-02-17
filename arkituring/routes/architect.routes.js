const  {Router} = require('express');
const router = new Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Architect = require('../models/Architect.model')
//const { routes } = require('../app');

//RUTAS

//Main profile
router.get ('/architect-main', async(req,res) =>{
    if(req.session.currentArchitect){
        const architectId= req.session.currentArchitect._id
    
        const clientProjects = await Architect.findById(architectId)
                                .populate('projectConstId client')
                                .populate({
                                    path:'client',
                                    model:'Client'}
                                )
                              
                               
        console.log(clientProjects)
        //console.log(req.session.currentClient)
        res.render('Architect/main/archi-main',
         {valueCookie:req.session.currentArchitect,
          projectsId:clientProjects  
        })
        }
        })

//proyecto muestra home

router

//EXPORTACION
module.exports = router
