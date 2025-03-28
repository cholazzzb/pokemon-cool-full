import Navigator from '@/shared-ui/component/navigator';
import { Layout3Column } from '@/shared-ui/layout/three-column';
import { FABTeamPane } from '@/ui/team-building/fab-team-pane';
import TeamPane from '@/ui/team-building/team-pane';

export default function Home() {
  return (
    <Layout3Column>
      <Layout3Column.RightSm>
        <FABTeamPane />
      </Layout3Column.RightSm>
      <Layout3Column.RightMd>
        <TeamPane />
      </Layout3Column.RightMd>
      <Layout3Column.Middle>Pokemon List with filter</Layout3Column.Middle>
      <Navigator activeNav={'/team-builder'} />
    </Layout3Column>
  );
}
