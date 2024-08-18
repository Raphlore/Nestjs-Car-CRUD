import mongoose from 'mongoose';

//import = as mongoose

export const CarSchema = new mongoose.Schema({
  id: Number,
  brand: String,
  color: String,
  model: String,
});
