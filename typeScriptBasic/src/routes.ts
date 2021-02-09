import { Request, Response } from 'express'
import createUser from './services/CreateUser'



export function hello(req: Request, res: Response){
    const user = createUser({
        name: 'Rodney',
        email: 'teste@x.com',
        password: '123456',
        techs: [
            'JS',
            'ReactJs',
            {name: 'HTML', skill: 100}
        ]
    })
    return res.json({
        msg:'Hello World'
    })
}