import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            'id' : 1,
            'role' : 'ADMIN',
            'name' : 'Alex',
            'age' : 26
        } , 
        {
            'id' : 4,
            'role' : 'ENGINEER',
            'name' : 'Jon',
            'age' : 19
        } ,
        {
            'id' : 3,
            'role' : 'INTERN',
            'name' : 'Cass',
            'age' : 17
        }
    ];
    public findAll(role?: 'AMIND' | 'ENGINEER' | 'INTERN') {
        if(role){
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    public findOneId(id : number){
        return this.users.find(user => user.id === id)
    }

    public create(user: createUserDto) {
        const userSortById = [...this.users].sort((a,b) => {return b.id - a.id});
        const newUser = {id : userSortById[0].id + 1, ...user}
        this.users.push(newUser);
        return this.users;
    }

    public update(id : number , newuser: updateUserDto) {
        this.users = this.users.map(user => {
            if(user.id === id) {
                return {...user , ...newuser}
            }
            return user
        })
        return this.users.find(user=> user.id === id)
    }

    public delete(id : number) {
        const user_remove = this.users.find(user => user.id === id);
        this.users = this.users.filter(user => user.id != id);
        return user_remove
    }
    
}
