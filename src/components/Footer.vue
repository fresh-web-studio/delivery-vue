<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-box">
                <router-link to="/" class="footer-logo logo">
                    <img src="../assets/image/logo.png" alt="logo">
                </router-link>
                <div class="footer-nav">
                    <ul>
                        <li>Ресторанам </li>
                        <li>Курьерам</li>
                        <li>Пресс-центр</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div class="footer-social">
                    <img src="../assets/image/social/inst.png" alt="INST">
                    <img src="../assets/image/social/fb.png" alt="FB">
                    <img src="../assets/image/social/vk.png" alt="VK">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    min-height: 156px;
    padding: 60px 0;
}

.footer-box {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 36px;
    flex-wrap: wrap;
}

.footer-nav {
    flex-grow: 1;
}

.footer-nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 15px;
    flex-wrap: wrap;
}

.footer-nav ul li {
    font-size: 18px;
    font-weight: 400;
    color: rgba(89, 89, 89, 1);
}

.footer-social {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}
</style>