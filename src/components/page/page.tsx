import { PropsWithChildren } from 'react';
import Navbar from './navbar';
import './page.css';

type PageProps = {
  title: string;
};

const Page = (props: PropsWithChildren<PageProps>) => {
  return (
    <div className="page">
      <Navbar />
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Page;
