import Data from "../model/Model.js";

export const getDate = async (req, res)=>{
    try{
        const input = await Data.find();
        res.json(input)
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getDateById = async (req, res) =>{
    try{
        const data = await Data.findById(req.params.id);
        res.json(data);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const saveData = async (req, res) =>{
    const data = new Data(req.body);
    try{
        const insertedData = await data.save();
        res.status(201).json(insertedData);
    }catch (error){
        res.status(400).json({message: error.message});
    }

}

export const updateData = async (req, res) =>{
    try{
        const updatedData = await Data.updateOne({_id:req.params.id}, {$set:req.body});
        res.status(200).json(updatedData);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteData = async (req, res) => {
    try{
        const deletedData = await Data.deleteOne({_id:req.params.id});
        res.status(200).json(deletedData);
    }catch (error){
        res.status(400).json({message: error.message});
    }
}