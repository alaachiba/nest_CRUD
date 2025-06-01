import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { userDto } from 'src/dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get("/getAllUsers")
    getUsers() {
        return this.service.FindAll();
    }

    @Post("/addUser")
    addUser(@Body() body:userDto) {
        return this.service.addUser(body);
    }

    @Put("/updateUser/:id")
    updateUser(@Param('id') id: string, @Body() body: userDto) {
        return this.service.updateUser(id, body);
    }

    @Delete("/deleteUser/:id")
    deleteUser(@Param('id') id: string) {
        return this.service.deleteUser(id);
    }

    @Post("/search")
    searchUser(@Query('key') key) {
        return this.service.Search(key);
    }

    @Post("/faker")
    addMany() {
        return this.service.Faker()
    }
} 
