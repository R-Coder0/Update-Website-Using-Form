const bcrypt = require('bcryptjs');

const password = 'password';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Generated hash:', hash);
  }
});
