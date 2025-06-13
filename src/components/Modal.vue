<template>
    <div class="cart-modal__overlay" :class="{ open: isOpen }" @click.self="closeModal()">
        <div class="cart-modal">
            <div class="cart-modal__header">
                <h2 class="cart-modal__header--title">
                    Корзина
                </h2>
                <span class="cart-modal__header--close" @click="closeModal()">
                    <img src="../assets/image/icons/close.svg" alt="close">
                </span>
            </div>
            <div class="cart-modal__bady">
                <div class="cart-item">
                    <p class="cart-item__title">
                        Ролл угорь стандарт
                    </p>
                    <div class="cart-item__controls">
                        <div class="cart-item__controls--price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item__controls--count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
                <div class="cart-item">
                    <p class="cart-item__title">
                        Ролл угорь стандарт
                    </p>
                    <div class="cart-item__controls">
                        <div class="cart-item__controls--price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item__controls--count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
                <div class="cart-item">
                    <p class="cart-item__title">
                        Ролл угорь стандарт
                    </p>
                    <div class="cart-item__controls">
                        <div class="cart-item__controls--price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item__controls--count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
            </div>
            <div class="cart-modal__footer">
                <div class="cart-modal__footer--price">
                    1250 ₽
                </div>
                <div class="cart-modal__footer--controls">
                    <button class="btn btn-primery">
                        Оформить заказ
                    </button>
                    <button class="btn btn-outline">
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(['toggleModal']);
const closeModal = () => emit('toggleModal');
</script>

<style scoped>
.cart-modal__overlay {
    display: none;

}

.cart-modal__overlay.open {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    align-items: center;
    justify-content: center;
}

.cart-modal {
    width: 100%;
    max-width: 780px;
    padding: 40px 45px;
    background-repeat: 5px;
    background: var(--gray---gray-1);
}

.cart-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;
}

.cart-modal__header--title {
    margin: 0;
    font-weight: 700;
    font-size: 36px;
    color: var(--gray---gray-10);
}


.cart-modal__header--close {
    cursor: pointer;
}

.cart-modal__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 50px;
}

.cart-modal__footer--price {
    border-radius: 5px;
    padding: 15px 20px;
    width: 106px;
    background: var(--gray---gray-9);

    font-weight: 700;
    font-size: 20px;
    color: var(--gray---gray-2);
}

.cart-modal__footer--controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.cart-item:not(:last-child) {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--gray---gray-5);
}

.cart-item__title {
    font-weight: 400;
    font-size: 18px;
    color: var(--gray---gray-10);
    padding: 0;
    margin: 0;
}

.cart-item__controls {
    display: flex;
    align-items: center;
}

.cart-item__controls--price {
    margin-right: 47px;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: var(--gray---gray-10);
}

.cart-item__controls button {
    border: 1px solid var(--daybreak-blue---blue-5);
    border-radius: 2px;
    padding: 5px 16px;
    width: 36px;
    height: 32px;
}

.cart-item__controls--count {
    margin: 4px 16px;
}
</style>