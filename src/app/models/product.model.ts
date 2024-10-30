export class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public imageUrl: string = '',
    public onSale: boolean = false
  ) {}
}
