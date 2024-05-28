import { Skeleton, Container, Stack, useMantineTheme, px, Grid } from '@mantine/core';
import useGithub from './hooks/useGithubt';
import { useEffect } from 'react';
import Porfile from './components/Porfile';
import { CardRepo } from './components/CardRepo/CardRepo';

const MAX_WIDTH = 1820;

export default function App() {
  const { user, repositories, loading } = useGithub();
  return (
    <Container size={''} maw={MAX_WIDTH}>
      <Grid m='lg' grow >
        <Grid.Col>
          <Porfile user={user} loading={loading} />
        </Grid.Col>
        <Grid.Col>
          <Stack>
            {loading ? (
              <>
                <Skeleton height={109} radius="md" animate={true} />
                <Skeleton height={109} radius="md" animate={true} />
                <Skeleton height={109} radius="md" animate={true} />
              </>
            ) : (
              repositories.map((repo) => (<CardRepo key={repo.id}  repository={repo}/>))
            )}
          </Stack>
        </Grid.Col>

      </Grid>
    </Container>
  );
}