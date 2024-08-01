import Image from 'next/image'

const AboutMe = () => {
	return (
		<div className={'my-10'}>
			
			<div className="">
				<img src={'/aboutFinal.jpg'} alt='logo' className='w-[400px] max-sm:w-[200px] mx-auto my-10' />
			</div>
			<div className={'inter font-[18px] text-start'}>
				<div className={'px-[200px] max-lg:px-[50px]'}>
							<p className={'text-lg text-start mb-16'}>Behzod Umarov ofisidan,
								<br/>
								Yunusobod, Toshkent.
							</p>
							<p className={'text-lg'}>
								Hurmatli yaqin orada uy olishni rejalashtirayotgan do’stim…
								Oxirigi 4 yil ichida 100 dan ortiq uy sotib olmoqchi bo’lganlar bilan gaplashgan bo’lsam…
								<br/><br/>
								Ko’pchilikda deyarli bir xil muammoni kuzatardim.
								<br/><br/>
								<b>10-15 yil davomida yig’ib-terib endi uy olaman deganda aldanib qolishlik…</b>
								<br/><br/>
								Ishonchsiz quruvchini tanlab qo’yishlik…
								<br/><br/>
								To’g’ri shartnoma qilmaslik…
								
								<br/><br/>
								Uylarni vaqtida bitmasligi…
								<br/><br/>
								Quruvchini katta va’dalariga ishonib qolish va hokazo.
								<br/><br/>
								Sanaydigan bo’lsam, muammolar juda ham ko’p.
								<br/><br/>
								Aksariyat odamlarni bu muammolarga uchrashini sababi…
								<br/><br/>
								Bu - ularni ko’chmas mulk bo’yicha <span className={'bg-[#faee2b]'}> yetarlicha bilimga ega emasliklaridir.</span>
								<br/><br/>
								Bilimlari yo’qligi uchun esa…
								<br/><br/>
								<b>“Endi mani ham uyim bo’ladi” </b>deb yaxshi niyatlarda yeg’gan
								<br/><br/>
								$60,000…
								<br/><br/>
								$80,000…
								<br/><br/>
								Kerak bo’lsa $100,000 lariga ham aldanib qolishadi.
								<br/><br/>
								Bunday holatlarni juda ko’p kuzatdim.
								<br/><br/>
								Bilasizmi, ko’pchilik uy sotib olishdan oldin asosan nimaga ko’proq e’tibor berishadi?
							</p>
						</div>
						
					</div>
			
			
			<div className={'mt-7'}>
				<div className={'text-start'}>
					
					<div className={'px-[200px] max-lg:px-[50px]'}>
						<p className={'text-lg'}>
							<b>NARXIGA!</b>
							<br/><br/>
							Naxi qulay bo’lsa tezda dogovor qilib yuborishadi!
							<br/><br/>
							Uyni tarixiga…
							<br/><br/>
							Kerakli xujjatlariga…
							<br/><br/>
							Shartnoma ko’proq quruvchini foydasigami yoki mijozni foydasiga tuzilganmi?
							<br/><br/>
							Bu narsalarga e’tibor berishmaydi.
							<br/><br/>
							Quruvchini ishonchliligi bilan xujjatlari joyida bo’lmasa…
							<br/><br/>
							<span className={'bg-[#faee2b]'}> Uyingizni qurilishi ancha cho’zilib ketishi mumkin.</span>
						
						</p>
					</div>
				
				
				</div>
			</div>
		
		</div>
	)
}
export default AboutMe
