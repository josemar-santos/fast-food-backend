import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, NotFoundException } from "@nestjs/common";
import { Response } from 'express';
import { CustomerNotFoundExecption } from "../../core/exceptions/not-found.exception";

@Catch(CustomerNotFoundExecption)
export class NotFoundExceptionHandler implements ExceptionFilter {
    catch(exception: CustomerNotFoundExecption, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        
        response
            .status(status)
            .json({
                statusCode: HttpStatus.CONFLICT,
                message: exception.message,
                error: "NOT FOUND"
            });
    }

}