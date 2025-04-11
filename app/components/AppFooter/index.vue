<script setup></script>

<template>
    <footer class="footer" id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="footer-top__items">
                    <div class="footer-top__items-title">{{ $t('footer.contacts') }}</div>
                    <ul class="footer-top__items-list">
                        <li>
                            <a class="footer-top__items-text" href="tel:+998900112033" target="_blank">
                                <img src="@/assets/images/footer/phone.svg" alt="" />
                                +998 90 011 20 33
                            </a>
                        </li>
                        <li>
                            <a class="footer-top__items-text" href="mailto:promocentertash@gmail.com" target="_blank">
                                <img src="@/assets/images/footer/mail.svg" alt="" />
                                promocentertash@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <img class="footer-top__logo" src="@/assets/images/logo-black.svg" alt="" />
                <div class="footer-top__items">
                    <p class="footer-top__items-title">{{ $t('footer.work-time') }}</p>
                    <p class="footer-top__items-text">
                        <img src="@/assets/images/footer/clock.svg" alt="">
                        09:00 - 21:00
                    </p>
                    <p class="footer-top__items-text">
                        <img src="@/assets/images/footer/calendar.svg" alt="">
                        {{ $t('footer.work-week') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <ul class="footer-bottom__list">
                    <!-- <li>
                        <a href="https://t.me/Musait_technologies" target="_blank">
                            <img src="@/assets/images/footer/telegram.svg" alt="" />
                        </a>
                    </li> -->
                    <li>
                        <a href="https://www.instagram.com/icebergbtl/" target="_blank">
                            <img src="@/assets/images/footer/instagram.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=61561572720311" target="_blank">
                            <img src="@/assets/images/footer/facebook.svg" alt="" />
                        </a>
                    </li>
                </ul>
                <div class="footer-bottom__text">
                    © 2022 <a href="https://t.me/icebergbtl_b2b" target="_blank">
                        Ice Berg BTL Agency
                    </a>
                </div>
                <a class="footer-bottom__text"
                    href="https://yandex.uz/maps/10335/tashkent/house/YkAYdw9iSkcEQFprfX55eH9mZQ==/?ll=69.182657%2C41.289338&z=20.8"
                    target="_blank">
                    {{ $t('footer.address') }}
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
