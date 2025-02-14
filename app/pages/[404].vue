<script setup>
useHead({
  title: computed(() => "Ice Berg BTL | 404"),
  meta: [
    {
      name: "description",
      content: computed(() => "Страница не найдена"),
    },
    {
      name: "keywords",
      content: computed(
        () =>
          "Рекламное агентство, Промоутерское агентство, Флаеры, Самоклеящаяся пленка, Flayerlar tarqatish, Samakleyka yopishtirish, Reklama Agentligi, Icebergbtl, ice berg btl, iceberg, ice berg"
      ),
    },
  ],
});
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
  />
  <div class="h-screen overflow-hidden">
    <div class="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
      <p class="text-base font-semibold leading-8" style="color: #027bff">
        404
      </p>
      <h1
        class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        Страница не найдена!
      </h1>
      <p
        class="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8"
      >
        Вы можете вернуться на главную
      </p>
    </div>
    <div class="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
      <ul
        role="list"
        class="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
      >
        <li class="relative flex gap-x-6 py-6">
          <div
            class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7h.01M12 7h.01M16 7h.01M9 16h6M9 12h6m-7 4h6m0 4h6m-9 4h6m-7 0h.01m1-16h.01M8 11h.01m4 0h.01m4 0h.01M9 4h6m4 2h6m-8 0h.01M8 4h.01m1-2h6m4 6h6m-8 0h.01M8 2h.01"
              />
            </svg>
          </div>
          <div class="flex-auto">
            <h3 class="text-sm font-semibold leading-6 text-gray-900">
              <a href="/">
                <span class="absolute inset-0" aria-hidden="true"></span>
                Главная
              </a>
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600">Главная страница</p>
          </div>
          <div class="flex-none self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.h-screen {
  height: 100vh;
}
</style>
