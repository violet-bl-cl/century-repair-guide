<script setup lang="ts">
import { appleDevice } from '@/data/appleDevice'
import { oppoDevice } from '@/data/oppoDevice'
import { samsungDevice } from '@/data/samsungDevice'
import type { DeviceModel } from '@/types/repairGuide'
import { computed, ref } from 'vue'
import AppleIcon from './components/icons/AppleIcon.vue'
import AboutRepair from './views/AboutRepair.vue'
const allDevices = ref<DeviceModel[]>([...appleDevice, ...samsungDevice, ...oppoDevice])
const searchKeyword = ref('')

const filteredDevices = computed(() => {
  const keyword = searchKeyword.value.trim().toLowerCase()

  let devices = allDevices.value
  if (tabIndex.value === 1) {
    devices = devices.filter((d) => d.repairGuide.deviceType.brand === 'Apple')
  } else if (tabIndex.value === 2) {
    devices = devices.filter((d) => d.repairGuide.deviceType.brand === 'Samsung')
  } else if (tabIndex.value === 3) {
    devices = devices.filter((d) => d.repairGuide.deviceType.brand === 'Oppo')
  }

  if (!keyword) return devices
  return allDevices.value.filter((device) =>
    device.repairGuide.deviceType.model.toLowerCase().includes(keyword),
  )
})
//tab index for models
const tabIndex = ref(0)

const setTabIndex = (value: number) => {
  tabIndex.value = value
}
</script>

<template>
  <div class="flex justify-center repair-info text-xs">21st Century Electronics Repair Price</div>
  <div class="flex justify-between top-0 z-10 bg-white p-2 sticky repair-header">
    <div>
      <input
        v-model="searchKeyword"
        type="text"
        placeholder="Search devices..."
        class="flex flex-start border rounded-lg p-2 mb-4"
      />
    </div>
    <div class="flex-end flex gap-0.5">
      <div
        :style="{ backgroundColor: tabIndex === 0 ? '#4c4c4c' : '#ffffff' }"
        class="bg-[#ffffff] hover:bg-[#4c4c4c] w-10 h-10 flex justify-center items-center cursor-pointer select-none"
        @click="setTabIndex(0)"
      >
        All
      </div>
      <div
        :style="{ backgroundColor: tabIndex === 1 ? '#4c4c4c' : '#ffffff' }"
        class="bg-[#ffffff] hover:bg-[#4c4c4c] w-10 h-10 flex justify-center items-center cursor-pointer select-none"
        @click="setTabIndex(1)"
      >
        <AppleIcon />
      </div>
      <div
        :style="{ backgroundColor: tabIndex === 2 ? '#4c4c4c' : '#ffffff' }"
        class="bg-[#ffffff] hover:bg-[#4c4c4c] w-10 h-10 flex justify-center items-center cursor-pointer select-none"
        @click="setTabIndex(2)"
      >
        <SamsungIcon />
      </div>
      <div
        :style="{ backgroundColor: tabIndex === 3 ? '#4c4c4c' : '#ffffff' }"
        class="bg-[#ffffff] hover:bg-[#4c4c4c] w-10 h-10 flex justify-center items-center cursor-pointer select-none"
        @click="setTabIndex(3)"
      >
        <OppoIcon />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 justify-center min-width-[1000px] repair-list">
    <AboutRepair :devices="filteredDevices" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
