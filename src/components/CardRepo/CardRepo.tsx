import { Box, Text, Group, Paper, SimpleGrid, Anchor, Badge, } from '@mantine/core';
import { FaExternalLinkAlt } from "react-icons/fa";
import classes from './CardRepo.module.css';
import { RepositoryProps } from '../../types/app.type';
import { LuClipboardEdit } from "react-icons/lu";
import { FaCodeFork } from "react-icons/fa6";

import { IoEyeSharp } from "react-icons/io5";


export function CardRepo({ repository }: RepositoryProps) {


  return (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between">
        <Group align="flex-end" gap="xs">
          <Text fz="xl" fw={700}>
            {repository.name}
          </Text>
          <Text c="teal" className={classes.diff} fz="sm" fw={700}>
            <Badge color={"green"}>{repository.default_branch}</Badge> 
          </Text>
        </Group>
        <Anchor href={repository.svn_url} target='_blank'  >
          <FaExternalLinkAlt size="1.4rem" className={classes.icon} />
        </Anchor>
      </Group>

      <Text c="dimmed" fz="sm">
        {repository.description ?? 'repository without description'}
      </Text>


      <SimpleGrid cols={{ base: 3, xs: 3 }} mt="xl">
        <Box style={{ borderBottomColor: 'dimmed' }} className={classes.stat}>
          <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
            watchers
          </Text>

          <Group justify="flex-start" align="center" gap={10}>
            <IoEyeSharp/>
            <Text fw={700}>{repository.watchers}</Text>
          </Group>
        </Box>
        <Box style={{ borderBottomColor: 'dimmed' }} className={classes.stat}>
          <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
            open issues
          </Text>

          <Group justify="flex-start" align="center" gap={10}>
             <LuClipboardEdit/>
            <Text fw={700}>{repository.watchers}</Text>
          </Group>
        </Box>
        <Box style={{ borderBottomColor: 'dimmed' }} className={classes.stat}>
          <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
            forks
          </Text>

          <Group justify="flex-start" align="center" gap={10}>
            <FaCodeFork/>
            <Text fw={700}>{repository.watchers}</Text>
          </Group>
        </Box>
      </SimpleGrid>
    </Paper>
  );
}