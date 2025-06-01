import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDto } from 'src/dto/users.dto';
import { User, UserDocument } from 'src/models/user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    FindAll() {
        return this.userModel.find();
    }

    addUser(body: userDto) {
        return this.userModel.create(body);
    }

    updateUser(id: string, body: userDto) {
        return this.userModel.updateOne(
            {_id:id},
            {$set: body},
            {new: true}
        );
    }
    
    deleteUser(id: string) {
        return this.userModel.deleteOne({_id: id});
    }

    Search(key: string) {
        const keyword = key
          ? {
              $or: [
                { fullname: { $regex: key, $options: 'i' } },
                { email: { $regex: key, $options: 'i' } },
              ],
            }
          : {};
        return this.userModel.find(keyword);
      }
    
      Faker() {
        for (let index = 0; index < 30; index++) {
          const fakeUser = {
            fullName: faker.name.fullName(),
            email: faker.internet.email(),
            age: 35,
            country: faker.address.city(),
          };
          this.userModel.create(fakeUser);
        }
        return 'success';
      }
}
