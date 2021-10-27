# yogie-betest

npm install first.

Script :
npm run start-dev => start code on dev mode
npm run test => start testing with mocha
npm run start => start server for heroku deploy

Heroku url :
https://ms-yogie-betest.herokuapp.com/jwt/generate => generate jwt (get request)

https://ms-yogie-betest.herokuapp.com/users/all => get all user data (get request)

https://ms-yogie-betest.herokuapp.com/users/accountNum/:accountNum => get user data by account num (get request)

https://ms-yogie-betest.herokuapp.com/users/identityNumber/:identityNumber => get user data by identity number (get request)

https://ms-yogie-betest.herokuapp.com/users/create => create user data (post request). 
required body param : 
{
    "userId" : string,
    "userName" : string,
    "accountNumber" : number,
    "emailAddress" : string,
    "identityNumber" : number
}

https://ms-yogie-betest.herokuapp.com/users/update/accountNum/:accountNum => update data by account number (patch request)
updated body param CAN all of these / some : 
{
    "userId" : string,
    "userName" : string,
    "accountNumber" : number,
    "emailAddress" : string,
    "identityNumber" : number
}

https://ms-yogie-betest.herokuapp.com/users/update/identityNumber/:identityNumber => update data by identity number (patch request)
updated body param CAN all of these / some : 
{
    "userId" : string,
    "userName" : string,
    "accountNumber" : number,
    "emailAddress" : string,
    "identityNumber" : number
}

https://ms-yogie-betest.herokuapp.com/users/delete/accountNum/:accountNum => delete data by account number (delete request)
https://ms-yogie-betest.herokuapp.com/users/delete/identityNumber/:identityNumber => delete data by identity number (delete request)

All url are Protected with JWT except jwt/generate path.

used Redis for cache get data