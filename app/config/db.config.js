export default {
  HOST: "ec2-34-234-12-149.compute-1.amazonaws.com",
  USER: "epqqarvuqsmkwo",
  PASSWORD: "704c4769ac82093fb1e4bc2b750e3ac1a153f7096acbc8f652cf025fc08c1a25",
  DB: "d7q6286m7nl70j",
  // HOST: "localhost",
  // USER: "postgres",
  // PASSWORD: "1234",
  // DB: "todo_db",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
