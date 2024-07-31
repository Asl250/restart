import Image from 'next/image'

const Opportunity = () => {
	return(
		<div className={'bg-black text-white'}>
			<div className={'md:flex justify-between leading-relaxed md:mx-[10%] py-10'}>
				<h1 className={' text-5xl max-w-3xl max-md:text-3xl leading-[1.5] font-semibold max-lg:w-full max-lg:text-center'}>
					<span className={'text-[#feebbd]'}>Video Darslik Sizga Qanday Foyda Beradi?</span></h1>
			</div>
			
			<div className={'mx-[10%] mt-10 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10'}>
				<div className={'bg-black rounded-lg p-5 border border-[#feebbd]'}>
					<h1 className={'text-2xl'}>Modul 1</h1>
					<hr className={'w-full p-px'} />
					<div className={'space-y-3 '}>
						<p className={'mt-3 font-semibold text-2xl mb-5 text-[#feebbd]'}> Qanaqa qilib uylarni to’g’ri sotib olishni o’rganasiz</p>
						<p className={'max-w-xs text-lg pt-4'}>- Qaysi etajdan uy tanlash kerak?</p>
						<p className={' max-w-xs text-lg pt-4'}>- Qaysi lokatsiyadan uy olish kerak?</p>
						<p className={' max-w-xs text-lg pt-4'}>- Quruvchini ishonchliligini qanaqa qilib tekshirsa bo’ladi? </p>
						<p className={' max-w-xs text-lg pt-4'}>- Qanaqa qilib quruvchi haqida to’liq ma’lumot olsa bo’ladi? </p>
						<p className={' max-w-xs text-lg pt-4'}>Shuni hammasini bilib olasiz.</p>
					</div>
				
				
				</div>
				
				<div className={'bg-black rounded-lg p-5 border border-[#feebbd]'}>
					<h1 className={'text-2xl'}>Modul 2</h1>
					<hr className={'w-full p-px'} />
					<div className={'space-y-7'}>
						<p className={'mt-3 font-semibold text-2xl mb-5 text-[#feebbd]'}>Xujjatlar bilan ishlashni
							o’rganasiz</p>
						<p className={' max-w-xs text-lg'}>- Quruvchini proyektga oid qanaqa xujjatlari bor yoki
							qanaqalari yo’q?</p>
						<p className={' max-w-xs text-lg'}>Hammasini to’liq ko’rib chiqa olasiz va to’liq tushuna
							olasiz. </p>
						<p className={' max-w-xs text-lg'}>Xujjatlarida qandaydir kamchiliklar bo’lsa, darhol
							sezasiz.</p>
						<p className={' max-w-xs text-lg'}>Undan tashqari, qurilishni qaysi etapi to’g’ri qurilyapti,
							qayeri noto’g’ri ketyapti, hammasi reja bo’yicha ketyaptimi yoki rejaga o’zgartirish
							kiritildimi hammasini bila olasiz.</p>
					</div>
				
				
				</div>
				
				<div className={'bg-black rounded-lg p-5 border border-[#feebbd]'}>
					<h1 className={'text-2xl'}>Modul 3</h1>
					<hr className={'w-full p-px'} />
					<div className={'space-y-7'}>
						<p className={'mt-3 font-semibold text-2xl mb-5 text-[#feebbd]'}>Shartnoma bilan ishlashni
							o’rganasiz.</p>
						<p className={' max-w-xs text-lg'}>- Shartnomada qaysi bandlar bo’lishi kerak? </p>
						<p className={' max-w-xs text-lg'}>- Shartoma tuzayotganda nimalarga e’tibor berish kerak? </p>
						<p className={'max-w-xs text-lg'}>- Quruvchi bilan ertaga tushunmovchiliklar kelib chiqadigan
							bo’lsa, siz yutib chiqishingiz uchun shartnomaga qanday bandlarni qo’shtirib olishingiz
							kerak? </p>
						<p className={' max-w-xs text-lg'}>Shu bo’yicha to’liq ma’lumotlarga ega bo’lasiz.</p>
					</div>
				
				
				</div>
			</div>
		</div>
	)
}
export default Opportunity
