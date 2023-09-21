import { Sequelize, DataTypes } from "sequelize";

import db from "../config/db.js";

const Image = db.define("image", {});

export default Image;
