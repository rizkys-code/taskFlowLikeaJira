import {insertTask} from "../model/task.model.js"


export const insertTaskService = async ({title,description,workspace_id,assignee_id,created_by,due_date})=>{
    if(!title) throw new Error ("Tittle is required")
        const [result] = await insertTask({title, description, workspace_id, assignee_id,created_by,due_date})
    return result
}