import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const Role = model('Role', schema);

module.exports = Role;
