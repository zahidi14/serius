import mongoose from "mongoose";

const Data = mongoose.Schema({
    tanggal:{
        type: String,
        required:true
    },
    pemasukan:{
        type: String,
        required:true
    },
    jumlah:{
        type: Number,
        required:true
    }
});

export default mongoose.model('Date', Data);