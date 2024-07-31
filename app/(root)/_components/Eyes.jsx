import Image from 'next/image'
const Eyes = () => {
	return (
		<div className={'bg-black  py-14'}>
			<div className={'max-lg:w-full max-lg:mx-auto max-sm:mx-0 hidden max-lg:block'}>
				<Image
					src={'https://optim.tildacdn.one/tild6437-3032-4530-a534-323133313262/-/resize/870x/-/format/webp/guarantee-1.png'}
					alt={'token'} width={500} height={300} className={'w-[65%] mb-10 max-lg:mx-auto'} />
			</div>
			
			<h1 className={'w-full font-semibold text-[#feebbd] inter text-7xl max-md:text-5xl text-center'}>“Ko’zlarimga
				Ishonmayman”</h1>
			<h1 className={'w-full inter text-2xl text-center text-white mt-4'}>nomli to’lovingizni 100%
				to’liq<br className={'hidden max-md:block'} /> holda qaytarib berish kafolati</h1>
			<div className={' mt-14 xl:mx-[7%] max-lg:mx-[5%] text-start grid lg:grid-cols-2'}>
				<div className={'max-lg:w-full max-lg:mx-[10%] max-sm:mx-0 hidden lg:flex'}>
					<Image
						src={'https://optim.tildacdn.one/tild6437-3032-4530-a534-323133313262/-/resize/870x/-/format/webp/guarantee-1.png'}
						alt={'token'} width={500} height={300} />
				</div>
				<div className={'border border-[#feebbd] rounded-xl p-5 inter space-y-5 py-5 max-lg:ml-[7%]'}>
					<p className={'text-2xl inter font-[18px] w-full text-white'}>Ushbu darslarni yozish uchun ko’plab o’z ishini
						mutaxassilari mehnat qildi</p>
					<p className={'text-2xl w-full text-white'}>Va bu darslar sizga yoqishiga men kafolat beraman.</p>
					<p className={'text-2xl w-full text-white'}>Agarda darslarni olib, ko’rib chiqsangiz-u…</p>
					<p className={'text-2xl w-full text-white'}>Va ushbu darslikdagi ma’lumotlar 497,000 so’mga
						arzishiga ishonch hosil qilmasangiz,</p>
					<p className={'text-2xl w-full text-white'}>Bizga darsni xarid qilgan sanangizdan boshlab, 3 kun
						ichida murojaat qiling. </p>
					<p className={'text-2xl w-full  text-white'}>To’lovingizni 100% to’liq holda qaytarib beramiz.</p>
				</div>
			
			</div>
		</div>
	)
}
export default Eyes
