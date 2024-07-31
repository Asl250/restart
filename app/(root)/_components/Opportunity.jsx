import { Button } from '@/components/ui/button'
import Image from 'next/image'
import house from '../../../public/house.png'
import vint from '../../../public/vint.png'
import success from '../../../public/success.png'

const Opportunity = () => {
	return(
		<div className={'bg-[#141522] text-white pb-10'}>
			<div className={'md:flex justify-between leading-relaxed md:mx-[10%] py-10'}>
				<h1 className={'text-5xl max-w-3xl max-md:text-3xl leading-[1.5] font-semibold max-lg:w-full max-lg:text-center'}>
					<span className={'text-green-400'}>Video Darslik Sizga Qanday Foyda Beradi?</span></h1>
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
						<p className={'mt-3 font-semibold text-2xl mb-5'}> Qanaqa qilib uylarni to’g’ri sotib olishni o’rganasiz</p>
						<p className={'max-w-xs text-xl pt-4'}>- Qaysi etajdan uy tanlash kerak?</p>
						<p className={' max-w-xs text-xl pt-4'}>- Qaysi lokatsiyadan uy olish kerak?</p>
						<p className={' max-w-xs text-xl pt-4'}>- Quruvchini ishonchliligini qanaqa qilib tekshirsa bo’ladi? </p>
						<p className={' max-w-xs text-xl pt-4'}>- Qanaqa qilib quruvchi haqida to’liq ma’lumot olsa bo’ladi? </p>
						<p className={' max-w-xs text-xl pt-4'}>Shuni hammasini bilib olasiz.</p>
					</div>
				
				
				</div>
				
				<div className={'bg-[#313242] rounded-lg p-5'}>
					<Image
						src={success}
						alt={'house'}
						width={50}
						height={50}
					/>
					
					<div className={'space-y-7'}>
						<p className={'mt-3 font-semibold text-2xl mb-5'}>Xujjatlar bilan ishlashni o’rganasiz</p>
						<p className={' max-w-xs text-lg'}>- Quruvchini proyektga oid qanaqa xujjatlari bor yoki qanaqalari yo’q?</p>
						<p className={' max-w-xs text-lg'}>Hammasini to’liq ko’rib chiqa olasiz va to’liq tushuna olasiz. </p>
						<p className={' max-w-xs text-lg'}>Xujjatlarida qandaydir kamchiliklar bo’lsa, darhol sezasiz.</p>
						<p className={' max-w-xs text-lg'}>Undan tashqari, qurilishni qaysi etapi to’g’ri qurilyapti, qayeri noto’g’ri ketyapti, hammasi reja bo’yicha ketyaptimi yoki rejaga o’zgartirish kiritildimi hammasini bila olasiz.</p>
					</div>
				
				
				</div>
				
				<div className={'bg-[#313242] rounded-lg p-5'}>
					<Image
						src={vint}
						alt={'house'}
						width={50}
						height={50}
					/>
					
					<div className={'space-y-7'}>
						<p className={'mt-3 font-semibold text-2xl mb-5'}>Shartnoma bilan ishlashni o’rganasiz.</p>
						<p className={' max-w-xs text-lg'}>- Shartnomada qaysi bandlar bo’lishi kerak? </p>
						<p className={' max-w-xs text-lg'}>- Shartoma tuzayotganda nimalarga e’tibor berish kerak? </p>
						<p className={'max-w-xs text-lg'}>- Quruvchi bilan ertaga tushunmovchiliklar kelib chiqadigan bo’lsa, siz yutib chiqishingiz uchun shartnomaga qanday bandlarni qo’shtirib olishingiz kerak? </p>
						<p className={' max-w-xs text-lg'}>Shu bo’yicha to’liq ma’lumotlarga ega bo’lasiz.</p>
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
