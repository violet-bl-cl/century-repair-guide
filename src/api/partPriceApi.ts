import { apiClient } from './apiClient'

export interface PriceResult {
  url: string
  title: string | null
  price: number | null
  currency: string | null
  found: boolean
}

export async function getPrice(url: string): Promise<PriceResult> {
  const { data } = await apiClient.get<PriceResult>('/price', { params: { url } })
  return data
}

export async function getPrices(urls: string[]): Promise<PriceResult[]> {
  const { data } = await apiClient.post<PriceResult[]>('/price/bulk', { urls })
  return data
}
