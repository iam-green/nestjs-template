import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsUUID } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'User ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'User Created Date' })
  @IsDate()
  created: Date;
}
