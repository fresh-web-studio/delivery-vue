<script setup>
import { store } from "../store/index";
const getUrl = (name) => {
  return new URL(`../assets/image/rests/${name}.jpg`, import.meta.url);
};
</script>


<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item--title">
          Онлайн-сервис <br />
          доставки еды на дом
        </h2>
        <p class="banner-item--subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с
          антисептиком
        </p>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header--title">Рестораны</h3>

        <input
          type="text"
          placeholder="Поиск блюд и ресторанов"
          class="products-header-search"
        />
      </div>
      <div class="products-wrppers" id="rests-container">
        <router-link
          class="product-card"
          v-for="rest in store.rests"
          :key="rest.id"
          :to="`/rest?id=${rest.id}`"
        >
          <div class="product-card__image">
            <img :src="getUrl(rest.image)" :alt="rest.image" />
          </div>
          <div class="product-card__discription">
            <div class="product-card__discription-row">
              <h4 class="product-card__discription--title">{{ rest.title }}</h4>
              <div class="product-card__discription--badge">
                {{ rest.time }} мин
              </div>
            </div>
            <div class="product-card__discription-row">
              <div class="product-card__discriptiob-info">
                <div class="product-card__discription-info--raiting">
                  <img src="../assets/image/icons/star.svg" alt="star" />
                  {{ rest.rating }}
                </div>
                <div class="product-card__discription-info--price">
                  От {{ rest.price }} ₽
                </div>
                <div class="product-card__discription-info--group">
                  {{ rest.type }}
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
