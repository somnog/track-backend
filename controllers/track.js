const Track = require('../models/track');

// save new track
 exports.create_track = async (req, res) => {
    try{
        const { title,decription, start_date,end_date, close_date, requirements , fascilitators}= req.body
const new_track =new Track({
     title,
     decription,
     start_date,
     end_date, 
     close_date, 
     requirements , 
     fascilitators
})
await new_track.save()
res.status(201).json(new_track)
    } catch (err){
        res.status(500).json(err)
    }

 };
// get tracks
 exports.get_tracks= async (req, res) =>{
    try {
        const tracks= await Track.find();
        res.status(200).json(tracks)
    } catch(err){
        res.status(500).json(err)
    }
 }

 // get track by id
    exports.get_track= async (req, res) =>{
        try {
            const track= await Track.findById(req.params.id);
            res.status(200).json(track)
        } catch(err){
            res.status(500).json(err)
        }
    }