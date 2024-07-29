import Image from 'next/image'

const AboutMe = () => {
	return (
		<div className={'my-10'}>
			
			<div className={'hidden max-lg:block mb-5'}>
				<Image className={'w-[90%] mx-auto'} src={'/about1.JPG'} alt={'about1'} width={450} height={450} />
			</div>
			<div className={'flex justify-evenly max-lg:w-full max-lg:text-center'}>
				<div className={'max-w-2xl'}>
					<h1 className={'text-3xl font-semibold mb-5'}>Assalomu Alaykum, Ismim Behzod Umarov.</h1>
					<p className={'text-xl leading-[2]'}>Ko’chmas mulk savdosi bo’yicha 4 yillik tajribaga egaman.
						Ushbu vaqt davomida 100 dan ortiq uy sotib olmoqchi bo’lganlar bilan gaplashgan bo’lsam…
						Ko’pchilikda deyarli bir xil muammoni kuzatardim.
						10-15 yil davomida yig’ib-terib endi uy olaman deganda aldanib qolishlik…
						Ishonchsiz quruvchini tanlab qo’yishlik…
						To’g’ri shartnoma qilmaslik…
						Uylarni vaqtida bitmasligi…
						Quruvchini katta va’dalariga ishonib qolish va hokazo.
						Sanaydigan bo’lsam, muammolar juda ham ko’p.
						Aksariyat odamlarni bu muammolarga uchrashini sababi…
						Bu - ularni ko’chmas mulk bo’yicha yetarlicha bilimga ega emasliklaridir.
						Bilimlari yo’qligi uchun esa…
						“Endi mani ham uyim bo’ladi” deb yaxshi niyatlarda yeg’gan
						$60,000…
						$80,000…
						Kerak bo’lsa $100,000 lariga ham aldanib qolishadi.
						Bunday holatlarni juda ko’p kuzatdim. Bilasizmi, ko’pchilik uy sotib olishdan oldin asosan
						nimaga ko’proq e’tibor berishadi?
						Narxiga!
						Naxi qulay bo’lsa tezda dogovor qilib yuborishadi!
						Uyni tarixiga…
					</p>
				</div>
				
				<div className={'hidden lg:flex'}>
					<Image src={'/about1.JPG'} alt={'about1'} width={450} height={450} />
				</div>
			</div>
			
			
			<div className={'mt-24'}>
				<div className={'flex justify-evenly max-lg:w-full max-lg:text-center'}>
					<div className={'hidden lg:flex'}>
						<Image src={'/about2.JPEG'} alt={'about2'} width={450} height={450} />
					</div>
					
					<div className={'xl:max-w-2xl lg:max-w-xl max-lg:max-w-2xl'}>
						<h1 className={'text-3xl font-semibold mb-5'}>Kerakli xujjatlariga…</h1>
						<p className={'text-xl  leading-[2.5]'}>Shartnoma ko’proq quruvchini foydasigami yoki mijozni foydasiga tuzilganmi?
							
							Bu narsalarga e’tibor berishmaydi.
							
							Quruvchini ishonchliligi bilan xujjatlari joyida bo’lmasa, uyingizni qurilishi ancha cho’zilib ketishi mumkin
							
							Yoki quruvchi pullaringizni o’zlashtirib, ertaga “bankrot bo’ldik” deb e’lon qilib yuborishi ham hech gap emas.
							
							Undan tashqari, agar hujjatlari joyida bo’lmasa bino qurilib bo’lganidan keyin kadastri chiqmasligi mumkin.
							
							Qurilish sifatsiz bo’lib qolishi mumkin…
							
							Bularning barchasi uy sotib olish bo’yicha yetarlicha bilimga ega bo’lmaganlik sabab yuz beradi.
							
							Agar siz ham yaqin orada uy olishni reja qilib yurgan bo’lsangiz…
							
							Xavotirga o’rin yo’q.
							
							Biz jamoamiz bilan sizga ko’chmas mulk bo’yicha bilimingizni oshirishga yordam beradigan  video darsliklar ishlab chiqdik.
						</p>
					</div>
				
				
				</div>
			</div>
		
		</div>
	)
}
export default AboutMe
