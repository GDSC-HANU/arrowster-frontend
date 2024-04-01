<template>
  <div class="w-full p-4">
    <nav class="w-full">
      <ul class="flex-col flex gap-4 whitespace-nowrap text-[18px]">
        <li class="w-full">
          <nuxt-link
            class="flex w-full items-center justify-center gap-2"
            to="/find-college"
          >
            <UButton variant="ghost" class="text-[18px] w-full bg-[#EFF6FF]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 12L11.2045 3.04545C11.6438 2.60611 12.3562 2.60611 12.7955 3.04545L21.75 12M4.5 9.74995V19.875C4.5 20.4963 5.00368 21 5.625 21H9.75V16.125C9.75 15.5036 10.2537 15 10.875 15H13.125C13.7463 15 14.25 15.5036 14.25 16.125V21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V9.74995M8.25 21H16.5"
                  stroke="#1D4ED8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Dashboard</span>
            </UButton>
          </nuxt-link>
        </li>

        <li class="w-full">
          <nuxt-link
            class="flex w-full items-center justify-center gap-2"
            to="/find-college"
          >
            <UButton variant="default" class="text-[18px] w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
                  stroke="#334155"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Find College</span>
            </UButton>
          </nuxt-link>
        </li>

        <li class="w-full">
          <nuxt-link
            class="flex w-full items-center justify-center gap-2"
            to="/find-college"
          >
            <UButton variant="default" class="text-[18px] w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 21L3 16.5M3 16.5L7.5 12M3 16.5H16.5M16.5 3L21 7.5M21 7.5L16.5 12M21 7.5L7.5 7.5"
                  stroke="#334155"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Comparison</span>
            </UButton>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
