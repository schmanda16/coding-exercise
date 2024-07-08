import { Controller, Get, Param } from '@nestjs/common';
import { PurchaseOrders } from '@prisma/client';
import { PurchaseOrdersService } from './purchase-orders.service';

@Controller('purchase-orders')
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {}

  @Get()
  findAll(): Promise<PurchaseOrders[]> {
    return this.purchaseOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PurchaseOrders> {
    return this.purchaseOrdersService.findOne(+id);
  }
}
