const {google} = require('googleapis');
const keys = require('./keys.json');
const client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key, 
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err) {
    if(err) {
        console.log(err);
        return;
    }
    else {
        console.log('Connect successfull!');
        gsrun(client);
    }
});

async function gsrun(cl) {
    const gsapi = google.sheets({version: 'v4', auth: cl});
    const opt = {
        spreadsheetId: '1LBy--VYNcb3VbYdzkUkXtGPOous5Ybgj4BFky-165TA',
        range: 'A1:B5'
    };
    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArray = data.data.values;
    let newdataArray = dataArray.map(function(item) {
        console.log(item);
    });
}