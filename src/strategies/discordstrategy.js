const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
//const DiscordUser = require('../models/DiscordUser');
const user="test"; user.id="187090775819946936"; user.username = "Nasicas"  

//passport.serializeUser((user, done)=> {
passport.serializeUser((user, done)=> {

    //Serializing User
   // console.log(user+"ici");
   // done(user, null);
     done();

});

//passport.deserializeUser((id, done) => {
    passport.deserializeUser((id, done) => {

    // Deserializing User
   // if(user) done(null, user);
});

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope:['identify', 'guilds']
},(accessToken, refreshToken, profile, done) =>{


  //   console.log(profile.username);
     //bdd
   // done(null, user);
   done();

/*      try{
            const user = await DiscordUser.findOne({ discordId: profile.id});
            if(user) {
                done(null, user);
             } else {
                const newUser =  await DiscordUser.create({
                    discordId: profile.id,
                    username: profile.username
                });
                const savedUser = await newUser.save();
                done(null,savedUser);
            }
        }
        catch(err) {
            console.log(err);
            done(err, null);
        }*/
}));

