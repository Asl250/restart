import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Opportunity = () => {
	return(
		<div className={'bg-[#fdf5f2] text-white'}>
			<div className={'py-5 w-full text-center my-10'}>
				<h1 className={'text-6xl max-md:text-4xl  leading-[1.5] font-semibold max-lg:w-full max-lg:px-[50px]'}>
					<span className={'text-black oswald'}>Video Darslik Sizga <br className={'lg:block hidden'}/> Qanday Foyda Beradi?</span></h1>
			</div>
			
			<div className={'max-md:text-start w-[37%] mx-auto max-md:w-full max-lg:px-[50px] text-black'}>
				<div className={'mb-16'}>
					
					<div className={'space-y-3'}>
						<p className={'mt-3 font-semibold text-3xl mb-5 max-md:text-2xl'}><span
							className={'text-[#db4034] text-3xl pr-2'}>•</span>Qanday qilib uylarni to’g’ri sotib
							olishni o’rganasiz</p>
						<p className={' max-md:text-xl text-2xl pt-4'}>- Qaysi etajdan uy tanlash kerak?</p>
						<p className={' max-md:text-xl text-2xl pt-4'}>- Qaysi lokatsiyadan uy olish kerak?</p>
						<p className={' max-md:text-xl text-2xl pt-4'}>- Quruvchini ishonchliligini qanaqa qilib tekshirsa bo’ladi? </p>
						<p className={' max-md:text-xl text-2xl pt-4'}>- Qanaqa qilib quruvchi haqida to’liq ma’lumot olsa
							bo’ladi? </p>
						<p className={' max-md:text-xl text-2xl pt-4'}>Shuni hammasini bilib olasiz.</p>
					</div>
				
				
				</div>
				
				<div className={'mb-16'}>
					<div className={'space-y-7 text-xl'}>
						<p className={'mt-3 font-semibold text-3xl mb-5 max-md:text-2xl'}><span
							className={'text-[#db4034] text-3xl pr-2'}>•</span>Xujjatlar
							bilan ishlashni
							o’rganasiz</p>
						<p className={' max-md:text-xl text-2xl'}>Quruvchini loyihaga oid qanaqa xujjatlari bor yoki qanaqalari
							yo’q?</p>
						<p className={'max-md:text-xl text-2xl'}>Hammasini to’liq ko’rib chiqa olasiz va to’liq tushuna olasiz. </p>
						<p className={'max-md:text-xl text-2xl'}>Xujjatlarida qandaydir kamchiliklar bo’lsa, darhol sezasiz.</p>
						<p className={'max-md:text-xl text-2xl'}>Undan tashqari…</p>
						<p className={'max-md:text-xl text-2xl'}>- Qurilishni qaysi etapi to’g’ri qurilyapti?</p>
						<p className={' max-md:text-xl text-2xl'}>- Qayeri noto’g’ri ketyapti?</p>
						<p className={' max-md:text-xl text-2xl'}>- Hammasi reja bo’yicha ketyaptimi yoki rejaga o’zgartirish kiritildimi…</p>
						<p className={' max-md:text-xl text-2xl'}>Hammasini bila olasiz.</p>
					</div>
				
				
				</div>
				
				<div className={''}>
					<div className={'space-y-7 text-xl'}>
						<p className={'mt-3 font-semibold text-3xl mb-5 max-md:text-2xl'}><span
							className={'text-[#db4034] text-3xl pr-2'}>•</span>Shartnoma
							bilan ishlashni
							o’rganasiz.</p>
						<p className={' max-md:text-xl text-2xl'}>- Shartnomada qaysi bandlar bo’lishi kerak? </p>
						<p className={' max-md:text-xl text-2xl'}>- Shartoma tuzayotganda nimalarga e’tibor berish kerak? </p>
						<p className={' max-md:text-xl text-2xl'}>- Quruvchi bilan ertaga tushunmovchiliklar kelib chiqadigan
							bo’lsa…</p>
						<p className={' max-md:text-xl text-2xl'}>Siz yutib chiqishingiz uchun shartnomaga qanday bandlarni qo’shtirib olishingiz kerak? </p>
						<p className={' max-md:text-xl text-2xl'}>Shu bo’yicha to’liq ma’lumotlarga ega bo’lasiz.</p>
						<p className={' max-md:text-xl text-2xl'}>Bu hali hammasi emas…</p>
						<p className={' max-md:text-xl text-2xl'}>Bugunoq video darsliklarni olib, quyidagi bepul bonuslarga ham ega bo’lasiz!</p>
					</div>
				
				
				</div>
			</div>
			<div className={'w-full items-center'}>
				<Button
					className={'mt-24 hover:bg-[#e73904] italic font-bold bg-[#e73904] w-[80%] md:w-[50%]  py-10 max-md:py-7  xl:text-4xl lg:text-3xl md:text-2xl max-md:text-xl  uppercase mx-auto md:mx-[25%] max-md:mx-[10%]'}>Hoziroq
					Darslikni olish</Button>
				<p className={'text-center max-md:text-lg text-2xl mt-7 inter font-[17px] text-black'}>Shoshiling! Joylar soni kam
					qoldi! </p>
				<div className={'w-full flex justify-center space-x-1 mt-3'}>
					<Image className={'md:w-[30%] mb-10'} src={'/redGif.gif'} alt={'d'} width={300} height={100} />
				</div>
			</div>
		</div>
	)
}
export default Opportunity
