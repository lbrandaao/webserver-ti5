import { sql } from './db.js'

export class DAOItem {
    
    async create(item, user_id) {
        const { uid, description, safe } = item
        
        await sql`insert into Item (uid, user_id, description, safe) 
                  values (${uid}, ${user_id}, ${description}, ${safe})`
    }

    async list(user_id) {
        const itens = await sql`select uid, description, safe from Item where user_id=${user_id}`

        return itens
    }

    async get(uid) {
        const item = await sql`select uid, description, safe from Item where uid=${uid}`

        return item
    }

    async update(uid, item) {
        const { description, safe } = item
        
        await sql`update Item set description=${description}, safe=${safe} where uid=${uid}`
    }

    async toggleSafe(uid, safe) {        
        await sql`update Item set safe=${!safe} where uid=${uid}`
    }

    async delete(uid) {
        await sql`delete from Item where uid=${uid}`
    }
}