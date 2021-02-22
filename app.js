let uri =
  "mongodb+srv://user-1:" +
  process.env.PW +
  "@freecodecamp.rm0nv.mongodb.net/test?retryWrites=true&w=majority";
let mongoose = require("mongoose");
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
