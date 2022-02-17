/**
 * @author: Daniel Dukundane
 */
import { HttpException, HttpStatus } from '@nestjs/common';

export class TokenNotFoundException extends HttpException {
    constructor(message: string) {
        super(
            {
                status: HttpStatus.NOT_FOUND,
                error: message,
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
