<script setup>
import * as yup from "yup";
import { ref, reactive } from "vue";
import { useMainStore } from "@/stores/main";
import { useI18n } from "vue-i18n";
import { useForm } from "vee-validate";
import Loader from "../Loader/index.vue";

const { t } = useI18n();
const mainStore = useMainStore();

const schema = yup.object({
  name: yup.string().required(t("errors.name")).min(3, t("errors.name-min")),
  phone: yup.string().required(t("errors.phone")),
});

const { values, handleSubmit, defineField, errors } = useForm({
  validationSchema: schema,
});

const [name, nameAttrs] = defineField("name");
const [phone, phoneAttrs] = defineField("phone");
const phoneNumberMask = reactive({});

const onSubmit = handleSubmit(async (values) => {
  mainStore.loader = true;
  try {
    await $fetch('/api/sendToTelegram', {
      method: 'POST',
      body: {
        name: values.name,
        phone: values.phone,
        category: mainStore.category,
      },
    });

    mainStore.successModalActive = true;
    mainStore.successModalText = t("lead.success-send");
  } catch (err) {
    mainStore.errorModalActive = true;
    mainStore.errorModalText = t("modals.error-text");
  } finally {
    mainStore.loader = false;
    mainStore.applicationModalActive = false;
  }
});


const closeLeadModal = () => {
  mainStore.modalOpen = false;
  mainStore.applicationModalActive = false;
};
</script>

<template>
  <div class="modal-window" @click="closeLeadModal()">
    <form class="modal-lead" @click.stop @submit.prevent="onSubmit">
      <h3 class="modal-lead__title">
        <span>{{ $t("lead.title-one") }}</span> {{ $t("lead.title-two") }}
      </h3>
      <div class="modal-lead__form">
        <div class="modal-lead__form-top">
          <div class="modal-lead__form-group">
            <div class="input-group">
              <label class="input-group__label">{{ $t("lead.name") }}</label>
              <input
                v-model="name"
                v-bind="nameAttrs"
                class="input-group__input"
                type="text"
                :placeholder="$t('lead.name-placeholder')"
              />
              <span class="input-group__span" :class="{ active: errors.name }">
                {{ errors.name }}
              </span>
            </div>
            <div class="input-group">
              <label class="input-group__label">{{ $t("lead.phone") }}</label>
              <input
                v-model="phone"
                v-bind="phoneAttrs"
                class="input-group__input"
                type="text"
                v-phone-mask
                placeholder="+998 90 123 45 67"
              />
              <span class="input-group__span" :class="{ active: errors.phone }">
                {{ errors.phone }}
              </span>
            </div>
          </div>
        </div>
        <div class="modal-lead__form-buttons">
          <button class="button danger" type="button" @click="closeLeadModal()">
            {{ $t("lead.button-cancel") }}
          </button>
          <button class="button send" type="submit">
            {{ $t("lead.button-send") }}
          </button>
        </div>
      </div>
      <div class="modal-application__contact">
        {{ $t("contact_manager.contact-us") }}
        <p>
          {{ $t("contact_manager.contact-us-at") }}
          <a href="https://t.me/icebergbtl_b2b" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1E1E1E"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
              />
            </svg>
            Telegram
          </a>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
