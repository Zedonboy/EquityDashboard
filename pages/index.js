import Content from '../src/components/content';
import Head from 'next/head';
import DashboardLayout from '../src/dashboard/layout';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Equity Dashboard</title>
      </Head>
      <DashboardLayout>
        <Content />
      </DashboardLayout>
    </>
  );
}
