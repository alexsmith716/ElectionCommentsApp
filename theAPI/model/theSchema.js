
console.log('####### > theSchema.js ');

var mongoose = require('mongoose');

var electionCommentsAppSchema = new mongoose.Schema({
	firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    candidate: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    time: {
        type: Number,
        required: true
    }
});

// specifying mongo collection name: 'electionCommentsAppCollection'
mongoose.model('ElectionCommentsAppModel', electionCommentsAppSchema, 'electionCommentsAppCollection');

/*

db.superBasicApiAppCollection.save({firstName:"Charlie",lastName:"Chaplin",theText:"NumquamXXX itaque et hic reiciendis."})
db.superBasicApiAppCollection.save({firstName:"Rodney",lastName:"Dangerfield",theText:"Agggg Numquam Yuummm itaque et hic reiciendis."})

*/