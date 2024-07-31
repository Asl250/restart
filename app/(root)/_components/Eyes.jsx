import Image from 'next/image'
import photo from '../../../public/token.png'

const Eyes = () => {
	return (
		<div className={'bg-[#141522] my-24 py-14'}>
			<h1 className={'w-full text-7xl max-md:text-5xl text-center font-semibold text-green-400'}>“Ko’zlarimga Ishonmayman”</h1>
			<h1 className={'w-full text-2xl text-center font-semibold text-white mt-4'}>nomli to’lovingizni 100% to’liq<br className={'hidden max-md:block'}/> holda qaytarib berish kafolati</h1>
			<div className={'mt-14 mx-[10%] text-start grid lg:grid-cols-2'}>
				<div className={'max-lg:w-full max-lg:mx-[10%] max-sm:mx-0'}>
					<Image src={photo} alt={'token'} width={500} height={300}/>
				</div>
				<div className={' space-y-5 py-5'}>
					<p className={'text-2xl w-full text-white'}>Ushbu darslarni yozish uchun ko’plab o’z ishini
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
