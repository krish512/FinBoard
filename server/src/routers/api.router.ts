import * as express from 'express';
const router = express.Router();
import { testctrl } from '../controllers';

router.get("/profile", (req, res) => {
  return res.json({ "iU": req.user.iU, "email": req.user.email, "role": req.user.role })
})

router.get("/test", testctrl)

export default router;
