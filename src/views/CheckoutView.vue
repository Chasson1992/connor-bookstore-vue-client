<script setup lang="ts">
import { reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  maxLength,
  minLength,
  required,
  email,
} from "@vuelidate/validators";
import { useCartStore } from "@/stores/CartStore";
import { asDollarsAndCents } from "@/main";
import CheckoutFieldError from "@/components/checkout/CheckoutFieldError.vue";
import { isCreditCard, isMobilePhone } from "@/validators";
import router from "@/router";
import type { OrderDetails, ServerErrorResponse } from "@/types";

const cartStore = useCartStore();
const cart = cartStore.cart;

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = reactive({
  name: "",
  address: "",
  phone: "",
  email: "",
  ccNumber: "",
  ccExpiryMonth: new Date().getMonth() + 1,
  ccExpiryYear: new Date().getFullYear(),
  checkoutStatus: "",
});

const rules = {
  name: {
    required: helpers.withMessage("Please provide a name.", required),
    minLength: helpers.withMessage(
      "Name must have at least 4 letters.",
      minLength(4)
    ),
    maxLength: helpers.withMessage(
      "Name can have at most 45 letters.",
      maxLength(45)
    ),
  },
  address: {
    required: helpers.withMessage("Please provide an address.", required),
    minLength: helpers.withMessage(
      "Name must have at least 4 letters.",
      minLength(4)
    ),
    maxLength: helpers.withMessage(
      "Name can have at most 45 letters.",
      maxLength(45)
    ),
  },
  email: {
    required: helpers.withMessage("Please provide an email address.", required),
    email,
  },
  phone: {
    required: helpers.withMessage("Please provide a phone number.", required),
    phoneNumber: helpers.withMessage(
      "Please provide a valid phone number.",
      (value: string) => isMobilePhone(value)
    ),
  },
  ccNumber: {
    required: helpers.withMessage(
      "Please provide a credit card number.",
      required
    ),
    creditCardNumber: helpers.withMessage(
      "Please proviate a valid credit card number.",
      (value: string) => isCreditCard(value)
    ),
  },
};
const v$ = useVuelidate(rules, form);

async function submitOrder() {
  console.log("Submit order");
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) {
    form.checkoutStatus = "ERROR";
  } else {
    try {
      form.checkoutStatus = "PENDING";
      serverErrorMessage.value = defaultServerErrorMessage;

      const placeOrderResponse: OrderDetails | ServerErrorResponse =
        await cartStore.placeOrder({
          name: form.name,
          address: form.address,
          phone: form.phone,
          email: form.email,
          ccNumber: form.ccNumber,
          ccExpiryMonth: form.ccExpiryMonth,
          ccExpiryYear: form.ccExpiryYear,
        });

      if ("error" in placeOrderResponse) {
        form.checkoutStatus = "SERVER_ERROR";
        serverErrorMessage.value = placeOrderResponse.message;
        console.log("Error placing order", placeOrderResponse);
      } else {
        form.checkoutStatus = "OK";
        await router.push({ name: "confirmation-view" });
      }
    } catch (e) {
      form.checkoutStatus = "SERVER_ERROR";
      serverErrorMessage.value = defaultServerErrorMessage;
      console.log("Exception thrown", e);
    }
  }
}

function yearFrom(index: number) {
  return new Date().getFullYear() + index;
}

function subtotal(): string {
  let subtotal: number = 0;

  cartStore.cart.items.forEach((item) => {
    subtotal += item.book.price * item.quantity;
  });

  return asDollarsAndCents(subtotal);
}

function subtotalWithShipping(): string {
  let subtotal: number = 0;

  cartStore.cart.items.forEach((item) => {
    subtotal += item.book.price * item.quantity;
  });

  subtotal += 5;

  return asDollarsAndCents(subtotal);
}

const defaultServerErrorMessage =
  "An unexpected error occurred, please try again.";
const serverErrorMessage = ref(defaultServerErrorMessage);
</script>

<style scoped>
.checkout-page {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.checkout-page-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
}

form {
  display: flex;
  flex-direction: column;
}

form > div {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2em;
}

form > div > input,
form > div > select {
  margin-left: 2em;
}

form > .error {
  text-align: right;
}

.checkoutStatusBox {
  margin: 1em;
  padding: 1em;
  text-align: center;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
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
</style>

<template>
  <div class="checkout-page">
    <section class="checkout-page-body" v-if="!cart.empty">
      <form @submit.prevent="submitOrder">
        <CheckoutFieldError :fieldName="v$.name"></CheckoutFieldError>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            size="40"
            id="name"
            name="name"
            v-model.lazy="v$.name.$model"
          />
        </div>

        <CheckoutFieldError :fieldName="v$.address"></CheckoutFieldError>
        <div>
          <label for="address">Address</label>
          <input
            type="text"
            size="40"
            id="address"
            name="address"
            v-model.lazy="v$.address.$model"
          />
        </div>

        <CheckoutFieldError :fieldName="v$.phone"></CheckoutFieldError>
        <div>
          <label for="phone">Phone</label>
          <input
            class="textField"
            type="text"
            size="40"
            id="phone"
            name="phone"
            v-model.lazy="v$.phone.$model"
          />
        </div>

        <CheckoutFieldError :fieldName="v$.email"></CheckoutFieldError>
        <div>
          <label for="email">Email</label>
          <input
            type="text"
            size="40"
            id="email"
            name="email"
            v-model.lazy="v$.email.$model"
          />
        </div>

        <CheckoutFieldError :fieldName="v$.ccNumber"></CheckoutFieldError>
        <div>
          <label for="ccNumber">Credit card</label>
          <input
            type="text"
            size="40"
            id="ccNumber"
            name="ccNumber"
            v-model.lazy="v$.ccNumber.$model"
          />
        </div>

        <div>
          <label>Exp Date</label>
          <select v-model.lazy="v$.ccExpiryMonth">
            <option
              v-for="(month, index) in months"
              :key="index"
              :value="index + 1"
            >
              {{ month }} ({{ index + 1 }})
            </option>
          </select>
          <select v-model="v$.ccExpiryYear">
            <option v-for="index in 15" :key="index">
              {{ yearFrom(index) }}
            </option>
          </select>
        </div>
        <div>Cart : {{ subtotal() }}</div>
        <div>Shipping : $5.00</div>
        <div>Total : {{ subtotalWithShipping() }}</div>

        <input
          type="submit"
          name="submit"
          class="cart-button button"
          :disabled="form.checkoutStatus === 'PENDING'"
          value="Complete Purchase"
        />
      </form>
      <div v-show="form.checkoutStatus !== ''" class="checkoutStatusBox">
        <div v-if="form.checkoutStatus === 'ERROR'">Please fix validation.</div>

        <div v-else-if="form.checkoutStatus === 'PENDING'">Processing...</div>

        <div v-else-if="form.checkoutStatus === 'OK'">Order placed...</div>

        <div v-else>{{ serverErrorMessage }}</div>
      </div>
    </section>
    <div class="empty-cart" v-else>
      <h3>You need to have at least one item in your cart to checkout.</h3>
      <button class="cart-button button">
        <RouterLink class="continue-shopping" to="/category/Classics">
          Continue Shopping
        </RouterLink>
      </button>
    </div>
  </div>
</template>
