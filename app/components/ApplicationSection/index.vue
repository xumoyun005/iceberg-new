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
</script>

<template>
  <section class="application">
    <div class="container">
      <h3 class="application__title">{{ $t("application.title") }}</h3>
      <form class="application__form" @submit.prevent="onSubmit">
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
        <button class="button send" type="submit">
          {{ $t("lead.button-send") }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
