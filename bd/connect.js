const { MongoClient, Db } = require("mongodb");

let client = null;

function connecter(url,callback) {
    if (client === null) {
        client = new MongoClient(url);

        client.connect((err)=>{
            if (err) {
                client = null;
                callback(err)
            } else {
                callback()
            }
        })
    }else{
        callback()
    }
}

function bd() {
    return new Db(client,"gestion_avis")
}

function fermerConnexion() {
    if (client) {
        client.close();
        client = null;
    }
}

module.exports = {connecter,bd,fermerConnexion}