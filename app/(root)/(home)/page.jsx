import AboutMe from '@/app/(root)/_components/AboutMe'
import Banner from '@/app/(root)/_components/Banner'
import Days from '@/app/(root)/_components/Days'
import Eyes from '@/app/(root)/_components/Eyes'
import FAQ from '@/app/(root)/_components/FAQ'
import Opportunity from '@/app/(root)/_components/Opportunity'
import Video from '@/app/(root)/_components/Video'

const Home = () => {
	return (
		<div className={'overflow-x-hidden overflow-y-hidden'}>
			<Banner/>
			<Video/>
			<Opportunity/>
			<AboutMe/>
			<Days/>
			<Eyes/>
			<FAQ/>
		</div>
	)
}
export default Home
