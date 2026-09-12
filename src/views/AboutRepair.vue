<script lang="ts" setup>
import { getPrice, type PriceResult } from '@/api/partPriceApi.ts'
import { appleDevice } from '@/data/appleDevice'
import { oppoDevice } from '@/data/oppoDevice'
import { samsungDevice } from '@/data/samsungDevice'
import type { DeviceModel } from '@/types/repairGuide'
import { TabletSmartphone } from '@lucide/vue'
import { computed, onMounted, ref } from 'vue'
import AppleIcon from './../components/icons/AppleIcon.vue'
import PriceList from './../components/PriceList.vue'
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

//get api here
// --- Single lookup ---
const singleUrl = ref('https://nzsunnyway.co.nz/product/lcd-screen-samsung-a30s/')
const singleLoading = ref(false)
const singleError = ref<string | null>(null)
const singleResult = ref<PriceResult | null>(null)

async function handleSingleLookup() {
  singleLoading.value = true
  singleError.value = null
  singleResult.value = null

  try {
    singleResult.value = await getPrice(singleUrl.value)
  } catch (e: any) {
    singleError.value = e.response?.data?.message || e.message
  } finally {
    singleLoading.value = false
  }
}
onMounted(() => {
  handleSingleLookup()
})
</script>
<template>
  <div class="flex repair-info text-xs border-b-1 bg-[#000000] text-white">
    <div class="pl-2 pt-5 pr-2 bg-[#ffffff] text-black rounded-tr-sm text-sm cursor-pointer">
      21st Century
    </div>
    <div class="pl-2 pt-5 pr-2 text-sm cursor-pointer">NZSunnyWay</div>
  </div>
  <div class="flex justify-between top-0 z-10 bg-white p-2 sticky repair-header">
    <div>
      <input
        v-model="searchKeyword"
        type="text"
        placeholder="Search model: iPhone x..."
        class="flex flex-start p-2 mb-4"
      />
    </div>
    <div class="flex-end flex gap-0.5">
      <div
        :style="{ backgroundColor: tabIndex === 0 ? '#b3b3b3' : '#ffffff' }"
        class="bg-[#ffffff] hover:bg-[#4c4c4c] w-10 h-10 flex justify-center rounded items-center cursor-pointer select-none"
        @click="setTabIndex(0)"
      >
        <TabletSmartphone :style="{ color: 'black' }" />
      </div>
      <div
        :style="{ backgroundColor: tabIndex === 1 ? '#b3b3b3' : '#ffffff' }"
        class="bg-[#ffffff] hover:bg-[#4c4c4c] w-10 h-10 flex justify-center rounded items-center cursor-pointer select-none"
        @click="setTabIndex(1)"
      >
        <AppleIcon />
      </div>
      <div
        :style="{ backgroundColor: tabIndex === 2 ? '#b3b3b3' : '#ffffff' }"
        class="bg-[#ffffff] hover:bg-[#4c4c4c] w-10 h-10 flex justify-center rounded items-center cursor-pointer select-none"
        @click="setTabIndex(2)"
      >
        <SamsungIcon />
      </div>
      <div
        :style="{ backgroundColor: tabIndex === 3 ? '#b3b3b3' : '#ffffff' }"
        class="bg-[#ffffff] hover:bg-[#4c4c4c] w-10 h-10 flex justify-center rounded items-center cursor-pointer select-none"
        @click="setTabIndex(3)"
      >
        <OppoIcon />
      </div>
    </div>
    <div name="find-my-imei" class="pl-2">
      <input
        v-model="searchKeyword"
        type="text"
        placeholder="Enter IMEI or SN..."
        class="flex flex-start p-2 mb-4"
      />
    </div>
  </div>
  <div>
    {{ singleResult || 'Get Price' }}
  </div>
  <div class="grid grid-cols-3 gap-4 justify-center min-width-[1000px] repair-list">
    <PriceList :devices="filteredDevices" />
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
