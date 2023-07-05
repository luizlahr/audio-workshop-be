import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('favicon.ico')
export class FaviconController {
  @Get('/')
  @HttpCode(204)
  read() {
    // overrides weird browser behavior.
    return;
  }
}
