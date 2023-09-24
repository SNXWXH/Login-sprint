import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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
    // const { email } = createUserDto;
    // console.log('🚀  email:', email);
    const user = new User({ ...createUserDto });
    const emailCheck = await this.getUser(user.email);
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

  async getUser(email: string) {
    const findEmail = await this.entityManager.findOne(User, {
      where: { email },
    });
    return findEmail;
  }

  async verify({ email, passwd }) {
    const user = await this.getUser(email);
    const { email: userEmail } = user;
    console.log('🚀  user:', user);
    if (!user)
      return {
        status: HttpStatus.BAD_REQUEST,
        message: '존재하지 않는 회원입니다',
      };

    const { passwd: pw } = await this.getUser(email);
    return passwd === pw
      ? {
          status: HttpStatus.OK,
          message: '로그인 되었습니다.',
          userEmail,
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
