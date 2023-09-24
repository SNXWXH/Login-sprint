import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { SuperCreateDto } from '../../db/super-create.dto';
import { Transform } from 'class-transformer';

export class CreateUserDto extends SuperCreateDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: '이메일을 정확히 입력하세요!' })
  @Transform((params) => {
    console.log('🚀  params:', params);
    return params.value.trim();
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  // @Matches(/^[A-z\d!@#$%^&*()]{8,30}$/, {
  //   message: '암호는 최소 8자리 이상 30자 미만, 영문과 특수문자만 가능합니다!',
  // })
  passwd: string;
}
