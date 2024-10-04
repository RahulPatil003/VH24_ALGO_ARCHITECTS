import {Router} from 'express'
import {donorSignUp} from '../../controllers/auth/donor.signup.js'
import { verifyJWT } from '../../middlewares/auth.middleware.js';
import { login } from '../../controllers/auth/login.js';
import { supplierSignUp } from '../../controllers/auth/supplier.signup.js';
import { instituteSignUp } from '../../controllers/auth/institute.signup.js';
const router = Router();

router.route('/donorSignUp').post(donorSignUp);
router.route('/supplierSignUp').post(supplierSignUp);
router.route('/instituteSignUp').post(instituteSignUp)
router.route('/login').post(verifyJWT,login);
export default router; 