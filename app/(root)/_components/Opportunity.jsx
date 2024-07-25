import { Button } from '@/components/ui/button'
import Image from 'next/image'
import house from '../../../public/house.png'
import vint from '../../../public/vint.png'
import success from '../../../public/success.png'

const Opportunity = () => {
	return(
		<div className={'bg-[#141522] text-white pb-10'}>
			<div className={'md:flex justify-between leading-relaxed md:mx-[5%] py-10'}>
				<h1 className={'text-5xl max-w-3xl max-md:text-3xl leading-[1.5] font-semibold max-lg:w-full max-lg:text-center'}>
					<span className={'text-green-400'}>РEСТАРТ</span> - БИЗНEС ЭГАЛАРИ, МУТАХАССИСЛАР ВА РИВОЖЛАНИШНИ
					ИСТАГАНЛАР УЧУН ИМКОНИЯТ</h1>
				<h1 className={'lg:max-w-md text-xl font-semibold max-lg:w-full max-lg:text-center'}><span
					className={'text-green-400'}>РEСТАРТ</span> ўсишдан тўхтаган, катта ишлар учун иштиёқи
					қолмаган, ҳаёти бетартиб бўлиб кетган инсонлар учун ЭНЕРГИЯ манбаи ҳисобланади. 2020 йилдан бери 15
					та тадбиримизга барча жойлар тўлиб келган. Шунчаки бир марта келсангиз, сабабини тушунасиз</h1>
			</div>
			
			<div className={'mx-[10%] mt-10 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10'}>
				
				<div className={'bg-[#313242] rounded-lg p-5'}>
					<Image
						src={house}
						alt={'house'}
						width={50}
						height={50}
					/>
					
					<div className={'space-y-3'}>
						<p className={'mt-3 font-semibold text-xl mb-5'}>БИЗНEС ЭГАЛАРИ & <br /> ТАДБИРКОРЛАР УЧУН</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
					</div>
				
				
				</div>
				
				<div className={'bg-[#313242] rounded-lg p-5'}>
					<Image
						src={success}
						alt={'house'}
						width={50}
						height={50}
					/>
					
					<div className={'space-y-3'}>
						<p className={'mt-3 font-semibold text-xl mb-5'}>БИЗНEС ЭГАЛАРИ & <br /> ТАДБИРКОРЛАР УЧУН</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
					</div>
				
				
				</div>
				
				<div className={'bg-[#313242] rounded-lg p-5'}>
					<Image
						src={vint}
						alt={'house'}
						width={50}
						height={50}
					/>
					
					<div className={'space-y-3'}>
						<p className={'mt-3 font-semibold text-xl mb-5'}>БИЗНEС ЭГАЛАРИ & <br /> ТАДБИРКОРЛАР УЧУН</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
						<p className={'font-semibold max-w-xs text-lg'}>•Уй-жой, машина бор. Энди нима қилиш кераклигини
							билмаётган бўлсангиз</p>
					</div>
				
				
				</div>
			</div>
			<div className={'flex justify-center mt-16'}>
				<Button className={'mx-auto justify-center bg-green-500 text-xl rounded-full px-[10rem] py-8'}>Ishtirok
					etish
				</Button>
			</div>
		</div>
	)
}
export default Opportunity
