import type { ColumnDef } from '@tanstack/vue-table';
import { h } from 'vue';

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => h('div', { class: 'font-medium' }, row.getValue('id'))
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);

      return h('div', { class: 'text-right font-medium' }, formatted);
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return h('div', { class: 'capitalize' }, status);
    }
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => h('div', {}, row.getValue('email'))
  }
];

export interface Payment {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
}

export const paymentData: Payment[] = Array.from({ length: 100 }, (_, i) => {
  const id = Math.random().toString(36).substring(2, 10);
  const amount = Math.floor(Math.random() * 1000) + 10;
  const statuses: Payment['status'][] = [
    'pending',
    'processing',
    'success',
    'failed'
  ];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const domains = [
    'example.com',
    'gmail.com',
    'outlook.com',
    'company.org',
    'domain.net'
  ];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const username = `user${i + 1}`;

  return {
    id,
    amount,
    status,
    email: `${username}@${domain}`
  };
});
