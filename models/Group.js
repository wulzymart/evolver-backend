import { Sequelize, DataTypes } from "sequelize";

import db from "../config/db.js";

const Group = db.define("group", {});

export default Group;
