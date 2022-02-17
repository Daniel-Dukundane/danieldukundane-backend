/**
 * @author: Daniel Dukundane
 */
import { ApiProperty } from '@nestjs/swagger';
import { Timestamp } from 'rxjs';

export class CreateMeter {
    @ApiProperty({})
    meterNumber: number;
    @ApiProperty({})
    daysRemaining: number;
    @ApiProperty({})
    createdAt: Date | string;
    @ApiProperty({})
    updatedAt?: Date | string;
}
