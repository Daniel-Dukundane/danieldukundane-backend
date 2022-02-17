import { ApiProperty } from '@nestjs/swagger';

export class PurchaseElectricityDto {
    @ApiProperty({})
    price: number;
    @ApiProperty({})
    meterNumber: number;
}
