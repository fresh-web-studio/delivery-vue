<script setup>
import { store } from "../store/index";
const getUrl = (name) => {
  return new URL(`../assets/image/goods/${name}.jpg`, import.meta.url);
};
</script>

<template>
  <section class="products">
    <div class="container">
      <div class="products-wrppers" id="good-container">
        <div class="product-card" v-for="good in store.goods" :key="good.id">
          <div class="product-card__image">
            <img :src="getUrl(good.image)" :alt="good.image" />
          </div>
          <div class="product-card__discription">
            <div class="product-card__discription-row">
              <h5 class="product-card__discription--name">
                {{ good.title }}
              </h5>
            </div>
            <div class="product-card__discription-row">
              <p class="product-card__discription--text">
                {{ good.discription }}
              </p>
            </div>
            <div class="product-card__discription-row">
              <div class="product-card__discription-controls">
                <button class="btn btn-primery">
                  В корзину
                  <img src="../assets/image/icons/cardw.svg" alt="card-w" />
                </button>
                <span class="product-card__discription-controls--price"
                  >{{ good.price }} ₽</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
