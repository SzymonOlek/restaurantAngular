import { UserDto } from './userDto';

export class Employee {

    id: string;
    name: string;
    surname: string;
    user: UserDto;
    role: Role;
    password: string;
    restaurant: string;
    username: string;

}

enum Role {
    'ADMIN',
    'MANAGER',
    'EMPLOYEE'
}
