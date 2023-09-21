const Event = require('../../../models/Event');

// defines a function to delete events by ID
const deleteEvents = async (req, res) => {
    try {
        const { id } = req.params
        const events = await Event.findOne({
            where: {
                id: id,
            }
        })
        if (!events) {
            res.status(400).json('Event can not be found')
        }

        // deletes events
        await events.destroy()
        res.status(200).json({ message: 'Event has been deleted successfully'});
    } catch (err) {
        res.status(500).json({ error: "Failed to deleted events", message: err.message });
    }
};

module.exports = {
    deleteEvents,
}