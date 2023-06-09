"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const logout_1 = require("../controllers/logout");
const unwrapCookies_1 = __importDefault(require("../middlewares/unwrapCookies"));
router.post('/', unwrapCookies_1.default, logout_1.logout);
module.exports = router;
