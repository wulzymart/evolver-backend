import GroupMembership from "../../../models/GroupMembership.js";

async function getGroupDetails(req, res) {
    const { groupId } = req.params;

    try {
        const groupDetails = await GroupMembership.findOne({ where: {group_id: groupId}});
        if (groupDetails == null) return res.status(404).json({message: "Group not found"});

        return res.status(200).json({
            message: "Group Details fetched successfully",
            groupDetails
        })
    } catch (err) {
        console.error("Error fetching group details: ", err);
        res.status(500).json({ message: "Internal server error." });
    }
}
  
export default getGroupDetails;