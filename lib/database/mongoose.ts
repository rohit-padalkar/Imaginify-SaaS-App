import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Explicit cast for global
let cached: MongooseConnection = (global as typeof globalThis & { mongoose: MongooseConnection }).mongoose || { conn: null, promise: null };

if (!cached) {
  cached = { conn: null, promise: null };
}

export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) {
    throw new Error('Missing MONGODB_URL');
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, {
      dbName: 'Imaginify',
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  (global as typeof globalThis & { mongoose: MongooseConnection }).mongoose = cached;

  return cached.conn;
};
