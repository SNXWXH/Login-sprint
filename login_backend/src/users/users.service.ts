import {
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly entityManager: EntityManager,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User({ ...createUserDto });
    const emailCheck = await this.findByEmail(user.email);
    if (emailCheck) {
      return {
        status: HttpStatus.CONFLICT,
        message: '중복된 이메일입니다 다른 이메일을 입력해주세요',
      };
    }

    this.entityManager.save(user);
    return {
      status: HttpStatus.CREATED,
      message: '회원가입이 완료되었습니다',
    };
  }

  async findByEmail(email: string) {
    const findEmail = await this.entityManager.findOne(User, {
      where: { email },
    });
    if (!findEmail) throw new NotFoundException('존재하지 않는 유저입니다.');
    return findEmail;
  }

  async verify(email: string, pw: string) {
    const { passwd } = await this.findByEmail(email);
    return passwd === pw
      ? {
          status: HttpStatus.OK,
          message: '로그인 되었습니다.',
        }
      : {
          status: HttpStatus.BAD_REQUEST,
          message: '비밀번호를 다시 입력해주세요.',
        };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
