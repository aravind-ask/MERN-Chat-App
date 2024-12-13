import express from 'express'
import { checkAuth, logout, signIn, signup, updateProfile } from '../controllers/auth.controller.js'
import { protectRoute } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signIn)
router.post("/logout", logout)
router.put("/update", protectRoute,updateProfile)
router.get("/check", protectRoute,checkAuth)

export default router