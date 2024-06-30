import { Group, MantineProvider, SimpleGrid, Text } from '@mantine/core';
import {
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
} from '@tabler/icons-react';
import classes from './StatsGridIcons.module.css';
import '@mantine/core/styles.css';

const icons = {
 
  receipt: IconCoin,

};

const data = [
  { title: 'Total Balance', icon: 'receipt', value: '13,456', diff: 34 },

] as const;

export default function StatsGrid() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <div key={stat.title} className='text-white'>
        <Group justify="space-between" >
          <Text size="xs" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text c={stat.diff > 0 ? 'teal' : 'red'} fz="sm" fw={500} className={classes.diff}>
          
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>

        <Text fz="xs"  mt={7}>
          Compared to previous month
        </Text>
      </div>
    );
  });
  return (
    <MantineProvider>
        <div>
      <SimpleGrid cols={{ base: 1 }}>{stats}</SimpleGrid>
    </div>
    </MantineProvider>
  );
}
