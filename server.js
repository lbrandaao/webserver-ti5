import { fastify } from 'fastify'
import { DAOItem } from './dao-item.js'

const server = fastify()

const daoitem = new DAOItem()

server.post('/item', async (request, reply) => {
    const { uid, description, safe } = request.body
    
    /** 
     * Processo de autenticação
    */
    const user_id = 1
    
    await daoitem.create({uid, description, safe}, user_id)

    return reply.status(201).send()
})

server.get('/item', async (request, reply) => {
    /** 
     * Processo de autenticação
    */
    const user_id = 1
    
    const itens = await daoitem.list(user_id)

    return itens
})

server.put('/item/:uid', async (request, reply) => {
    const uid = request.params.uid
    const { description, safe } = request.body

    const item = {
        description,
        safe
    }

    /** 
     * Processo de autenticação
    */
    const user_id = 1

    await daoitem.update(uid, item)

    return reply.status(204).send()
})

server.patch('/item/:uid', async (request, reply) => {
    const uid = request.params.uid

    /** 
     * Processo de autenticação
    */
    const reader_id = 1

    const item = await daoitem.get(uid)

    if (item.length != 0) {
        await daoitem.toggleSafe(uid, item[0].safe)

        return reply.status(204).send()
    }

    return reply.status(404).send()
})

server.delete('/item/:uid', async (request, reply) => {
    const uid = request.params.uid

    /** 
     * Processo de autenticação
    */
    const user_id = 1

    await daoitem.delete(uid)

    return reply.status(204).send()
})

server.listen( {
    port: process.env.PORT ??  3333,
} )