import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    modalOpen: false,
    applicationModalActive: false,
    consultationModal: false,
    successModalActive: false,
    successModalText: "",
    errorModalActive: false,
    errorModalText: "",
    category: "",
    loader: false,
  }),
  actions: {},
});
