async function addImageToComment(req, res) {
  const { commentId } = req.params;
  const { url } = req.body;

  try {
    const newImage = await Image.create({
      url,
      comment_id: commentId,
    });

    res.status(200).json({ message: "Image successfully added to comment." });
  } catch (err) {
    console.error("Error creating image: ", err);
    res.status(500).json({ message: "Internal server error." });
  }
}
