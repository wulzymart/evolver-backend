import Event from '../../../models/Event.js'


// Define a function to retrieve all event
export const listAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();

    return res.status(200).json({ 
        status: 'success', 
        message: 'Events retrieved successfully', 
        data: events 
    });

  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving events' });
  }
};


