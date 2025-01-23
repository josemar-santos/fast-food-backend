import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { CustomerConflictException } from "../../core/exceptions/conflict.exception";
import { Request, Response } from 'express';

@Catch(CustomerConflictException)
export class ConflictExceptionHandler implements ExceptionFilter {
    catch(exception: CustomerConflictException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        
        response
            .status(status)
            .json({
                statusCode: HttpStatus.CONFLICT,
                message: exception.message,
                error: "CONFLICT"
            });
    }

}