import { Headset, Video, BadgeDollarSign, BookOpenCheck, Gamepad2 } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa'

const Days = () => {
	return (
		<div className={'px-[10%] bg-black w-full h-full pb-10 pt-4'}>
			<h1 className={'m-0 pt-10 text-center text-4xl  max-md:text-3xl pb-10'}>
				<span className={'inter text-[#feebbd] font-semibold'}>Bugunoq Video darsliklarni olib, quyidagi bonuslarga ham Bepul ega bo’lasiz</span>
			</h1>
			<div className={'grid grid-cols-2 max-md:grid-cols-1 gap-10 mb-0'}>
				
				<div>
					<div className={'border rounded-xl text-white border-[#feebbd] p-5 flex'}>
						<div className={'text-xl space-y-10'}>
							<p className={'text-2xl text-[#feebbd] text-center'}>Yopiq Telergam kanalga qo’shilasiz</p>
							<FaTelegramPlane className={'w-[10rem] mx-auto h-[10rem] mb-[10%]'}/>
							<p> Ushbu kanalga:</p>
							<p> Qurilishga oid yangiliklar </p>
							<p> Maslahatlar </p>
							<p> Va endi katlavan paytidagi ishonchli qurilish <br /> kompaniyalar ro’yxatini tashlab
								boramiz.</p>
						</div>
					</div>
				</div>
				
				<div>
					
					<div className={'border rounded-xl text-white border-[#feebbd] p-5 h-full'}>
						
						<div className={'text-xl block'}>
							<p className={'text-3xl text-[#feebbd] pb-5 text-center'}> 24/7 Savollaringizga Javob olasiz</p>
							<Headset className={'w-[10rem] mx-auto h-[10rem] mb-[10%]'} />
							
							<p className={'text-center'}>Sizni istalgan savollaringizga javob berib turadigan support xizmatimiz bo’ladi.</p>
						</div>
					
					</div>
				</div>
				<div>
					<div className={'border rounded-xl text-white border-[#feebbd] p-5 flex h-full'}>
						<div className={'text-xl space-y-7 pt-5'}>
							<p className={'text-2xl text-[#feebbd] text-center'}>Bepul Konsultatsiyalarda qatnashasiz</p>
							<Video className={'w-[10rem] mx-auto h-[10rem] mb-[10%]'}/>
							<p> Har oyda bir marta yoki ikki marta onlayn konsultatsiyalarni yo’lga qo’yamiz</p>
							<p> U yerda siz o’z ishini mutaxassilaridan va yuristlardan savollaringizga javob
								olishingiz mumkin bo’ladi.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className={'border rounded-xl text-white border-[#feebbd] p-5 flex h-full'}>
						<div className={'text-xl space-y-7'}>
							<p className={'text-2xl text-[#feebbd] text-center'}>Uy sotib olishda chegirmaga ega bo’lasiz</p>
							<BadgeDollarSign className={'w-[10rem] mx-auto h-[10rem] mb-[10%]'} />
							<p> Yopiq telegram kanalimizda ishonchli qurilish kompaniyalar ro’yxatini berib
								boramiz.</p>
							<p> Agar siz bizni nomimiz orqali ushbu kompaniyalardan uy xarid qiladigan bo’lsangiz, </p>
							<p> 1% chegirmani ham qo’lga kiritasiz. </p>
						</div>
					</div>
				</div>
				
				<div>
					<div className={'border rounded-xl text-white border-[#feebbd] p-5 flex h-full'}>
						<div className={'text-xl space-y-7'}>
							<p className={'text-2xl text-[#feebbd] text-center'}>Bonus darslarga ega bo’lasiz</p>
							<BookOpenCheck className={'w-[10rem] mx-auto h-[10rem] mb-[10%]'}/>
							<p> Har oyda bir marta qurilishga oid kuchli spikerlarni chaqiramiz, ma’lumotlar
								olamiz </p>
							<p> Va ushbu ma’lumotlarni yopiq telegram kanalga yuklab boramiz. </p>
							<p> Spikerlardan qanday qilib quruvchilarga aldanib qolmaslik, qanday qilib uylarni to’g’ri
								xarid qilish va tezroq sotish bo’yicha qo’shimcha bilimlarga ham ega bo’lasiz.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className={'border rounded-xl text-white border-[#feebbd] p-5 flex'}>
						<div className={'text-xl space-y-3'}>
							<p className={'text-2xl text-[#feebbd] text-center  '}>Qiziqarli o’yinlarda ishtirok
								etasiz</p>
							<Gamepad2 className={'w-[10rem] mx-auto h-[10rem] mb-[10%]'} />
							<p> Darslarimizni ko’rganingizdan so’ng, bemalol ishonchli uylar ro’yxatini tuzib olib,
								o’zingiz xarid qilishingiz mumkin.</p>
							<br />
							<p> Yokida buni bizga ham topshirishingiz mumkin. </p>
							<br />
							<p> Biz sizga o’zimiz hammasini ko’rib beramiz.</p>
							<br />
							<p> Bu xizmatimiz uchun qo’shimcha to’lovlar mavjud.</p>
							<br />
							<p> Darslarni xarid qilib, telegram guruhga qo’shiladigan bo’lsangiz, biz har oy 5ta
								ixtiyor kishini tanlab olamiz </p>
							<br />
							<p> Va ularga uyni ko’rib berish xizmatimizni bepulga taqdim etamiz. </p>
							<br />
							<p> Bular orasida albatta siz ham bo’lishingiz mumkin.</p>
						</div>
					</div>
				
				</div>
			</div>
		</div>
	)
}
export default Days
