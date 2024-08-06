import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsIn, IsInt, IsOptional } from 'class-validator';

export class FindOptionDto {
  @ApiProperty({ description: 'Sort by field', default: 'asc' })
  @IsOptional()
  @IsIn(['ase', 'desc'])
  sort?: 'asc' | 'desc' = 'asc';

  @ApiProperty({ description: 'Page number', default: 1 })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page?: number = 1;

  @ApiProperty({ description: 'Number of items per page', default: 10 })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  count?: number = 10;

  @ApiProperty({ description: 'Filter by date', default: new Date(0) })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  from?: Date = new Date(0);

  @ApiProperty({ description: 'Filter by date', default: new Date() })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  to?: Date = new Date();
}
