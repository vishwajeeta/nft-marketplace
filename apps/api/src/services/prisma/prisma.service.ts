import { Injectable, OnModuleInit } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config({ path: require('path').resolve(__dirname, '../../../prisma/.env') });

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
