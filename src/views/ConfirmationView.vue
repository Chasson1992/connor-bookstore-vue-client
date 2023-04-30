<script setup lang="ts">
import ConfirmationTable from "@/components/confirmation/ConfirmationTable.vue";
import { asDollarsAndCents } from "@/main";
import { useOrderDetailsStore } from "@/stores/OrderDetailsStore";
import { computed } from "vue";

const orderDetailsStore = useOrderDetailsStore();
const orderDetails = orderDetailsStore.orderDetails;

const orderDate = computed(function () {
  let date = new Date(orderDetails.order.dateCreated);
  return date.toLocaleTimeString();
});

const ccExpDate = computed(function (): Date {
  return new Date(orderDetails.customer.ccExpDate);
});

const ccExpYear = computed(function (): number {
  return ccExpDate.value.getFullYear();
});

const ccNumber = computed(function (): string {
  let cc = orderDetails.customer.ccNumber.replace("-", "");
  return "************" + cc.substring(cc.length - 4);
});

const ccExpMonth = computed(function (): string {
  let month = ccExpDate.value.getMonth() + 1;
  let result = "" + month;
  if (month < 10) {
    result = "0" + month;
  }
  return result;
});

function subtotalWithShipping(): string {
  let subtotal: number = 0;
  subtotal = orderDetails.order.amount + 5;
  return asDollarsAndCents(subtotal);
}
</script>

<style scoped>
#confirmationView {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1em auto;
}

#confirmationInfo {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

#orderInfo {
  padding: 2rem 0rem 2rem 0rem;
}

#thankYou {
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
}
ul {
  text-align: left;
}
ul > li {
  margin: 0.25em;
}

.cart-button {
  align-self: center;
  width: fit-content;
  background-color: var(--primary-color-dark);
  transition: background-color 0.1s ease;
}

.cart-button * {
  color: white;
}

.cart-button {
  color: white;
}

.no-order {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div v-if="orderDetails.order != null" id="confirmationView">
    <div id="thankYou">
      <h1>Your order is on the way!</h1>
      <i
        class="fa-solid fa-truck truckIcon"
        style="align-self: center; font-size: xx-large; padding-left: 1rem"
      ></i>
    </div>
    <div id="confirmationInfo">
      <h3>Confirmation #: {{ orderDetails.order.confirmationNumber }}</h3>
      <h3>Time: {{ orderDate }}</h3>
    </div>
    <div id="customerInfo">
      <ul>
        <li>Name: {{ orderDetails.customer.customerName }}</li>
        <li>Shipping Address: {{ orderDetails.customer.address }}</li>
        <li>Email: {{ orderDetails.customer.email }}</li>
        <li>Phone Number: {{ orderDetails.customer.phone }}</li>
        <li>
          Credit Card: {{ ccNumber }} ({{ ccExpMonth }} - {{ ccExpYear }})
        </li>
      </ul>
    </div>
    <div id="orderInfo">
      <ConfirmationTable />
      <h3>Shipping: $5.00</h3>
      <h3>Total: {{ subtotalWithShipping() }}</h3>
    </div>
  </div>
  <div v-else class="no-order">
    <h1>Nothing has been ordered.</h1>
    <button class="cart-button button">
      <RouterLink class="continue-shopping" to="/category/Classics">
        Continue Shopping
      </RouterLink>
    </button>
  </div>
</template>
