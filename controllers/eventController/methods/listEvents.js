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





// Define a function to retrieve a specific event by ID
export const getEventById = async (req, res) => {
    const eventId = req.params.id;
  
    try {
      const event = await Event.findByPk(eventId);

      if (!event) {
        return res.status(404).json({ 
            status: 'failed',
            message: 'Event not found' 
        });
      }
  
      res.status(200).json({ 
        success: true, 
        message: 'Event retrieved successfully', 
        data: event 
    });

    } catch (error) {
      return res.status(500).json({ error: 'Error retrieving event' });
    }
  };
