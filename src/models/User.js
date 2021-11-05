import { Schema, model } from 'mongoose';
import { genSaltSync, hashSync, compare } from 'bcrypt';

const schema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    roles: [{ ref: 'Role', type: Schema.Types.ObjectId }],
    registers: [{ ref: 'Register', type: Schema.Types.ObjectId }],
  },
  { versionKey: false, timestamps: true }
);

schema.statics.encryptPassword = async (password) => {
  const salt = await genSaltSync(10);
  return await hashSync(password, salt);
};
schema.statics.comparePassword = async (password, recivedpassword) => {
  return await compare(password, recivedpassword);
};

const User = model('User', schema);

module.exports = User;
