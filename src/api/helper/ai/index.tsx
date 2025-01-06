import instance from '@/api/instances'
import { GenerateItem, KeywordsItem } from '@/types/api/ai'

const aiApi = {
  async getKeywords(params: { page: number; limit: number; searchQuery: string }): Promise<{
    total: number
    items: KeywordsItem[]
  }> {
    return instance.get(`/ai/keywords`, { params }).then((res: any) => res.data)
  },
  async postKeywords(body: { keyword: string }) {
    return instance.post(`/ai/keyword`, body).then((res: any) => res.data)
  },
  async generate(body: {
    prompt: string | undefined
    keywords: string[] | undefined
    exclude: string | undefined
    image: string | undefined
  }): Promise<GenerateItem[]> {
    return instance.post(`/ai/generate`, body).then((res: any) => res.data)
  },
  async getRemainingGenerate(): Promise<{
    remainingCount: number
    resetTimestamp: number
  }> {
    return instance.get(`/ai/get-generate-remaining-count`).then((res: any) => res.data)
  }
}

export default aiApi
