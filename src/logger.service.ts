import { Injectable, Scope } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
  constructor(private readonly clsService: ClsService) {}
}
