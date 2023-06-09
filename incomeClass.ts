// income.class.ts

class Income {
    private transactionDate: Date;
    private rent: number;
    private driver: number;
    private order: number;
    private orderPerKm: number;
    private total: number;
  
    constructor(
      transactionDate: Date,
      rent: number,
      driver: number,
      order: number,
      orderPerKm: number,
      total: number
    ) {
      this.transactionDate = transactionDate;
      this.rent = rent;
      this.driver = driver;
      this.order = order;
      this.orderPerKm = orderPerKm;
      this.total = total;
    }
  
    getInfo(): {
      transactionDate: Date;
      rent: number;
      driver: number;
      order: number;
      orderPerKm: number;
      total: number;
    } {
      return {
        transactionDate: this.transactionDate,
        rent: this.rent,
        driver: this.driver,
        order: this.order,
        orderPerKm: this.orderPerKm,
        total: this.total,
      };
    }
  }
  
  export default Income;
  