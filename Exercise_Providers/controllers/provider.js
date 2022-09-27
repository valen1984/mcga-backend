const Provider = require('../models/providers');

  //  CREATE PROVIDER
  const createProvider = (req, res) => {
    const {_id,name,email,adress,telephone}=req.body;  
    const newProvider = {_id,name, email,adress,telephone};
    Provider.create(newProvider)
      .then((data) => res.status(201).json({ msg: "Provider added: ", data , error:false }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}`,data:{},error:true }));
  };

 // GET ALL PROVIDERS
  const getAll = (req, res) => {
    Provider.find()
      .then((data) => res.status(200).json({msg:"All Provider",data,error:false }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}`,data:{},error:true }));
  }

// REMOVE PROVIDER
  const removeProvider = (req, res) => {
    const { _id } = req.params;
    Provider.findByIdAndUpdate( parseInt(_id), { isDeleted: true }, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Provider not found by ID: ${id}`,data:{},error:true });
        return res.status(202).json({ msg: "Provider deleted", data ,error:false});
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` ,data:{},error:true}));
  };

// UPDATE PROVIDER
  const updateProvider= (req, res) => {
    const { _id } = req.params;
    Provider.findByIdAndUpdate(parseInt(_id), req.body, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Provider not found by ID: ${_id}`,data:{},error:true });
        return res.status(202).json({ msg: "Provider updated", data , error:false });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` ,data:{},error:true }));
  };

// EXPORTS ALL

  module.exports = {
    getAll,
    createProvider,
    updateProvider,
    removeProvider
  }; 


  