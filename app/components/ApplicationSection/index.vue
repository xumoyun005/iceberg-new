<script setup>
import * as yup from "yup";
import { useMainStore } from "@/stores/main";
import { useForm } from "vee-validate";

const { t } = useI18n();
const mainStore = useMainStore();

const schema = yup.object({
  name: yup.string().required(t("errors.name")).min(3, t("errors.name-min")),
  phone: yup.string().required(t("errors.phone")),
});

const { handleSubmit, defineField, errors } = useForm({
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
        category: mainStore.category || "Заявка",
      },
    });

    mainStore.modalOpen = true;
    mainStore.successModalActive = true;
    mainStore.successModalText = t("lead.success-send");
  } catch (err) {
    mainStore.modalOpen = true;
    mainStore.errorModalActive = true;
    mainStore.errorModalText = t("modals.error-text");
  } finally {
    mainStore.loader = false;
  }
});
</script>

<template>
  <section class="application">
    <div class="container">
      <p class="kicker">{{ $t("application.kicker") }}</p>
      <h2 class="section-title application__title">
        {{ $t("application.title") }}
      </h2>
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
