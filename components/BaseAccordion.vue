<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
]
</script>

<template>
  <AccordionRoot
    default-value="'item-1'"
    type="single"
    :collapsible="true"
  >
    <template v-for="item in accordionItems" :key="item.value">
      <AccordionItem  :value="item.value">
        <AccordionHeader >
          <AccordionTrigger >
            <span>{{ item.title }}</span>

          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="accordion-content">
          <div >
            {{ item.content }}
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

