import { IntersectionType, PartialType } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { FindOptionDto } from 'src/common/dto/find-optino.dto';

export class FindUserDto extends IntersectionType(
  PartialType(UserDto),
  FindOptionDto,
) {}
