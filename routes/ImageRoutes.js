import express from "express";

const ImageRoutes = express.Router();

ImageRoutes.post("/comments/:commentId/images", addImageToComment);

export default ImageRoutes;
