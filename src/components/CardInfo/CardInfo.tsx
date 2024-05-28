import { Text, Card, RingProgress, Center, Stack, Tooltip, Skeleton, Loader, } from '@mantine/core';
import classes from './CardInfo.module.css';
import { CardInfoProps } from '../../types/app.type';



export function CardInfo({ title, Icon, color, value = 0, loading = false, }: CardInfoProps) {


    return (
        <Card withBorder radius="md" className={classes.card}>
            <div className={classes.inner}>
                <Stack >
                    <Skeleton height={20} mt={6} radius="sm" animate visible={loading}>
                        <Text fz="xl" className={classes.hidden} c={color}>
                            {title}
                        </Text>
                    </Skeleton>
                    <Tooltip label={title}>
                        <Skeleton height={20} mt={6} radius="sm" animate visible={loading}>
                            <Text fz="h1" c={color} className={classes.hidden}>
                                <Icon />
                            </Text>
                        </Skeleton>
                    </Tooltip>

                </Stack>


                <div className={classes.ring}>


                    <RingProgress
                        thickness={7}
                        size={120}
                        sections={[{ value: 100, color }]}
                        label={
                            loading ? (
                                <Center>
                                    <Loader size={30} color={color} />

                                </Center>
                            ) : (
                                <div>
                                    <Text ta="center" fz="lg" className={classes.label}>
                                        {value}
                                    </Text>
                                    <Text ta="center" fz="xs" c="dimmed">
                                        <Icon />
                                    </Text>
                                </div>
                            )

                        }
                    />
                </div>
            </div>
        </Card>
    );
}