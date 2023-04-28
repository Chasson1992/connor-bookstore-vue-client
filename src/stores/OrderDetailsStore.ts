import type { OrderDetails } from "@/types";
import { defineStore } from "pinia";

const ORDER_DETAIL_STORAGE_KEY = "OrderDetails";

export const useOrderDetailsStore = defineStore("OrderDetailStore", {
  state: () => {
    const initOrderDetails = {} as OrderDetails;
    const orderDetailsString = sessionStorage.getItem(ORDER_DETAIL_STORAGE_KEY);
    if (orderDetailsString !== null) {
      const orderDetailsFromStorage = JSON.parse(
        orderDetailsString
      ) as OrderDetails;
      Object.assign(initOrderDetails, orderDetailsFromStorage);
    }
    return {
      orderDetails: initOrderDetails,
    };
  },

  actions: {
    clearOrderDetails() {
      this.orderDetails = {} as OrderDetails;
      sessionStorage.setItem(
        ORDER_DETAIL_STORAGE_KEY,
        JSON.stringify(this.orderDetails)
      );
    },
    hasOrderDetails(): boolean {
      return (
        Object.keys(this.orderDetails).length === 0 &&
        this.orderDetails.constructor === Object
      );
    },
    setOrderDetails(orderDetails: OrderDetails) {
      this.orderDetails = orderDetails;
      sessionStorage.setItem(
        ORDER_DETAIL_STORAGE_KEY,
        JSON.stringify(this.orderDetails)
      );
    },
  },
});
