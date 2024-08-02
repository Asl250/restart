import { Button } from '@/components/ui/button'
import { Headset, Video, BadgeDollarSign, BookOpenCheck, Gamepad2 } from 'lucide-react';
import Image from 'next/image'
import { FaTelegramPlane } from 'react-icons/fa'

const Days = () => {
	return (
		<div className={'pb-[10%]  text-black w-full h-full mt-16'}>
			<div className={''}>
				<div>
					<div className={'max-md:px-[50px] pb-16'}>
						<div className={'text-xl space-y-5'}>
							<p className={'text-xl bg-[#e73904] font-bold text-white w-[200px] py-3 rounded-md mx-auto text-center italic mb-10'}>BONUS
								#1</p>
							<p className={'text-6xl uppercase barlow max-md:text-3xl font-[1000] text-center'}>Yopiq Telegram
								kanalga qo’shilasiz</p>
							<FaTelegramPlane className={'w-[8rem] mx-auto h-[8rem]'} />
							<p className={'w-full text-center max-md:text-start m-0'}> Ushbu kanalga:</p>
							<p className={'w-full text-center max-md:text-start'}>• Qurilishga oid yangiliklar </p>
							<p className={'w-full text-center max-md:text-start'}>• Maslahatlar </p>
							<p className={'w-full text-center max-md:text-start'}>• Va endi katlavan paytidagi ishonchli
								qurilish <br /> kompaniyalar ro’yxatini tashlab
								boramiz.</p>
						</div>
					</div>
				</div>
				
				<div>
					
					<div className={'max-md:px-[50px] pb-16'}>
						
						<div className={'text-xl space-y-10'}>
							<p className={'text-xl bg-[#e73904] text-white w-[200px] rounded-md font-bold py-3 mx-auto text-center italic mb-10'}>BONUS
								# 2
							</p>
							
							<p className={'text-6xl uppercase barlow max-md:text-3xl font-[1000] text-center mb-10'}> 24/7
								Savollaringizga Javob olasiz
							</p>
							<Headset className={'w-[8rem] mx-auto h-[8rem] mb-5 mt-20'} />
							
							<p className={'text-center  max-md:text-start'}>Sizni istalgan savollaringizga javob berib
								turadigan support
								xizmatimiz bo’ladi.
							</p>
						</div>
					
					</div>
				</div>
				<div>
					<div className={'pb-16 bg-[#e73904] text-white py-16 max-md:px-[50px]'}>
						<div className={' text-xl space-y-5'}>
							<p className={'text-xl bg-black text-white w-[200px] font-bold py-3 rounded-md mx-auto text-center italic mb-10'}>BONUS
								#3</p>
							
							<p className={'text-6xl barlow max-md:text-3xl font-[1000] text-center uppercase'}>Bepul
								Konsultatsiyalarda qatnashasiz</p>
							<Video className={'w-[8rem] mx-auto h-[8rem] my-5'} />
							<p className={'w-full text-center max-md:text-start'}> Har oyda bir marta
								yoki ikki marta onlayn konsultatsiyalarni yo’lga qo’yamiz</p>
							<p className={'w-full text-center max-md:text-start'}> U yerda siz o’z ishini
								mutaxassilaridan va yuristlardan savollaringizga javob
								olishingiz mumkin bo’ladi.</p>
						</div>
					</div>
				</div>
				
				<div className={'pb-16'}>
					<div className={''}>
						<div className={'space-y-5 bg-[#e73904] text-white py-16 max-md:px-[50px]'}>
							<p className={'text-xl bg-black text-white w-[200px] font-bold py-3 rounded-md mx-auto text-center italic mb-10'}>BONUS
								#4</p>
							
							<p className={'text-6xl uppercase barlow max-md:text-3xl font-[1000] text-center'}>Uy sotib olishda
								chegirmaga ega bo’lasiz</p>
							<BadgeDollarSign className={'w-[8rem] mx-auto h-[8rem] my-5'} />
							<p className={'w-full  text-xl text-center max-md:text-start'}> Yopiq telegram kanalimizda ishonchli
								qurilish
								kompaniyalar ro’yxatini berib
								boramiz.</p>
							<p className={'w-full text-xl text-center max-md:text-start'}> Agar siz bizni nomimiz orqali ushbu
								kompaniyalardan uy
								xarid qiladigan bo’lsangiz, </p>
							<p className={'w-full text-xl text-center max-md:text-start'}> 1% chegirmani ham qo’lga
								kiritasiz. </p>
						</div>
					</div>
				</div>
				
				<div>
					<div className={''}>
						<div className={'pb-16 text-xl space-y-5 max-md:px-[50px]'}>
							<p className={'text-xl bg-[#e73904] text-white w-[200px] font-bold py-3 rounded-md mx-auto text-center italic mb-10'}>BONUS
								#5</p>
							
							<p className={'text-6xl uppercase barlow max-md:text-3xl font-[1000] text-center'}>Bonus darslarga ega
								bo’lasiz</p>
							<BookOpenCheck className={'w-[8rem] mx-auto h-[8rem] my-5'} />
							<p className={'w-full text-center max-md:text-start'}> Har oyda bir marta qurilishga oid
								kuchli spikerlarni
								chaqiramiz, ma’lumotlar
								olamiz </p>
							<p className={'w-full text-center max-md:text-start'}> Va ushbu ma’lumotlarni yopiq telegram
								kanalga yuklab
								boramiz. </p>
							<p className={'w-full text-center  max-md:text-start'}> Spikerlardan qanday qilib
								quruvchilarga aldanib
								qolmaslik, qanday qilib uylarni to’g’ri
								xarid qilish va tezroq sotish bo’yicha qo’shimcha bilimlarga ham ega bo’lasiz.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className={''}>
						<div className={'text-xl space-y-5 max-md:px-[50px]'}>
							<p className={'text-xl bg-[#e73904] text-white w-[200px] font-bold py-3 rounded-md mx-auto text-center italic mb-10'}>BONUS
								#6</p>
							<p className={'text-6xl uppercase barlow max-md:text-3xl font-[1000] text-center'}>Qiziqarli
								o’yinlarda ishtirok
								etasiz</p>
							<Gamepad2 className={'w-[8rem] mx-auto h-[8rem] my-5'} />
							<p className={'w-full text-center max-md:text-start'}> Darslarimizni ko’rganingizdan so’ng,
								bemalol ishonchli
								uylar ro’yxatini tuzib olib,
								o’zingiz xarid qilishingiz mumkin.</p>
							<p className={'w-full text-center max-md:text-start'}> Yokida buni bizga ham topshirishingiz
								mumkin. </p>
							<p className={'w-full text-center max-md:text-start'}> Biz sizga o’zimiz hammasini ko’rib
								beramiz.</p>
							<p className={'w-full text-center max-md:text-start'}> Bu xizmatimiz uchun qo’shimcha
								to’lovlar mavjud.</p>
							<p className={'w-full text-center max-md:text-start'}> Darslarni xarid qilib, telegram
								guruhga qo’shiladigan
								bo’lsangiz, biz har oy 5ta
								ixtiyor kishini tanlab olamiz </p>
							<p className={'w-full text-center max-md:text-start'}> Va ularga uyni ko’rib berish
								xizmatimizni bepulga
								taqdim etamiz. </p>
							<p className={'w-full text-center max-md:text-start'}> Bular orasida albatta siz ham
								bo’lishingiz mumkin.</p>
						</div>
					</div>
				
				</div>
			</div>
			<div className={'w-full items-center'}>
				<Button
					className={'mt-24 hover:bg-[#e73904] italic font-bold bg-[#e73904] w-[80%] md:w-[50%]  py-16 max-md:py-7  xl:text-4xl lg:text-3xl md:text-2xl max-md:text-xl  uppercase mx-auto md:mx-[25%] max-md:mx-[10%]'}>Hoziroq
					Darslikni olish</Button>
				<p className={'text-center max-md:text-lg text-2xl mt-7 inter font-[17px] text-black'}>Shoshiling!
					Joylar soni kam
					qoldi! </p>
				<div className={'w-full flex justify-center space-x-1 mt-3'}>
					<Image className={'md:w-[30%] mb-10'} src={'/check.gif'} alt={'d'} width={300} height={100} />
				</div>
			</div>
		</div>
	)
}
export default Days
