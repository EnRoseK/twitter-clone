import { create } from 'zustand';

interface ResiterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useResiterModal = create<ResiterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useResiterModal;
