import {Router} from 'express'
import {donorSignUp} from '../../controller/auth/donor.signup.js'
import { verifyJWT } from '../../middlewares/auth.middleware.js';
import { login } from '../../controller/auth/login.js';
import { supplierSignUp } from '../../controller/auth/supplier.signup.js';
import { instituteSignUp } from '../../controller/auth/institute.signup.js';
const router = Router();

router.route('/donorSignUp').post(donorSignUp);
router.route('/supplierSignUp').post(supplierSignUp);
router.route('/instituteSignUp').post(instituteSignUp)
router.route('/login/:type').post(verifyJWT,login);
export default router; 