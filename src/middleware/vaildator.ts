import {check} from "express-validator";
import {showApiError} from "./authMiddleware";

export const loginVaildator = [
    check('username').exists().isLength({min: 4}),
    check('password').exists().isLength({min: 4}),
    showApiError
];