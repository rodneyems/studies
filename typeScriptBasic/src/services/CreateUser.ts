interface TechsObj{
    name: string
    skill: number
}

interface CreateUserData{
    name?: string
    email: string
    password: string
    techs: Array<string | TechsObj>
}

export default function createUser({name, email, password}:CreateUserData){
    const user ={
        name,
        email,
        password,
    }
    return user
}