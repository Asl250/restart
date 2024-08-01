import Image from 'next/image'

const Opportunity = () => {
	return(
		<div className={' text-white'}>
			<div className={'py-5 w-full text-center my-10'}>
				<h1 className={'text-6xl max-md:text-4xl  leading-[1.5] font-semibold max-lg:w-full max-lg:px-[50px]'}>
					<span className={'text-black oswald'}>Video Darslik Sizga Qanday Foyda Beradi?</span></h1>
			</div>
			
			<div className={'max-md:text-start w-[50%] mx-auto max-md:w-full max-lg:px-[50px] text-black'}>
				<div className={'mb-16'}>
					
					<div className={'space-y-3'}>
						<p className={'mt-3 font-semibold text-3xl mb-5 max-md:text-2xl'}><span className={'text-[#db4034] text-3xl pr-2'}>•</span>Qanday qilib uylarni to’g’ri sotib olishni o’rganasiz</p>
						<p className={' text-xl pt-4'}>- Qaysi etajdan uy tanlash kerak?</p>
						<p className={'  text-xl pt-4'}>- Qaysi lokatsiyadan uy olish kerak?</p>
						<p className={' text-xl pt-4'}>- Quruvchini ishonchliligini qanaqa qilib tekshirsa bo’ladi? </p>
						<p className={'  text-xl pt-4'}>- Qanaqa qilib quruvchi haqida to’liq ma’lumot olsa bo’ladi? </p>
						<p className={' text-xl pt-4'}>Shuni hammasini bilib olasiz.</p>
					</div>
				
				
				</div>
				
				<div className={'mb-16'}>
					<div className={'space-y-7 text-xl'}>
						<p className={'mt-3 font-semibold text-3xl mb-5 max-md:text-2xl'}><span
							className={'text-[#db4034] text-3xl pr-2'}>•</span>Xujjatlar
							bilan ishlashni
							o’rganasiz</p>
						<p className={' text-xl'}>Quruvchini loyihaga oid qanaqa xujjatlari bor yoki qanaqalari
							yo’q?</p>
						<p className={'text-xl'}>Hammasini to’liq ko’rib chiqa olasiz va to’liq tushuna olasiz. </p>
						<p className={'text-xl'}>Xujjatlarida qandaydir kamchiliklar bo’lsa, darhol sezasiz.</p>
						<p className={'text-xl'}>Undan tashqari…</p>
						<p className={'text-xl'}>- Qurilishni qaysi etapi to’g’ri qurilyapti?</p>
						<p>- Qayeri noto’g’ri ketyapti?</p>
						<p>- Hammasi reja bo’yicha ketyaptimi yoki rejaga o’zgartirish kiritildimi…</p>
						<p>Hammasini bila olasiz.</p>
					</div>
				
				
				</div>
				
				<div className={''}>
					<div className={'space-y-7 text-xl'}>
						<p className={'mt-3 font-semibold text-3xl mb-5 max-md:text-2xl'}><span className={'text-[#db4034] text-3xl pr-2'}>•</span>Shartnoma
							bilan ishlashni
							o’rganasiz.</p>
						<p className={' text-xl'}>- Shartnomada qaysi bandlar bo’lishi kerak?  </p>
						<p className={' text-xl'}>- Shartoma tuzayotganda nimalarga e’tibor berish kerak? </p>
						<p className={' text-xl'}>- Quruvchi bilan ertaga tushunmovchiliklar kelib chiqadigan bo’lsa…</p>
						<p className={' max-w-xs text-xl'}>Siz yutib chiqishingiz uchun shartnomaga qanday bandlarni qo’shtirib olishingiz kerak? </p>
						<p>Shu bo’yicha to’liq ma’lumotlarga ega bo’lasiz.</p>
						<p>Bu hali hammasi emas…</p>
						<p>Bugunoq video darsliklarni olib, quyidagi bepul bonuslarga ham ega bo’lasiz!</p>
					</div>
				
				
				</div>
			</div>
		</div>
	)
}
export default Opportunity
