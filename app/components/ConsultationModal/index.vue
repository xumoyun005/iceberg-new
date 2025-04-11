<script setup>
import * as yup from "yup";
import { ref, reactive } from "vue";
import { useMainStore } from "@/stores/main";
import { useI18n } from "vue-i18n";
import { useForm } from "vee-validate";
import CloseIcon from "@/assets/images/close.svg";

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

const onSubmit = handleSubmit(async (values) => {
  mainStore.loader = true;
  try {
    await $fetch("/api/sendToTelegram", {
      method: "POST",
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

const closeModal = () => {
  mainStore.modalOpen = false;
  mainStore.consultationModal = false;
};
</script>

<template>
  <div class="consultation">
    <h3 class="consultation__title">{{ $t("consultation-modal.title") }}</h3>
    <button class="consultation__close-btn" @click="closeModal()">
      <img :src="CloseIcon" alt="" />
    </button>
    <form class="consultation__form" @submit.prevent="onSubmit">
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
      <button class="button close" type="submit">
        {{ $t("lead.button-send") }}
      </button>
    </form>
  </div>
</template>

<style scoped></style>
