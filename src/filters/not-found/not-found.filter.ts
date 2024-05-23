import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

@Injectable()
@Catch()
export class NotFoundExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    switch (exception.getStatus()) {
      case HttpStatus.NOT_FOUND:
        return this.handleNotFoundException(exception, host);
      default:
        throw exception;
    }
  }

  private handleNotFoundException(
    exception: HttpException,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const requestedUrl = response.req.url;
    const status = exception.getStatus();

    response.status(HttpStatus.NOT_FOUND).json({
      statusCode: status,
      message: `La ruta ${requestedUrl} no existe 💀`,
    });
  }
}
