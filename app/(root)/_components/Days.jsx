import { Button } from '@/components/ui/button'
import Image from 'next/image'
import day from '../../../public/day.jpg'

const Days = () => {
	return (
		<div className={'mx-[10%]'}>
			<h1 className={'w-full pt-10 text-center text-5xl font-semibold'}>
				<span className={'text-green-400'}>Bugunoq Video darsliklarni olib, quyidagi bonuslarga ham Bepul ega bo’lasiz</span>
			</h1>
			<Image
				src={day}
				alt={'days'}
				width={500}
				height={500}
				className={'hidden max-lg:block mx-auto my-5'}
			/>
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-2xl text-white font-semibold mt-2'}><span className={'text-4xl text-green-400 font-semibold '}>1. </span> Yopiq Telergam kanalga qo’shilasiz</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-10'}>
						<p className={'text-3xl'}>Ushbu kanalga:</p>
						<p>• Qurilishga oid yangiliklar </p>
						<p>• Maslahatlar </p>
						<p>• Va endi katlavan paytidagi ishonchli qurilish kompaniyalar ro’yxatini tashlab boramiz.</p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-2xl text-white font-semibold mt-2'}><span
						className={'text-4xl text-green-400 font-semibold '}>2. </span>Bepul Konsultatsiyalarda qatnashasiz
					</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-7 pt-5'}>
						<p>• Har oyda bir marta yoki ikki marta onlayn konsultatsiyalarni yo’lga qo’yamiz.а</p>
						<p>• U yerda siz o’z ishini mutaxassilaridan va yuristlardan savollaringizga javob olishingiz mumkin bo’ladi.</p>
						<p>• Sizni istalgan savollaringizga javob berib turadigan support xizmatimiz bo’ladi.</p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-2xl text-white font-semibold mt-2'}><span
						className={'text-4xl text-green-400 font-semibold '}>3. </span> Uy sotib olishda chegirmaga ega bo’lasiz</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-7'}>
						<p>• Yopiq telegram kanalimizda ishonchli qurilish kompaniyalar ro’yxatini berib boramiz.</p>
						<p>• Agar siz bizni nomimiz orqali ushbu kompaniyalardan uy xarid qiladigan bo’lsangiz, </p>
						<p>• 1% chegirmani ham qo’lga kiritasiz. </p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-2xl text-white font-semibold mt-2'}><span
						className={'text-4xl text-green-400 font-semibold '}>4. </span> Bonus darslarga ega bo’lasiz</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-7'}>
						<p>• Har oyda bir marta qurilishga oid kuchli spikerlarni chaqiramiz, ma’lumotlar olamiz </p>
						<p>• Va ushbu ma’lumotlarni yopiq telegram kanalga yuklab boramiz. </p>
						<p>• Spikerlardan qanday qilib quruvchilarga aldanib qolmaslik, qanday qilib uylarni to’g’ri xarid qilish va tezroq sotish bo’yicha qo’shimcha bilimlarga ham ega bo’lasiz.</p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-2xl text-white font-semibold mt-2'}><span
						className={'text-4xl text-green-400 font-semibold '}>5.</span> Qiziqarli o’yinlarda ishtirok etasiz</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-3'}>
						<p>• Darslarimizni ko’rganingizdan so’ng, bemalol ishonchli uylar ro’yxatini tuzib olib, o’zingiz xarid qilishingiz mumkin.</p>
						<p>• Yokida buni bizga ham topshirishingiz mumkin. </p>
						<p>• Biz sizga o’zimiz hammasini ko’rib beramiz.</p>
						<p>• Bu xizmatimiz uchun qo’shimcha to’lovlar mavjud.</p>
						<p>• Darslarni xarid qilib, telegram guruhga qo’shiladigan bo’lsangiz, biz har oy 5ta ixtiyor kishini tanlab olamiz </p>
						<p>Va ularga uyni ko’rib berish xizmatimizni bepulga taqdim etamiz. </p>
						<p>Bular orasida albatta siz ham bo’lishingiz mumkin.</p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Days
