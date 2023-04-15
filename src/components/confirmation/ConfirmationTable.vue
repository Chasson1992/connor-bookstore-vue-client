<script setup lang="ts">
import type { BookItem, OrderDetails } from "@/types";
import { useOrderDetailsStore } from "@/stores/OrderDetailsStore";
import type { LineItem } from "@/types";
import { asDollarsAndCents } from "@/main";

const orderDetailsStore = useOrderDetailsStore();
const orderDetails: OrderDetails = orderDetailsStore.orderDetails;

const bookImageFileName = function (book: BookItem): string {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.png`;
};

function getBookImageUrl(name: string) {
  return new URL(`../../assets/images/books/${name}`, import.meta.url).href;
}
</script>

<style scoped>
table {
  border: 1px black solid;
  width: fit-content;
  margin-top: 1em;
  margin-bottom: 1em;
}

td {
  display: table-cell;
  padding: 0.5em 0.5em;
  background-color: white;
  vertical-align: middle;
}

tr:nth-child(even) > td {
  background-color: lightgray;
}

td:nth-child(1) {
  text-align: left;
}

td:nth-child(2) {
  text-align: center;
}

td:nth-child(3) {
  text-align: right;
}

img {
  height: 100px;
  width: auto;
}
</style>

<template>
  <table>
    <tr>
      <th scope="col">Book</th>
      <th scope="col">Quanity</th>
      <th scope="col">Price</th>
    </tr>
    <tr
      v-for="(item, index) in orderDetails.lineItems as LineItem[]"
      :key="index"
    >
      <td>
        <img
          :src="getBookImageUrl(bookImageFileName(orderDetails.books[index]))"
          :alt="orderDetails.books[index].title"
        />
      </td>
      <td>{{ item.quantity }}</td>
      <td>
        {{ asDollarsAndCents(orderDetails.books[index].price) }}
      </td>
    </tr>
  </table>
</template>
