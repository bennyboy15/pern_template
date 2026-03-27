import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';

export interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: string;
}

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axiosInstance.get('/users');
      return data;
    },
  });
};