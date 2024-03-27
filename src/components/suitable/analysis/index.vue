<template>
  <div class="w-full lg:px-0 px-5">
    <div class="w-full flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold leading-8 text-slate-900">SWOT Analysis</h1>

        <nuxt-link to="/all-colleges">
          <span class="font-medium text-sm leading-5">View details</span>
          <Icon name="uil:arrow-up-right" class="w-5 h-5" color="black" />
        </nuxt-link>
      </div>

      <suitable-analysis-analyst-item color="red" title="Strength"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book.</suitable-analysis-analyst-item
      >

      <suitable-analysis-analyst-item color="blue" title="Weaknesses"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book.</suitable-analysis-analyst-item
      >

      <suitable-analysis-analyst-item color="green" title="Interests"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book.</suitable-analysis-analyst-item
      >

      <suitable-analysis-analyst-item color="orange" title="Opportunities"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book.</suitable-analysis-analyst-item
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
