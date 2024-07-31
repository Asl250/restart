import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaTelegramPlane } from 'react-icons/fa'
import day from '../../../public/day.jpg'

const Days = () => {
	return (
		<div className={'mx-[10%]'}>
			<h1 className={'w-full pt-10 text-center text-5xl font-semibold'}>
				<span className={'inter'}>Bugunoq Video darsliklarni olib, quyidagi bonuslarga ham Bepul ega bo’lasiz</span>
			</h1>
			<div className={'grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-10'}>
				
				<div>
					<div className={'bg-gradient-to-tr from-[#00C9FF] to-[#92FE9D] p-5 flex'}>
						<div className={'text-xl space-y-10'}>
							<p className={'text-2xl'}>1. Yopiq Telergam kanalga qo’shilasiz</p>
							<p>Ushbu kanalga:</p>
							<p>• Qurilishga oid yangiliklar </p>
							<p>• Maslahatlar </p>
							<p>• Va endi katlavan paytidagi ishonchli qurilish <br /> kompaniyalar ro’yxatini tashlab
								boramiz.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className={'bg-gradient-to-tr from-[#00C9FF] to-[#92FE9D] p-5 flex h-full'}>
						<div className={'text-xl'}>
							<p className={'text-2xl'}>2. 24/7 Savollaringizga Javob olasiz</p>
							<p>• Sizni istalgan savollaringizga javob berib turadigan support xizmatimiz bo’ladi.</p>
						</div>
					</div>
				</div>
				<div>
					<div className={'bg-gradient-to-tr from-[#00C9FF] to-[#92FE9D] p-5 flex h-full'}>
						<div className={'text-xl space-y-7 pt-5'}>
							<p className={'text-2xl'}>3. Bepul Konsultatsiyalarda qatnashasiz</p>
							<p>• Har oyda bir marta yoki ikki marta onlayn konsultatsiyalarni yo’lga qo’yamiz.а</p>
							<p>• U yerda siz o’z ishini mutaxassilaridan va yuristlardan savollaringizga javob
								olishingiz mumkin bo’ladi.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className={'bg-gradient-to-tr from-[#00C9FF] to-[#92FE9D] p-5 flex h-full'}>
						<div className={'text-xl space-y-7'}>
							<p className={'text-2xl'}>4. Uy sotib olishda chegirmaga ega bo’lasiz</p>
							<p>• Yopiq telegram kanalimizda ishonchli qurilish kompaniyalar ro’yxatini berib
								boramiz.</p>
							<p>• Agar siz bizni nomimiz orqali ushbu kompaniyalardan uy xarid qiladigan bo’lsangiz, </p>
							<p>• 1% chegirmani ham qo’lga kiritasiz. </p>
						</div>
					</div>
				</div>
				
				<div>
					<div className={'bg-gradient-to-tr from-[#00C9FF] to-[#92FE9D] p-5 flex h-full'}>
						<div className={'text-xl space-y-7'}>
							<p className={'text-2xl'}>5. Bonus darslarga ega bo’lasiz</p>
							
							<p>• Har oyda bir marta qurilishga oid kuchli spikerlarni chaqiramiz, ma’lumotlar
								olamiz </p>
							<p>• Va ushbu ma’lumotlarni yopiq telegram kanalga yuklab boramiz. </p>
							<p>• Spikerlardan qanday qilib quruvchilarga aldanib qolmaslik, qanday qilib uylarni to’g’ri
								xarid qilish va tezroq sotish bo’yicha qo’shimcha bilimlarga ham ega bo’lasiz.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className={'bg-gradient-to-tr from-[#00C9FF] to-[#92FE9D] p-5 flex'}>
						<div className={'text-xl space-y-3'}>
							<p className={'text-2xl'}>6. Qiziqarli o’yinlarda ishtirok etasiz</p>
							<p>• Darslarimizni ko’rganingizdan so’ng, bemalol ishonchli uylar ro’yxatini tuzib olib,
								o’zingiz xarid qilishingiz mumkin.</p>
							<p>• Yokida buni bizga ham topshirishingiz mumkin. </p>
							<p>• Biz sizga o’zimiz hammasini ko’rib beramiz.</p>
							<p>• Bu xizmatimiz uchun qo’shimcha to’lovlar mavjud.</p>
							<p>• Darslarni xarid qilib, telegram guruhga qo’shiladigan bo’lsangiz, biz har oy 5ta
								ixtiyor kishini tanlab olamiz </p>
							<p>Va ularga uyni ko’rib berish xizmatimizni bepulga taqdim etamiz. </p>
							<p>Bular orasida albatta siz ham bo’lishingiz mumkin.</p>
						</div>
					</div>
				
				</div>
			</div>
		</div>
	)
}
export default Days
