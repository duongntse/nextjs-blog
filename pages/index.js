import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

const name = 'Harry Nguyen';

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hi I'm Harry Nguyen, Glad to see you here!</p>
				<p>
					I'm a fullstack JS developer. You can contact me on{' '}
					<a href='https://www.facebook.com/duongntse'>facebook</a>
				</p>
				<p>
					(This is a sample website - you'll be building a site like
					this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>)
				</p>
			</section>
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>{`${name}'s Blog`}</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href='/posts/[id]' as={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
