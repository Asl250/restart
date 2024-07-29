import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logo from '/public/logo.png'
import banner from '/public/banner.png'
import star from '/public/star.svg'


const Banner = () => {
	return (
		<div className={'bg-[#141522] w-full xl:h-[45rem]'}>
			
			
			<div>
				<div className={'md:flex md:ml-16 mb-6 z-50'}>
					<div className={'md:mr-16 max-md:w-full max-md:mx-[43%]'}>
						<Image
							src={logo}
							alt={'logo'}
							width={100}
							height={100}
						/>
					</div>
					
					<div
						className={'xl:text-2xl lg:text-xl text-lg font-semibold flex md:mt-10 mt-5 max-md:w-[22rem] max-sm:mx-[7%] max-md:text-md max-md:mx-[20%] bg-white py-3 px-7 rounded-full'}>
						<div className={' w-7 h-7 rounded-full bg-green-500 mt-1 mr-4'} />
						ТОШКEНТ • 24-28 август
					</div>
				</div>
				<div className={'xl:z-50 text-white xl:absolute xl:ml-[10%] max-xl:w-full max-xl:text-center max-xl:mx-auto'}>
					<h1 className={'w-full max-xl:justify-center xl:max-w-2xl my-10 text-5xl font-semibold text-center leading-normal'}>UY SOTIB OLISHDA ALDANIB QOLMANG!</h1>
					<p className={'max-xl:mx-[10%] xl:max-w-2xl text-center text-lg max-xl:justify-center'}>2024-yilda uy sotib olishdan oldin nimalarga e’tibor berishingiz kerak? Quyidagi videoni ko’ring va batafsil bilib oling.</p>
					<div className={'flex justify-center mt-3 mb-6'}>
						<Image src={star} alt={'star'} width={20} height={20}/>
						<Image src={star} alt={'star'} width={20} height={20}/>
						<Image src={star} alt={'star'} width={20} height={20}/>
						<Image src={star} alt={'star'} width={20} height={20}/>
						<Image src={star} alt={'star'} width={20} height={20}/>
						<p className={'pl-4'}>40 000 ўқувчилар</p>
					</div>
					<div className={'md:flex max-xl:mb-5 justify-center md:space-x-3 max-md:space-y-3'}>
						<Button className={'max-md:block max-md:w-[70%] max-md:mx-auto max-md:text-xl max-md:pt-2 py-10 px-16 rounded-full text-lg bg-green-500'}>Ishtirok etish</Button>
						<Button className={'max-md:block max-md:w-[70%] max-md:mx-[15%] max-md:text-xl max-md:pt-2 py-10 px-16 rounded-full text-lg text-black bg-white'}>Ishtirok etish</Button>
					</div>

				</div>
				
				<div className={'xl:z-0 xl:pl-[55%] xl:-mt-[140px] max-lg:mx-[5%] lg:mx-[10%] xl:mx-0 max-sm:mx-0'}>
					<Image
						src={banner}
						alt={'banner'}
						width={740}
						height={740}
						className={'h-full'}
					/>
				</div>
			</div>
		
		</div>
	
	)
}
export default Banner
