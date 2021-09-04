const { response } = require("express");
const annotations = require("../models/annotationsData");


module.exports = {

    async read(req, res) {
        const AnnotationList = await annotations.find();
        return await res.json(AnnotationList)
    },


    async delete(req, res){
        const { id } = req.params;
        const annotationDeleted = await annotations.findOneAndDelete({ _id: id })

        if(annotationDeleted){return res.json(annotationDeleted);}
        return res.status(401).json({error: "não foi encontrado registro pra deletar"})



    },
    
    async create(req, res){
        console.log(req.body)
        const { title, notes, priority } = req.body;
        if(!notes || !title){
            return res.status(400).json({error: "precisa de um titulo ou anotação"})
        }
        const annotationCreated = await annotations.create({
            title,
            notes,
            priority
        });
        return res.json(annotationCreated);
    }
}