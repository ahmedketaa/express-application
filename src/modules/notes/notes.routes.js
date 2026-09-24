
import express from 'express'
import { addNote, deleteNote, getAllNotes, updateNote } from './notes.controller.js'
import { verifyToken } from '../../middlewares/verfiyToken.js'

export  const noteRoutes = express.Router()

noteRoutes.use(express.json())

//  noteRoutes.use(verifyToken)

noteRoutes.get("/notes", getAllNotes)

noteRoutes.post("/note", addNote)

noteRoutes.put("/note/:id", updateNote)

noteRoutes.delete("/note/:id", deleteNote )

