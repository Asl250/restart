import Image from 'next/image'
const Eyes = () => {
	return (
		<div className={'text-black py-24 bg-[#fdf5f2]'}>
			<div className={'flex justify-center'}>
				<Image src={'/left.png'} alt={'left'} width={70} height={50}/>
				<div
					className={'pt-10 px-[-10px] font-[800] inter text-7xl max-md:text-5xl max-sm:text-3xl text-center'}>“Ko’zlarimga
					Ishonmayman”
					<h1 className={' inter max-md:text-sm text-lg text-center mt-4'}>nomli to’lovingizni 100%
						to’liq holda qaytarib berish kafolati</h1>
				</div>
				<Image src={'/right.png'} alt={'left'} width={70} height={50}  />
			
			</div>
			
			
			<div className={'mt-14 text-center max-lg:text-start max-lg:px-[50px]'}>
				<div className={'text-xl rounded-xl inter space-y-7 py-5'}>
					<p className={'inter w-full '}>Ushbu darslarni yozish uchun ko’plab o’z ishini
						mutaxassilari mehnat qildi</p>
					<p className={'w-full '}>Va bu darslar sizga yoqishiga men kafolat beraman.</p>
					<p className={'w-full '}>Agarda darslarni olib, ko’rib chiqsangiz-u…</p>
					<p className={'w-full '}>Va ushbu darslikdagi ma’lumotlar 497,000 so’mga
						arzishiga ishonch hosil qilmasangiz,</p>
					<p className={' w-full '}>Bizga darsni xarid qilgan sanangizdan boshlab, 3 kun
						ichida murojaat qiling. </p>
					<p className={'w-full  '}>To’lovingizni 100% to’liq holda qaytarib beramiz.</p>
				</div>
			
			</div>
		</div>
	)
}
export default Eyes
