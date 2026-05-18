import {db} from "../config/cons.js"

export const insertTask =({title,description,workspace_id,assignee_id,created_by,due_date})=>{
    const sql = "INSERT INTO tasks (title,description,workspace_id, assignee_id, created_by, due_date) VALUES (?,?,?,?,?,?)"
    return db.execute(sql,[title,description,workspace_id,assignee_id,created_by,due_date])
}


export const findTaskByAssigne = (assigneeId)=>{
    const sql = "SELECT id, title, description, status, priority, due_date, created_at FROM tasks WHERE assignee_id =?"
    return db.execute(sql,[assigneeId])
}

