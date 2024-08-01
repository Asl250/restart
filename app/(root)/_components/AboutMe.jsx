import { Button } from '@/components/ui/button'
import Image from 'next/image'

const AboutMe = () => {
	return (
		<div className={'pt-10 w-full'}>
			<div className={'inter font-[18px] text-start'}>
				<div className={'px-[200px] max-lg:px-[50px]'}>
							<p className={'text-lg text-start inter'}>Behzod Umarov ofisidan,
								<br/>
								Yunusobod, Toshkent.
							</p>
							<hr className={'h-[5px] bg-[#db4034] mb-16 w-[200px] mt-3'}/>
							<p className={'text-xl'}>
								Hurmatli yaqin orada uy olishni rejalashtirayotgan do’stim…
								<br/>
								<br/>
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
						<p className={'text-xl'}>
							<b>NARXIGA!</b>
							<br /><br />
							Naxi qulay bo’lsa tezda dogovor qilib yuborishadi!
							<br /><br />
							Uyni tarixiga…
							<br /><br />
							Kerakli xujjatlariga…
							<br /><br />
							Shartnoma ko’proq quruvchini foydasigami yoki mijozni foydasiga tuzilganmi?
							<br /><br />
							Bu narsalarga e’tibor berishmaydi.
							<br /><br />
							Quruvchini ishonchliligi bilan xujjatlari joyida bo’lmasa…
							<br /><br />
							<span className={'bg-[#faee2b]'}> Uyingizni qurilishi ancha cho’zilib ketishi mumkin.</span>
							<br /><br />
							Yoki quruvchi pullaringizni o’zlashtirib, ertaga <b> “bankrot bo’ldik” </b>deb e’lon qilib yuborishi ham hech gap emas.
							<br /><br />
							Undan tashqari, agar hujjatlari joyida bo’lmasa bino qurilib bo’lganidan keyin kadastri chiqmasligi mumkin.
							<br /><br />
							Qurilish sifatsiz bo’lib qolishi mumkin…
							<br /><br />
							Bularning barchasi uy sotib olish bo’yicha yetarlicha bilimga ega bo’lmaganlik sabab yuz beradi.
							<br /><br />
							Agar siz ham yaqin orada uy olishni reja qilib yurgan bo’lsangiz…
							<br /><br />
							Xavotirga o’rin yo’q.
							<br /><br />
							Biz jamoamiz bilan sizga ko’chmas mulk bo’yicha <b> bilimingizni oshirishga yordam beradigan</b>  video darsliklar ishlab chiqdik.
						</p>
					</div>
				
				
				</div>
			</div>
		 <div className={'w-full items-center'}>
			 <Button className={'mt-24 hover:bg-[#db4034] italic font-bold bg-[#db4034] w-[80%] md:w-[50%]  py-16 max-md:py-7  xl:text-4xl lg:text-3xl md:text-2xl max-md:text-xl  uppercase mx-auto md:mx-[25%] max-md:mx-[10%]'}>Hoziroq Darslikni olish</Button>
			 <p className={'text-center max-md:text-lg text-2xl mt-7 inter font-[17px]'}>Shoshiling! Joylar soni kam qoldi! </p>
			 <div className={'w-full flex justify-center space-x-1 mt-3'}>
				 <Image className={'md:w-[30%] mb-10'} src={'/check.gif'} alt={'d'} width={300} height={100}/>
			 </div>
		 </div>
		</div>
	)
}
export default AboutMe
