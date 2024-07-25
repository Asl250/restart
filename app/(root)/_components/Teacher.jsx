import { Button } from '@/components/ui/button'
import Image from 'next/image'
import teacher from '../../../public/teacher.png'

const Teacher = () => {
	return (
		<div className={'grid grid-cols-1 lg:grid-cols-2 gap-16 bg-[#f3f4f6] py-16 lg:px-[10%]'}>
			<div className={'max-lg:mx-[5%]'}>
				<p className={'text-green-400 py-3 px-3 rounded-full bg-white text-2xl font-semibold'}>ЎНЛАБ МИЛЛИОНEР
					ТАДБИРКОРЛАР УСТОЗИ</p>
				<h1 className={'text-black lg:max-w-xl text-2xl font-semibold mt-5 xl:ml-1'}>ИХТИЯР ДОСMEТОВ - КЎЗГА
					КЎРИНИШНИ ИСТАМАЙДИГАН ТАДБИРКОРЛАР МУРОЖААТ ҚИЛАДИГАН МEНТОР</h1>
				
				<Image
					src={teacher}
					alt={'teacher'}
					width={600}
					height={600}
					className={'hidden max-lg:flex my-10 mx-auto'}
				/>
				
				<div className={'mt-3'}>
					<div className={'flex'}>
						<div className={'mt-2'}>
							<p className={'py-3 px-5 rounded-full bg-white text-2xl w-14'}>1</p>
						</div>
						<p className={'pt-4 pl-3 text-xl'}>Медиатадбиркор, Инвестор</p>
					</div>
					<hr className={'w-full bg-white block mt-3 p-px'} />
				</div>
				
				<div className={'mt-3'}>
					<div className={'flex'}>
						<div>
							<p className={'mt-5 py-3 px-5 rounded-full bg-white text-2xl w-14'}>2</p>
						</div>
						<p className={'pt-4 pl-3 text-xl'}>13 йиллик тажрибага эга Халқаро тоифадаги Бизнес ва шахсий ривожланиш мураббийи, 12 давлатда 40,000 дан ортиқ ўқувчилар</p>
					</div>
					<hr className={'w-full bg-white block mt-3 p-px'} />
				</div>
				
				<div className={'mt-3'}>
					<div className={'flex'}>
						<div className={'mt-3'}>
							<p className={'py-3 px-5 rounded-full bg-white text-2xl w-14'}>3</p>
						</div>
						<p className={'pt-4 pl-3 text-xl'}>ICBT (International certificated of business trainers) ва FIA (Fowler International academy) сертификацияси соҳиби</p>
					</div>
					<hr className={'w-full bg-white block mt-3 p-px'} />
				</div>
				
				<div className={'mt-3'}>
					<div className={'flex'}>
						<div className={'mt-3'}>
							<p className={'py-3 px-5 rounded-full bg-white text-2xl w-14'}>4</p>
						</div>
						<p className={'pt-4 pl-3 text-xl'}>Қадам — бақадам китоби (Ўзбекистонда шахсий ривожланиш бестселлери) муаллифи</p>
					</div>
					<hr className={'w-full bg-white block mt-3 p-px'} />
				</div>
				
				<div className={'mt-3'}>
					<div className={'flex'}>
						<div className={'mt-2'}>
							<p className={'py-3 px-5 rounded-full bg-white text-2xl w-14'}>5</p>
						</div>
						<p className={'pt-4 pl-3 text-xl'}>1000 Х клуби (Ўзбекистондаги ТОП бизнес клублардан бири) асосчиси ва раҳбари</p>
					</div>
					<hr className={'w-full bg-white block mt-3 p-px'} />
				</div>
				<div className={'flex justify-center mt-10'}>
					<Button className={'mx-auto justify-center bg-green-500 text-xl rounded-full px-[10rem] py-8'}>Ishtirok
						etish
					</Button>
				</div>
			</div>
			
			<div>
				<Image
					src={teacher}
					alt={'teacher'}
					width={600}
					height={600}
					className={'hidden lg:flex '}
				/>
			</div>
		</div>
	)
}
export default Teacher
