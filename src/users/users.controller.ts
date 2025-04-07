import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(private userService : UsersService) {};

    @Get()
    findAll(@Query('role') role?: 'AMIND' | 'ENGINEER' | 'INTERN') {
        return this.userService.findAll(role);
    }

    @Get(':id')
    findOneId(@Param('id') id : string) {
        return this.userService.findOneId(Number(id));
    }


    @Post()
    create(@Body(ValidationPipe) user: createUserDto){
        return this.userService.create(user)
    }

    @Patch(':id')
    update(@Param('id') id:string , @Body(ValidationPipe) user: updateUserDto) {
        return this.userService.update(+id , user);
    }

    @Delete(':id')
    deleteId(@Param('id') id:string) {
        return this.userService.delete(+id);
    }
}
