import mongoose from 'mongoose';
import config from './config';

(async () => {
  try {
    const connection =
      process.env.NODE_ENV === 'test'
        ? config.MONGODB_URI_TEST
        : config.MONGODB_URI;
    const db = await mongoose.connect(connection);
    console.log(
      'Mongodb is connected to',
      db.connection.host,
      'in',
      db.connection.name
    );
  } catch (error) {
    console.error(error);
  }
})();
