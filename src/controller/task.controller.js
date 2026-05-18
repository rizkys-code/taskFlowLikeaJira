import { insertTaskService, getTaskService} from "../service/task.service.js";
import { success,error } from "../response/response.js";

export const inserTaskController = async(req,res)=>{
    try {
        const {title, description, workspace_id, assignee_id,due_date} = req.body
        const created_by = req.user.id
        
        const result = await insertTaskService({title, description, workspace_id, assignee_id,created_by,due_date})
        return success (res,result,"Task Success Added")
    } catch (err) {
        return error(res,err.message)
    }

}


export const getTaskController = async(req,res)=>{
    try {
        const assignId = req.user.id
        const result = await getTaskService(assignId)
        return success(res,result,"complete your task")
    } catch (err) {
        return error(res,err.message)
    }
}