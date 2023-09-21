// imports the event model
import Event from '../../../models/Event';


// defines a function to update an event by id
const updateEvent = async (req, res) => {
    try {

        // retrieves id as parameter
        const eventId = req.params.id;

        // checks if id is provided and an UUID
        if (!eventId || !isValidUuid(eventId)) { throw new Error('missing or Invalid ID') };
        // finds events by its ID 
        const events = await Event.findOne({
            where:{
                id: eventId,
            }
        });
        if (!events) {
            res.status(404).json('Event can not be found');
        };
        // update events with the data from req body
        await events.update(req.body)
        // returns a successful code and message if events gets updated
        res.status(200).json({ message: 'Event has been updated successfully'});
    // error handling
    } catch(err) {
        res.status(500).json({ error: "Failed to update Events", message: err.message });
    };
};


module.exports = {
    updateEvent,
};