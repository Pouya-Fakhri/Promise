function UserLogin(email, password, phonNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        email === "user@gmail.com" &&
        password === 752307093 &&
        phonNumber === 94758239
      ) {
        resolve({email:email,password:password,phonNumber:phonNumber});
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 3000);
  });
}

UserLogin("user@gmail.com", 752307093, 94758239)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
