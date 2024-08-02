import { Button } from '@/components/ui/button'
import Image from 'next/image'
const Eyes = () => {
	return (
		<div className={'text-black pt-5 bg-[#fdf5f2]'}>
			<div className={'flex justify-center'}>
				<Image src={'/left.png'} alt={'left'} width={70} height={50} />
				<div
					className={'pt-10 px-[-10px] font-[800] inter text-7xl max-md:text-5xl max-sm:text-3xl text-center'}>“Ko’zlarimga
					Ishonmayman”
					<h1 className={' inter max-md:text-sm text-lg text-center mt-4'}>nomli to’lovingizni 100%
						to’liq holda qaytarib berish kafolati</h1>
				</div>
				<Image src={'/right.png'} alt={'left'} width={70} height={50} />
			
			</div>
			
			
			<div className={'mt-14 text-center max-lg:text-start max-lg:px-[50px]'}>
				<div className={'max-md:text-xl text-2xl rounded-xl inter space-y-7 py-5'}>
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
			<div className={'w-full items-center'}>
				<Button
					className={'mt-10 hover:bg-[#e73904] italic font-bold bg-[#e73904] w-[80%] md:w-[50%]  py-10 max-md:py-7  xl:text-4xl lg:text-3xl md:text-2xl max-md:text-xl  uppercase mx-auto md:mx-[25%] max-md:mx-[10%]'}>Hoziroq
					Darslikni olish</Button>
				<p className={'text-center max-md:text-lg text-2xl mt-7 inter font-[17px] text-black'}>Shoshiling!
					Joylar soni kam
					qoldi! </p>
				<div className={'w-full flex justify-center space-x-1 mt-3'}>
					<Image className={'md:w-[30%] mb-10'} src={'/redGif.gif'} alt={'d'} width={300} height={100} />
				</div>
			</div>
		</div>
	)
}
export default Eyes
