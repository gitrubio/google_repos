import React from 'react'
import { ProfileProps } from '../types/app.type'
import { Avatar, Box, Card, Center, Grid, SimpleGrid, Skeleton, Stack, Text } from '@mantine/core'
import classes from './Profile.module.css';
import { CardInfo } from './CardInfo/CardInfo';
import { FaEye } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import { VscGistSecret } from "react-icons/vsc";


export default function Porfile({ user, loading }: ProfileProps) {
    return (
        <Card h={360}>
            <SimpleGrid cols={{ base: 2 }} spacing="xs">
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Stack justify='center' maw={180}>
                        <Skeleton height={100} circle animate visible={loading}>

                            <div style={{ width: '180px', display: 'flex', justifyContent: 'center' }}>
                                <Avatar src={user?.avatar_url} size={100} radius="xl" />
                            </div>

                        </Skeleton>
                        <Skeleton height={20} radius="sm" animate visible={loading} >
                            <Center>
                                <Text size='lg'>
                                    {user?.name}
                                </Text>
                            </Center>
                        </Skeleton>
                        <Skeleton height={20} mt={6} radius="sm" animate visible={loading}>
                            <Center>
                                <Text size='md'>
                                    {user?.bio}
                                </Text>
                            </Center>
                        </Skeleton>
                        <Skeleton height={20} mt={6} radius="sm" animate visible={loading}>
                            <Text size='md'>
                                {user?.email}
                            </Text>
                        </Skeleton>
                    </Stack>
                </Box>
                <Grid gutter="md" overflow="hidden"  >
                    <Grid.Col span={12}>
                        <CardInfo color='blue' title='followers' value={user?.followers} Icon={FaEye} loading={loading}/>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <CardInfo  color='green' title='repositories' value={user?.public_repos} Icon={RiGitRepositoryFill} loading={loading}/>
                    </Grid.Col>
                    <Grid.Col span={{ sm: 6 }} className={classes.hidden}  >
                        <CardInfo  color='red'  title='gists' value={user?.public_gists} Icon={VscGistSecret} loading={loading}/>
                    </Grid.Col>
                </Grid>
            </SimpleGrid>

        </Card>
    )
}
