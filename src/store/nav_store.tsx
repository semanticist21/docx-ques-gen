import {create} from 'zustand'

export interface NavStore {
  activeKey: number
  setActiveKey: (key: number) => void
  getActiveKey: () => number
}

const useNavStore = create<NavStore>((set, get) => ({
  activeKey: 0,
  setActiveKey: (key: number) => set({activeKey: key}),
  getActiveKey: () => get().activeKey,
}))

export default useNavStore
