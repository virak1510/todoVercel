import type { PageServerLoad } from './$types';
import {prisma} from '$lib/server/prisma';


export const load = (async () => {
    const todos = await prisma.todos.findMany({
        take:50,
        orderBy:{
            id:'asc'
        }
    });
    return {todos};
}) satisfies PageServerLoad;

export const actions = {
    create_todo: async(event)=>{
        const form = Object.fromEntries(await event.request.formData())as any
        await prisma.todos.create({
            data:{
                todo:form.todo
            }
        })
    },
    update_status: async (event)=>{
        const form = Object.fromEntries(await event.request.formData())as any
        const id = event.url.searchParams.get('id');
        let status = form.status == 'true' ? false : true;
        await prisma.todos.update({
            where:{
                id:Number(id)
            },
            data:{
                done:status
            }
        })
        return
    }
}