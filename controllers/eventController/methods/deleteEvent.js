import Event from "../../../models/Event.js";

export const deleteEvent = async (req, res) => {
	try {
		const eventId = req.params.id; // Event ID from params

		let event = await Event.findByPk(eventId); // Get event from DB

		if (!event) { // Return error response on missing event
			res.status(404).json({
				status: "failed",
				message: "Event not found",
			});
			return
		}
		
		let deleteResult = await event.destroy(); // Attempt a deletion

		if (!(deleteResult && deleteResult.deletedAt)) { // Rturn error response on failed deletion
			res.status(400).json({
				status: "failed",
				message: "Failed to delete event",
			});
			return 
		}
	
		res.status(200).json({ // Return success response on successful deletion
			success: true,
			message: "Event deleted successfully",
			data: deleteResult,
		});


	} catch (error) {
    res.status(500).json({
      status: "error",
      msg: error.message,
    });
  }


}

