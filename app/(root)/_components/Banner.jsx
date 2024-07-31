import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logo from '/public/logo.png'
import banner from '/public/banner.png'
import star from '/public/star.svg'


const Banner = () => {
	return (
		<div className={'bg-[#141522] w-full py-4'}>
			
			
			<div>
				<div className={'w-full text-center text-white mb-[17rem]'}>
					<h1 className={'text-5xl oswald font-[74px] text-center leading-normal pb-5'}>UY SOTIB OLISHDA <br/> ALDANIB QOLMANG!</h1>
					<p className={' text-center text-md max-xl:justify-center px-5'}>2024-yilda uy sotib olishdan oldin nimalarga e’tibor berishingiz kerak? <br className={'md:block hidden'}/> Quyidagi videoni ko’ring va batafsil bilib oling.</p>
				</div>
				
				{/*<div className={'xl:z-0 xl:pl-[55%] xl:-mt-[140px] max-lg:mx-[5%] lg:mx-[10%] xl:mx-0 max-sm:mx-0'}>*/}
				{/*	<Image*/}
				{/*		src={banner}*/}
				{/*		alt={'banner'}*/}
				{/*		width={740}*/}
				{/*		height={740}*/}
				{/*		className={'h-full'}*/}
				{/*	/>*/}
				{/*</div>*/}
			</div>
		
		</div>
	
	)
}
export default Banner
