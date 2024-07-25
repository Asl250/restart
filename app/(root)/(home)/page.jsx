import Another from '@/app/(root)/_components/Another'
import Banner from '@/app/(root)/_components/Banner'
import Days from '@/app/(root)/_components/Days'
import Help from '@/app/(root)/_components/Help'
import Opportunity from '@/app/(root)/_components/Opportunity'
import Teacher from '@/app/(root)/_components/Teacher'
import Video from '@/app/(root)/_components/Video'

const Home = () => {
	return (
		<div className={'overflow-x-hidden overflow-y-hidden'}>
			<Banner/>
			<Video/>
			<Opportunity/>
			<Teacher/>
			<Another/>
			<Days/>
			<Help/>
		</div>
	)
}
export default Home
